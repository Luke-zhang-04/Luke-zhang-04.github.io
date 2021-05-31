/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 *
 * @license BSD-3-Clause
 * @copyright (C) 2020 - 2021 Luke Zhang
 */

export * as firebase from "./firebase"

export const getImageUrl = (filename: string): string =>
    `https://firebasestorage.googleapis.com/v0/b/luke-zhang.appspot.com/o/project_images%2F${encodeURIComponent(
        filename,
    )}?alt=media`
