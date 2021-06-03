// Configure the project yourself they said, it'll be easy they said
import * as childProcess from "child_process"
import * as fs from "fs"
import * as fse from "fs-extra"
import * as path from "path"
import * as url from "url"
import alias from "@rollup/plugin-alias"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import filesize from "rollup-plugin-filesize"
import html from "@rollup/plugin-html"
import json from "@rollup/plugin-json"
import license from "rollup-plugin-license"
import livereload from "rollup-plugin-livereload"
import htmlnano from "htmlnano"
import progress from "rollup-plugin-progress"
import replace from "@rollup/plugin-replace"
import resolve from "@rollup/plugin-node-resolve"
import resolveHtml from "./rollup/resolve-html"
import rollupUrl from "./rollup/resolve-file"
import sass from "sass"
import scss from "rollup-plugin-scss"
import svelte from "rollup-plugin-svelte"
import sveltePreprocess from "svelte-preprocess"
import visualizer from "rollup-plugin-visualizer"
import {terser} from "rollup-plugin-terser"
import typescript from "@rollup/plugin-typescript"
import yaml from "@rollup/plugin-yaml"

const production = !process.env.ROLLUP_WATCH
const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const processEnv = {NODE_ENV: production ? "production" : "development"}
const hashLen = 7
const hash = production // Grab the latest git commit hash and use that
    ? String(childProcess.execSync("git rev-parse HEAD")).trim().slice(0, hashLen)
    : ""
const outDir = production ? "build" : "public"
const bannerComment = `Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
License: BSD-3-Clause
Copyright (c) 2020 - 2021 Luke Zhang, Ethan Lim
===

`

// If production, delete the output directory contents and re-copy everything over
if (production) {
    fse.removeSync(outDir)

    for (const dir of fs.readdirSync(path.join(__dirname, "public"))) {
        if (dir !== "build" && dir !== "index.html") {
            fse.copySync(path.join(__dirname, "public", dir), path.join(__dirname, outDir, dir))
        }
    }
}

/**
 * Convert a rollup-plugin-license dependency to a string
 *
 * @param {import("rollup-plugin-license").Dependency} dep - Dependency
 * @returns {string}
 */
const dependencyToString = (dep) => {
    const lines = [`${dep.name} ${dep.version}`, `License: ${dep.license}`]

    if (dep.repository?.url) {
        lines.push(
            (typeof dep.repository === "string" ? dep.repository : dep.repository.url).replace(
                /^git\+/u,
                "",
            ),
        )
    } else if (dep.homepage) {
        lines.push(dep.homepage)
    } else if (dep.author) {
        lines.push(dep.author.text())
    }

    if (dep.licenseText) {
        lines.push("")
        const depText = dep.licenseText.split("\n")

        lines.push(depText.find((text) => /Copyright/.test(text)) ?? depText[0])
    }

    lines.push("===\n")

    return lines.join("\n")
}

function serve() {
    let server

    function toExit() {
        if (server) server.kill(0)
    }

    return {
        writeBundle() {
            if (server) return
            server = require("child_process").spawn("npm", ["run", "start", "--", "--dev"], {
                stdio: ["ignore", "inherit", "inherit"],
                shell: true,
            })

            process.on("SIGTERM", toExit)
            process.on("exit", toExit)
        },
    }
}

/**
 * @type {import("rollup").RollupOptions}
 */
