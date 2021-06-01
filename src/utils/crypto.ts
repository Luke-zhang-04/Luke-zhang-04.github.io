/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 *
 * @license BSD-3-Clause
 * @copyright (C) 2020 - 2021 Luke Zhang
 */

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
