/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 * @copyright (C) 2020 - 2021 Luke Zhang
 * @license BSD-3-Clause
 */

import "./projects"

/**
 * Check scrolled elements and apply appropriate classes to them
 * @param {Array.<HTMLElement | null> | Array.<Array.<HTMLElement | null>>} elements - array of elements
 * @returns {void} void
 */
const checkScrolled = (elements: (HTMLElement | null)[] | (HTMLElement | null)[][]): void => {
    const offset = (window.innerHeight * 3) / 4
    const scrolled = window.scrollY + window.innerHeight - offset

    for (const element of elements) {
        const offsetTop = element instanceof Array ? element[1]?.offsetTop : element?.offsetTop
        const _element = element instanceof Array ? element[0] : element

        if (
            _element &&
            offsetTop &&
            scrolled >= offsetTop &&
            !_element.classList.contains("scrolled-at")
        ) {
            _element.classList.add("scrolled-at")
        } else if (
            _element &&
            offsetTop &&
            scrolled < offsetTop &&
            _element.classList.contains("scrolled-at")
        ) {
            _element.classList.remove("scrolled-at")
        }
    }
}

const windowScroll = (): void => {
    const elems = [document.querySelector<HTMLElement>(".swiper-container")]

    checkScrolled(elems)
}

// For the contact section, make sure that the links can still be clicked
document.querySelectorAll("#contact-container ul li")?.forEach((element) => {
    element.addEventListener("click", () => element.querySelector("a")?.click())
})

window.addEventListener("scroll", windowScroll)

windowScroll()
