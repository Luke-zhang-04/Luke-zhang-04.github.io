/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 *
 * @license BSD-3-Clause
 * @copyright (C) 2020 - 2022 Luke Zhang
 */

export * as crypto from "./crypto"
export * as date from "./date"
export * as firebase from "./firebase"

export const getImageUrl = (filename: string): string =>
    `https://firebasestorage.googleapis.com/v0/b/luke-zhang.appspot.com/o/project_images%2F${encodeURIComponent(
        filename,
    )}?alt=media`

/**
 * Splits an array into chunks
 *
 * @param arr - Array to split
 * @param chunkSize - Size of array chunks
 */
export function* arrayToChunks<T extends unknown>(
    arr: T[],
    chunkSize = 3,
): Generator<T[], void, void> {
    for (let index = 0; index < arr.length; index += chunkSize) {
        yield arr.slice(index, index + chunkSize)
    }
}
