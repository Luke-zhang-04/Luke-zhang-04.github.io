/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 * @copyright (C) 2020 - 2021 Luke Zhang
 * @license BSD-3-Clause
 */

import "./langs"
import "./projects"

/**
 * Check scrolled elements and apply appropriate classes to them
 * @param {Array.<HTMLElement | null> | Array.<Array.<HTMLElement | null>>} elements - array of elements
 * @returns {void} void
 */
const checkScrolled = (
    elements: (HTMLElement | null)[] | (HTMLElement | null)[][],
): void => {
    const offset = window.innerHeight * 3 / 4
    const scrolled = window.scrollY + window.innerHeight - offset

    for (const element of elements) {
        const offsetTop = element instanceof Array
            ? element[1]?.offsetTop
            : element?.offsetTop
        const _element = element instanceof Array
            ? element[0]
            : element

        if (
            _element && offsetTop &&
            scrolled >= offsetTop &&
            !_element.classList.contains("scrolled-at")
        ) {
            _element.classList.add("scrolled-at")
        } else if (
            _element && offsetTop &&
            scrolled < offsetTop &&
            _element.classList.contains("scrolled-at")
        ) {
            _element.classList.remove("scrolled-at")
        }
    }
}

const windowScroll = (): void => {
    const elems: (HTMLElement | null)[] | (HTMLElement | null)[][] = [
        [
            document.querySelector(".swiper-container .title"),
            document.querySelector(".swiper-container"),
        ],
    ]

    checkScrolled(elems)
}

document.querySelectorAll("#contact-container ul li")?.forEach((element) => {
    element.addEventListener(
        "click",
        () => element.querySelector("a")?.click(),
    )
})

window.onscroll = windowScroll

windowScroll()
