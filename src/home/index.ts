/**
 * Luke Zhang's developer portfolio
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang Luke-zhang-04.github.io
 * 
 * @license
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 * @file main homepage script
 */

import * as ScrollMagic from "scrollmagic"
import LangDisplay, {bindLangStickEvent, controller} from "./langs"
import LangDisplaySm from "./langSm"
import displayProjects from "./projects"
import globals from "../_globals"

displayProjects()

let scrollmagicScene: ScrollMagic.Scene | undefined

const langDisplay = new LangDisplay(
        document.getElementById("langs-display") as HTMLElement,
        {parent: document.getElementById("langs-display") as HTMLElement}
    ),
    langDisplaySM = new LangDisplaySm(
        document.getElementById("langs-display") as HTMLElement,
        {parent: document.getElementById("langs-display") as HTMLElement}
    ),

    windowResize = (): void => {
        if (window.innerWidth > globals.sizes.sm) {
            const home = document.getElementById("home")
            
            langDisplay.unmount()
            langDisplaySM.unmount()
            langDisplay.mount()

            scrollmagicScene?.destroy(true)
            scrollmagicScene = undefined

            if (home) {
                if (
                    home.querySelector(".languages #fixed") &&
                    home.getElementsByClassName("lang-img") &&
                    !scrollmagicScene
                ) {
                    controller.init()

                    scrollmagicScene = bindLangStickEvent(
                        home.querySelector(".languages #fixed") as
                            HTMLDivElement,
                        home.getElementsByClassName("lang-img") as
                            HTMLCollectionOf<HTMLImageElement>,
                        langDisplay,
                    )
                }
            }
        } else {
            langDisplay.unmount()
            langDisplaySM.mount()
            controller.destroy()
        }
    },

    /**
     * Check scrolled elements and apply appropriate classes to them
     * @param {Array.<HTMLElement | null> | Array.<Array.<HTMLElement | null>>} elements - array of elements
     * @returns {void} void
     */
    checkScrolled = (
        elements: (HTMLElement | null)[] | (HTMLElement | null)[][]
    ): void => {
        const offset = window.innerHeight * 3 / 4,
            scrolled = window.scrollY + window.innerHeight - offset

        for (const element of elements) {
            let offsetTop: number | undefined = 0,
                _element: HTMLElement | null

            if (element instanceof Array) {
                offsetTop = element[1]?.offsetTop;
                [_element] = element
            } else {
                offsetTop = element?.offsetTop
                _element = element
            }

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
    },

    windowScroll = (): void => {
        const elems: (HTMLElement | null)[] | (HTMLElement | null)[][] =
            [
                [
                    document.querySelector(".swiper-container .title"),
                    document.querySelector(".swiper-container"),
                ],
            ]

        checkScrolled(elems)
    }

((): void => {
    document.querySelectorAll("#contact-container ul li")?.forEach((element) => {
        element.addEventListener(
            "click",
            () => element.querySelector("a")?.click(),
        )
    })

    window.onresize = windowResize
    window.onscroll = windowScroll

    windowScroll()
    windowResize()

    const images = document.getElementsByClassName("lang-img")

    if (images) {
        images[images.length - 1].addEventListener("load", windowResize)
    }
})()
