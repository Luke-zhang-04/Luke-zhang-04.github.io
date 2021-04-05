/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 * @copyright (C) 2020 - 2021 Luke Zhang
 * @license BSD-3-Clause
 */

export const getImageUrl = (filename: string): string =>
    `https://firebasestorage.googleapis.com/v0/b/luke-zhang.appspot.com/o/project_images%2F${encodeURIComponent(
        filename,
    )}?alt=media`

/**
 * Splits an array into chunks
 * @param arr - array to split
 * @param chunkSize - size of array chunks
 */
export function* arrayToChunks<T extends unknown>(
    arr: T[],
    chunkSize = 3,
): Generator<T[], void, void> {
    for (let index = 0; index < arr.length; index += chunkSize) {
        yield arr.slice(index, index + chunkSize)
    }
}

export const hash = async (
    algo: AlgorithmIdentifier,
    data: unknown,
    enc: "hex" | number | "base64" = "hex",
): Promise<string | undefined> => {
    if (
        typeof crypto?.subtle?.digest === "undefined" ||
        typeof TextEncoder === "undefined" ||
        typeof Uint8Array === "undefined"
    ) {
        // Not supported
        return
    }

    const encodedData = new TextEncoder().encode(JSON.stringify(data))
    const hashBuffer = await crypto.subtle.digest(algo, encodedData)

    if (enc === "base64") {
        return btoa(String.fromCharCode(...new Uint8Array(hashBuffer)))
    }

    const hashArray = Array.from(new Uint8Array(hashBuffer))

    return hashArray
        .map((bite) => bite.toString(enc === "hex" ? 16 : enc).padStart(2, "0"))
        .join("") // Hex string
}
