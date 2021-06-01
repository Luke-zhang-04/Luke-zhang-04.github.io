import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import css from "rollup-plugin-css-only"
import filesize from "rollup-plugin-filesize"
import license from "rollup-plugin-license"
import livereload from "rollup-plugin-livereload"
import progress from "rollup-plugin-progress"
import resolve from "@rollup/plugin-node-resolve"
import scss from "rollup-plugin-scss"
import svelte from "rollup-plugin-svelte"
import sveltePreprocess from "svelte-preprocess"
import visualizer from "rollup-plugin-visualizer"
import {terser} from "rollup-plugin-terser"
import typescript from "@rollup/plugin-typescript"

const production = !process.env.ROLLUP_WATCH
const bannerComment = `Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
License: BSD-3-Clause
Copyright 2020 - 2021 Luke Zhang, Ethan Lim
===

`

/**
 * @param {import("rollup-plugin-license").Dependency} dep - Dependency
 * @returns {string}
 */
const dependencyToString = (dep) => {
    const lines = [`${dep.name} ${dep.version}`, `License: ${dep.license}`]

    if (dep.repository?.url) {
        lines.push(`${dep.repository.url}`)
    } else if (dep.homepage) {
        lines.push(`${dep.homepage}`)
    } else if (dep.author) {
        lines.push(`${dep.author.text()}`)
    }

    if (dep.licenseText) {
        lines.push("")
        const depText = dep.licenseText.split("\n")

        lines.push(depText.find((text) => /Copyright/.test(text)) ?? depText[0])
        lines.push("===\n")
    }

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
        file: "public/build/bundle.js",
        banner: "/*! For license information please see build/bundle.js.LICENSE.txt */\n",
    },
    onwarn: (warning, defaultHandler) => {
        if (
            warning.code !== "CIRCULAR_DEPENDENCY" &&
            warning.code !== "MISSING_NAME_OPTION_FOR_IIFE_EXPORT"
        ) {
            defaultHandler(warning)

            return
        }
    },
    plugins: [
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

        // we'll extract any component CSS out into
        // a separate file - better for performance
        css({output: "bundle.css"}),

        scss({
            output: "public/build/bootstrap.css",
            outputStyle: production ? "compressed" : "expanded",
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

        // In dev mode, call `npm run start` once
        // the bundle has been generated
        !production && serve({}),

        // Watch the `public` directory and refresh the
        // browser on changes when not in production
        !production && livereload("public"),

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
                        file: "public/build/bundle.js.LICENSE.txt",
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

        production && filesize({showMinifiedSize: false}),

        production &&
            visualizer({
                filename: "analysis/index.html",
                template: "treemap",
            }),
    ],
    watch: {
        clearScreen: false,
    },
}

export default config