const config = {
    input: "src/index.ts",
    output: {
        sourcemap: true,
        format: "iife",
        // file: production ? `${outDir}/bundle.${hash}.js` : `${outDir}/bundle.js`,
        dir: outDir,
        entryFileNames: production ? `static/js/bundle.${hash}.js` : "build/bundle.js",
        banner: `/*! For license information please see static/js/bundle.${hash}.js.LICENSE.txt */\n`,
    },
    onwarn: (warning, defaultHandler) => {
        // Suppress these warnings
        if (
            warning.code !== "CIRCULAR_DEPENDENCY" &&
            warning.code !== "MISSING_NAME_OPTION_FOR_IIFE_EXPORT"
        ) {
            defaultHandler(warning)

            return
        }
    },
    plugins: [
        // Alias ~ for the project root (src)
        alias({
            entries: [
                {
                    find: /^~\/(.*)/u,
                    replacement: path.join(__dirname, "src", "$1"),
                },
            ],
        }),
        svelte({
            preprocess: [sveltePreprocess({sourceMap: true})],
            compilerOptions: {
                // enable run-time checks when not in production
                dev: !production,
                hydratable: true,
                sourcemap: true,
            },
        }),
        typescript({
            tsconfig: "./tsconfig.json",
            sourceMap: true,
            inlineSources: true,
            target: production ? undefined : "ESNext",
        }),

        // Replace process.env.NODE_ENV
        replace({
            "process.env.NODE_ENV": JSON.stringify(processEnv.NODE_ENV),
            'process.env["NODE_ENV"]': JSON.stringify(processEnv.NODE_ENV),
            "process.env['NODE_ENV']": JSON.stringify(processEnv.NODE_ENV),
            "process.env": JSON.stringify(processEnv),
            preventAssignment: true,
        }),

        // we'll extract any component CSS out into
        // a separate file - better for performance
        scss({
            output: production
                ? `${outDir}/static/css/bundle.${hash}.css`
                : `${outDir}/build/bundle.css`,
            outputStyle: production ? "compressed" : "expanded",
            sass,
        }),

        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration -
        // consult the documentation for details:
        // https://github.com/rollup/plugins/tree/master/packages/commonjs
        resolve({
            browser: true,
            dedupe: ["svelte", "tslib"],
        }),
        commonjs(),
        progress(),

        // Resolve JSON and YAML files
        json({
            indent: "  ",
            namedExports: false,
            preferConst: true,
        }),
        yaml(),

        // Resolve images with hashes and their URLs
        rollupUrl({
            include: ["**/*.svg", "**/*.png", "**/*.jp(e)?g", "**/*.gif", "**/*.webp"],
            limit: 0,
            fileName: production ? "[name].[hash][extname]" : "[name][extname]",
            sourceDir: path.join(__dirname, "src"),
            destDir: path.join(__dirname, outDir, production ? "static" : "build", "media"),
            publicPath: path.join(production ? "static" : "build", "media"),
            minifySvg: production,
            hashLen,
        }),

        // In dev mode, call `npm run start` once
        // the bundle has been generated
        !production && serve({}),

        // Watch the `public` directory and refresh the
        // browser on changes when not in production
        !production && livereload("public"),

        // In production mode, transpile for older browsers with babel
        production &&
            babel({
                babelrc: false,
                babelHelpers: "bundled",
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            useBuiltIns: "usage",
                            corejs: 3,
                        },
                    ],
                ],
                minified: false,
                comments: true,
                sourceMaps: true,
            }),

        // Open source libraries are licensed and copyrighted
        // Make sure to create a license file to stay within license terms
        production &&
            license({
                thirdParty: {
                    includePrivate: true,
                    output: {
                        template: (deps) =>
                            bannerComment +
                            (deps.length > 0
                                ? deps.map((dep) => dependencyToString(dep)).join("\n")
                                : "No third parties dependencies"),
                        file: `${outDir}/static/js/bundle.${hash}.js.LICENSE.txt`,
                        encoding: "utf-8",
                    },
                },
            }),

        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production &&
            terser({
                format: {
                    comments: /For license information/u,
                },
            }),

        // Show filesize
        production && filesize({showMinifiedSize: false}),

        // Emit a bundle analysis page
        production &&
            visualizer({
                filename: "analysis/index.html",
                template: "treemap",
            }),

        // Process index.html and replace scripts with hashed names
        production &&
            html({
                template: async ({files}) => {
                    const script = (files.js ?? [])
                        .map(({fileName}) => `<script defer src="${fileName}"></script>`)
                        .join("\n")

                    const css = `<link rel="stylesheet" href="static/css/bundle.${hash}.css"/>`

                    const contents = (await fs.promises.readFile("./public/index.html", "utf-8"))
                        .replace(/[\s\S].*<( )*link .*href="build\/bundle.css".*>.*[\s\S]/u, css)
                        .replace(
                            /[\s\S].*<( )*script .*src="build\/bundle.js".*>.*[\s\S]/u,
                            script,
                        )

                    return production ? (await htmlnano.process(contents)).html : contents
                },
            }),

        // Resolve 404.html
        production &&
            resolveHtml({
                files: [["./public/404.html", "./build/404.html"]],
                shouldMinify: true,
            }),
    ],
    watch: {
        clearScreen: false,
    },
}

export default config
