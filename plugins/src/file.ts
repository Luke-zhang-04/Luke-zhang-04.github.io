/**
 * @license MIT
 * @file improved Version of @rollup/plugin-url with configurable hash length and svg minification
 * @copyright (c) 2019 RollupJS Plugin Contributors
 *  (https://github.com/rollup/plugins/graphs/contributors), 2021 Luke Zhang
 * @see {@link https://github.com/rollup/plugins/blob/master/packages/url/src/index.js}
 */

import {createFilter} from "@rollup/pluginutils"
import crypto from "crypto"
import {promises as fs} from "fs"
import mime from "mime"
import {optimize} from "svgo"
import path from "path"
import type {PluginFunc} from "./types"

const hash = (
    algo: string,
    contents: string | Buffer,
    format: crypto.BinaryToTextEncoding = "hex",
) => crypto.createHash(algo).update(contents).digest(format)

const {posix, sep} = path
const defaultInclude = ["**/*.svg", "**/*.png", "**/*.jp(e)?g", "**/*.gif", "**/*.webp"]

type RollupUrlOptions = {
    exclude?: null | string | string[]
    include?: string | string[]
    limit?: number
    publicPath?: string
    emitFiles?: boolean
    fileName?: string
    hashLen?: number
    sourceDir?: string
    destDir?: string
    minifySvg?: boolean
    minifySvgOptions?: import("svgo").OptimizeOptions
}

/**
 * Improved Version of @rollup/plugin-url with configurable hash length and svg minification
 *
 * @see {@link https://github.com/rollup/plugins/tree/master/packages/url}
 */
const url: PluginFunc<RollupUrlOptions> = (options = {}) => {
    const {
        limit = 14 * 1024,
        include = defaultInclude,
        exclude,
        publicPath = "",
        emitFiles = true,
        fileName = "[hash][extname]",
        hashLen = 16,
        minifySvg = false,
        minifySvgOptions,
    } = options

    const filter = createFilter(include, exclude)
    const copies: {[key: string]: string} = Object.create(null)

    return {
        name: "url",
        async load(id) {
            if (!filter(id)) {
                return null
            }
            const [stats, buffer] = await Promise.all([fs.stat(id), fs.readFile(id)])
            let data: string

            if ((limit && stats.size > limit) || limit === 0) {
                const checksum = hash("sha384", buffer, "hex").slice(0, hashLen)
                const ext = path.extname(id)
                const name = path.basename(id, ext)
                /**
                 * Determine the directory name of the file based on either the relative path
                 * provided in options, or the parent directory
                 */
                const relativeDir = options.sourceDir
                    ? path.relative(options.sourceDir, path.dirname(id))
                    : path.dirname(id).split(sep).pop()

                // Generate the output file name based on some string replacement parameters
                const outputFileName = fileName
                    .replace(/\[hash\]/g, checksum)
                    .replace(/\[extname\]/g, ext)
                    .replace(/\[dirname\]/g, relativeDir === "" ? "" : `${relativeDir}${sep}`)
                    .replace(/\[name\]/g, name)

                // Windows fix - exports must be in unix format
                data = path.join(publicPath, outputFileName).split(sep).join(posix.sep)
                copies[id] = outputFileName
            } else {
                const mimetype = mime.getType(id)
                const isSVG = mimetype === "image/svg+xml"
                const encoding = isSVG ? "" : ";base64"

                data = isSVG ? encodeSVG(buffer) : buffer.toString("base64")
                data = `data:${mimetype}${encoding},${data}`
            }

            return `export default ${JSON.stringify(data)}`
        },
        async generateBundle(outputOptions) {
            // Allow skipping saving files for server side builds.
            if (!emitFiles) return

            const base =
                options.destDir ?? outputOptions.dir ?? path.dirname(outputOptions.file ?? "")

            await fs.mkdir(base, {recursive: true})

            await Promise.all(
                Object.entries(copies).map(async ([name, output]) => {
                    // Create a nested directory if the fileName pattern contains a directory structure
                    const outputDirectory = path.join(base, path.dirname(output))

                    await fs.mkdir(outputDirectory, {recursive: true})

                    if (minifySvg && name.endsWith(".svg")) {
                        const contents = optimize(
                            await fs.readFile(name, "utf-8"),
                            minifySvgOptions,
                        ).data

                        return fs.writeFile(path.join(base, output), contents)
                    }

                    return fs.copyFile(name, path.join(base, output))
                }),
            )
        },
    }
}

// https://github.com/filamentgroup/directory-encoder/blob/master/lib/svg-uri-encoder.js
const encodeSVG = (buffer: Buffer) =>
    encodeURIComponent(
        buffer
            .toString("utf-8")
            // strip newlines and tabs
            .replace(/[\n\r]/gim, "")
            .replace(/\t/gim, " ")
            // strip comments
            .replace(/<!--(.*(?=-->))-->/gim, "")
            // replace
            .replace(/'/gim, "\\i"),
    )
        // encode brackets
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29")

export default url
