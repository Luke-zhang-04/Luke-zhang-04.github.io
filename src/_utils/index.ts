/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 * @copyright (C) 2020 - 2021 Luke Zhang
 * @license BSD-3-Clause
 */

export const getImageUrl = (filename: string): string => (
    `https://firebasestorage.googleapis.com/v0/b/luke-zhang.appspot.com/o/project_images%2F${
        encodeURIComponent(filename)
    }?alt=media`
)
