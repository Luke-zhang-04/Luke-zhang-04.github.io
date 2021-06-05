/**
 * @file Nothing Special, just processes an html file and moves it to a directory
 */

import fs from "fs/promises"
import htmlnano from "htmlnano"
import type {PluginFunc} from "./types"

type HTMLNanoOptions = {
    collapseWhitespace: "conservative" | "agressive" | "all"
    deduplicateAttributeValues: boolean
    removeComments: "safe" | "all"
    removeEmptyAttributes: boolean
    removeAttributeQuotes: boolean
    removeUnusedCss: {ignore: string[]} | {tool: "purgeCSS"; safelist: string[]}
    minifyCss: {[key: string]: unknown}
    minifyJs: import("terser").MinifyOptions
    minifyJson: boolean
    minifySvg: boolean
    minifyConditionalComments: boolean
    removeRedundantAttributes: boolean
    collapseBooleanAttributes: boolean
    mergeStyles: boolean
    mergeScripts: boolean
    custom: Function
    sortAttributesWithLists: "alphabetical" | "frequency"
    sortAttributes: "alphabetical" | "frequency"
    minifyUrls: boolean
    removeOptionalTags: boolean
}

type RollupHtmlOptions = {
    files?: [input: string, output: string][]
    shouldMinify?: boolean
    htmlnanoOptions?: Partial<HTMLNanoOptions>
}

/**
 * Nothing special, just processes an html file and moves it to a directory
 */
const html: PluginFunc<RollupHtmlOptions> = ({
    files = [],
    shouldMinify = false,
    htmlnanoOptions = {},
}) => ({
    name: "resolve-html",
    async buildStart() {
        await Promise.all(
            files.map(async ([entry, out]) => {
                let contents = await fs.readFile(entry, "utf-8")

                if (shouldMinify) {
                    contents = (await htmlnano.process(contents, htmlnanoOptions)).html
                }

                this.emitFile({
                    type: "asset",
                    name: out,
                    source: contents,
                })
            }),
        )
    },
})

export default html
