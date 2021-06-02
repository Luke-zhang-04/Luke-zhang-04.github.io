import fs from "fs/promises"
import htmlnano from "htmlnano"

/**
 * @typedef {{
 *     collapseWhitespace: "conservative" | "agressive" | "all"
 *     deduplicateAttributeValues: boolean
 *     removeComments: "safe" | "all"
 *     removeEmptyAttributes: boolean
 *     removeAttributeQuotes: boolean
 *     removeUnusedCss: {ignore: string[]} | {tool: "purgeCSS"; safelist: string[]}
 *     minifyCss: {[key: string]: unknown}
 *     minifyJs: import("terser").MinifyOptions
 *     minifyJson: boolean
 *     minifySvg: boolean
 *     minifyConditionalComments: boolean
 *     removeRedundantAttributes: boolean
 *     collapseBooleanAttributes: boolean
 *     mergeStyles: boolean
 *     mergeScripts: boolean
 *     custom: Function
 *     sortAttributesWithLists: "alphabetical" | "frequency"
 *     sortAttributes: "alphabetical" | "frequency"
 *     minifyUrls: boolean
 *     removeOptionalTags: boolean
 * }} HTMLNanoOptions
 */

/**
 * @param {{
 *     files?: [input: string, output: string][]
 *     shouldMinify?: boolean
 *     htmlnanoOptions?: Partial<HTMLNanoOptions>
 * }} param0
 * @returns {import("rollup").Plugin}
 */
const plugin = ({files = [], shouldMinify = false, htmlnanoOptions = {}}) => ({
    name: "resolve-html",
    async buildStart() {
        await Promise.all(
            files.map(async ([entry, out]) => {
                if (shouldMinify) {
                    await fs.writeFile(
                        out,
                        (
                            await htmlnano.process(
                                await fs.readFile(entry, "utf-8"),
                                htmlnanoOptions,
                            )
                        ).html,
                    )
                } else {
                    await fs.copyFile(entry, out)
                }
            }),
        )
    },
})

export default plugin
