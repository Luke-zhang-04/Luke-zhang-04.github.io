import {babel} from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import filesize from "rollup-plugin-filesize"
import fs from "fs/promises"
import json from "@rollup/plugin-json"
import license from "rollup-plugin-license"
import {nodeResolve} from "@rollup/plugin-node-resolve"
import progress from "rollup-plugin-progress"
import {terser} from "rollup-plugin-terser"
import typescript from "@rollup/plugin-typescript"

const banner = (filename) =>
    `/*! For license information please see ${filename}.js.LICENSE.txt */\n`

const bannerComment = `Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
License: BSD-3-Clause
Copyright 2020 - 2021 Luke Zhang, Ethan Lim
===

`

/**
 *
 * @param {import("rollup-plugin-license").Dependency} dep - dependency
 * @returns {string}
 */
const dependencyToString = (dep) => {
    const lines = [`${dep.name} ${dep.version}`, `License: ${dep.license}`]

    if (dep.repository) {
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

const config = async (isProduction = process.env.NODE_ENV !== "dev") => {
    const scripts = (await fs.readdir("./src/", {withFileTypes: true}))
        .filter((dir) => dir.isDirectory() && dir.name[0] !== "_")
        .map((dir) => dir.name)

    /**
     * @type {import("rollup").RollupOptions[]}
     */
    const configs = []

    // prettier-ignore
    /**
     * @param {string} script - script name
     * @returns {import("rollup").Plugin[]}
     */
    const plugins = (script) => [
        typescript(),
        commonjs(),
        json({
            namedExports: false,
            preferConst: true,
        }),
        nodeResolve(),
        ...isProduction
            ? [
                license({
                    thirdParty: {
                        includePrivate: true,
                        output: {
                            template: (deps) => bannerComment + (deps.length > 0
                                ? deps.map((dep) => dependencyToString(dep)).join("\n")
                                : "No third parties dependencies"),
                            file: `${
                                process.env.NODE_ENV == "dev" ? "public" : "build"
                            }/js/${script}.js.LICENSE.txt`,
                            encoding: "utf-8",
                        },
                    },
                }),
                babel({
                    babelrc: false,
                    babelHelpers: "bundled",
                    presets: [["@babel/preset-env", {
                        useBuiltIns: "usage",
                        corejs: 3,
                    }]],
                    minified: false,
                    comments: true,
                }),
                terser({
                    mangle: {
                        properties: {
                            regex: /^_/u, // Mangle private properties
                        },
                    },
                    format: {
                        comments: /For license information/u,
                    },
                }),
                filesize({
                    showMinifiedSize: false,
                }),
            ]
        : [],
        progress(),
    ]

    for (const script of scripts) {
        const entry = (await fs.readdir(`./src/${script}`)).find((dir) => /index/u.test(dir))

        configs.push({
            input: `./src/${script}/${entry}`,
            output: {
                file: `${process.env.NODE_ENV === "dev" ? "public" : "build"}/js/${script}.js`,
                format: "iife",
                banner: process.env.NODE_ENV === "dev" ? undefined : banner(script),
                sourcemap: true,
            },
            plugins: plugins(script),
            watch: process.env.NODE_ENV === "dev",
        })
    }

    return configs
}

export default config()
