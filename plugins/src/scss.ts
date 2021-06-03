/**
 * @license MIT
 * @file improved Version of rollup-plugin-scss which uses Rollup file emit APIs rather than `fs`
 * @copyright (c) 2016 Thomas Ghysels, 2021 Luke Zhang
 * @see {@link https://github.com/thgh/rollup-plugin-scss/}
 */

import {existsSync, mkdirSync} from "fs"
import {createFilter, CreateFilter} from "@rollup/pluginutils"
import path from "path"
import type {PluginFunc} from "./types"

export interface CSSPluginOptions {
    exclude?: Parameters<CreateFilter>[1]
    failOnError?: boolean
    include?: Parameters<CreateFilter>[0]
    includePaths?: string[]
    insert?: boolean
    output?: string | false | ((css: string, styles: Styles) => void)
    prefix?: string
    processor?: (css: string, map: string, styles: Styles) => CSS | Promise<CSS> | PostCSSProcessor
    sass?: SassRenderer
    sourceMap?: boolean
    verbose?: boolean
    watch?: string | string[]
    outputStyle?: "expaneded" | "compressed"
}

type CSS = string | {css: string; map: string}

interface MappedCSS {
    css: string
    map: string
}

interface Styles {
    [id: string]: string
}

interface PostCSSProcessor {
    process: (css: string, options?: any) => MappedCSS
}

interface SassRenderer {
    renderSync: (options: SassOptions) => SassResult
}

interface SassOptions {
    data: string
}

interface SassResult {
    css: Buffer
    map?: Buffer
}

const loadSassLibrary = async (): Promise<SassRenderer> => {
    try {
        return await import("sass")
    } catch {
        // @ts-expect-error
        return await import("node-sass")
    }
}

const scss: PluginFunc<CSSPluginOptions> = (options = {}) => {
    const filter = createFilter(
        options.include || ["/**/*.css", "/**/*.scss", "/**/*.sass"],
        options.exclude,
    )
    let dest = typeof options.output === "string" ? options.output : null
    const insertStyleFnName = "___$insertStylesToHeader"

    const styles: Styles = {}
    const prefix = options.prefix ? options.prefix + "\n" : ""
    let includePaths = options.includePaths || ["node_modules/"]
    includePaths.push(process.cwd())

    const compileToCSS = async function (scss: string) {
        // Compile SASS to CSS
        if (scss.length) {
            includePaths = includePaths.filter((v, i, a) => a.indexOf(v) === i)
            try {
                const sass = options.sass || (await loadSassLibrary())

                const render = sass.renderSync(
                    Object.assign(
                        {
                            data: prefix + scss,
                            outFile: dest,
                            includePaths,
                        },
                        options,
                    ),
                )

                const css = render.css.toString()
                const map = render.map ? render.map.toString() : ""

                // Possibly process CSS (e.g. by PostCSS)
                if (typeof options.processor === "function") {
                    const result = await options.processor(css, map, styles)

                    // TODO: figure out how to check for
                    // @ts-ignore
                    const postcss: PostCSSProcessor = result

                    // PostCSS support
                    if (typeof postcss.process === "function") {
                        return Promise.resolve(
                            postcss.process(css, {
                                from: undefined,
                                to: dest,
                                map: map ? {prev: map, inline: false} : null,
                            }),
                        )
                    }

                    // @ts-ignore
                    const output: string | MappedCSS = result

                    return stringToCSS(output)
                }
                return {css, map}
            } catch (e) {
                if (options.failOnError) {
                    throw e
                }
                console.log()
                console.log(red("Error:\n\t" + e.message))
                if (e.message.includes("Invalid CSS")) {
                    console.log(green("Solution:\n\t" + "fix your Sass code"))
                    console.log("Line:   " + e.line)
                    console.log("Column: " + e.column)
                }
                if (e.message.includes("sass") && e.message.includes("find module")) {
                    console.log(
                        green(
                            "Solution:\n\t" +
                                "npm install --save-dev sass" +
                                "\n\tor\n\t" +
                                "npm install --save-dev node-sass",
                        ),
                    )
                }
                if (e.message.includes("node-sass") && e.message.includes("bindings")) {
                    console.log(green("Solution:\n\t" + "npm rebuild node-sass --force"))
                }
                console.log()
            }
        }
        return {css: "", map: ""}
    }

    return {
        name: "scss",
        intro() {
            return options.insert === true
                ? insertStyleFn.replace(/insertStyleFn/, insertStyleFnName)
                : ""
        },
        async transform(code, id) {
            if (!filter(id)) {
                return
            }

            // Add the include path before doing any processing
            includePaths.push(path.dirname(id))

            // Rebuild all scss files if anything happens to this folder
            // TODO: check if it's possible to get a list of all dependent scss files
            //       and only watch those
            if (options.watch) {
                const files = Array.isArray(options.watch) ? options.watch : [options.watch]
                files.forEach((file) => this.addWatchFile(file))
            }

            if (options.insert === true) {
                // When the 'insert' is enabled, the stylesheet will be inserted into <head/> tag.
                const {css} = await compileToCSS(code)

                return {
                    code: "export default " + insertStyleFnName + "(" + JSON.stringify(css) + ")",
                    map: {mappings: ""},
                }
            } else if (options.output === false) {
                // When output is disabled, the stylesheet is exported as a string
                const {css} = await compileToCSS(code)

                return {
                    code: "export default " + JSON.stringify(css),
                    map: {mappings: ""},
                }
            }

            // Map of every stylesheet
            styles[id] = code

            return ""
        },
        async generateBundle(opts) {
            // No stylesheet needed
            if (options.output === false || options.insert === true) {
                return
            }

            // Combine all stylesheets
            let scss = ""
            for (const id in styles) {
                scss += styles[id] || ""
            }

            if (typeof dest !== "string") {
                // Guess destination filename
                dest = opts.file || "bundle.js"
                if (dest.endsWith(".js")) {
                    dest = dest.slice(0, -3)
                }
                dest = dest + ".css"
            }

            const compiled = await compileToCSS(scss)

            if (typeof compiled !== "object" || typeof compiled.css !== "string") {
                return
            }

            // Emit styles through callback
            if (typeof options.output === "function") {
                options.output(compiled.css, styles)
                return
            }

            // Don't create unwanted empty stylesheets
            if (!compiled.css.length) {
                return
            }

            // Ensure that dest parent folders exist (create the missing ones)
            ensureParentDirsSync(path.dirname(dest))

            this.emitFile({
                type: "asset",
                source: compiled.css,
                name: dest,
            })

            if (options.sourceMap && compiled.map) {
                let sourcemap = compiled.map
                if (typeof compiled.map.toString === "function") {
                    sourcemap = compiled.map.toString()
                }

                this.emitFile({
                    type: "asset",
                    source: sourcemap,
                    name: dest + ".map",
                })
            }
        },
    }
}

/**
 * Create a style tag and append to head tag
 *
 * @param {String} css Style
 * @returns {String} Css style
 */
const insertStyleFn = `function insertStyleFn(css) {
  if (!css) {
    return
  }
  if (typeof window === 'undefined') {
    return
  }
  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css
}`

function stringToCSS(input: string | CSS): MappedCSS {
    if (typeof input === "string") {
        return {css: input, map: ""}
    }
    return input
}

function red(text: string) {
    return "\x1b[1m\x1b[31m" + text + "\x1b[0m"
}

function green(text: string) {
    return "\x1b[1m\x1b[32m" + text + "\x1b[0m"
}

function ensureParentDirsSync(dir: string) {
    if (existsSync(dir)) {
        return
    }

    try {
        mkdirSync(dir)
    } catch (err) {
        if (err.code === "ENOENT") {
            ensureParentDirsSync(path.dirname(dir))
            ensureParentDirsSync(dir)
        }
    }
}

export default scss
