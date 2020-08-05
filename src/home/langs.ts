/**
 * Luke Zhang's developer portfolio
 * Copyright (C) 2020 Luke Zhang Luke-zhang-04.github.io
 * 
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
 * @file languages display
 */
import * as ScrollMagic from "scrollmagic"
import * as utils from "../_utils"
import DeStagnate, {createElement} from "destagnate"
import {default as langData} from "./langData.json"

export interface LangData {
    [index: string]: LangDisplayState,
    tsjs: LangDisplayState,
    frontend: LangDisplayState,
    bash: LangDisplayState,
    backend: LangDisplayState,
}

export interface LangDisplayState {
    [index: string]: string | number,
    key: string,
    title: string,
    text: string,
    href: string,
    index: number,
}

export interface LangDisplayProps {
    [index: string]: HTMLElement,
    parent: HTMLElement,
}

export default class LangDisplay extends DeStagnate
    <LangDisplayProps, LangDisplayState> {

    public constructor (parent: HTMLElement, props: LangDisplayProps) {
        super(parent, props)

        this.state = {
            ...(langData as LangData).tsjs,
            key: "tsjs",
            index: 0,
        }
    }

    /**
     * Sets state with slight delay (to fade out)
     * @param {Object.<string, string>} obj - object of new state
     * @returns {void} void
     */
    public changeComponent = (obj: LangDisplayState): void => {
        this.props!.parent.classList.add("fade-out")

        setTimeout(() => {
            this.setState(obj)
            this.props!.parent.classList.remove("fade-out")
        }, 250)
    }

    public render = (): HTMLElement[] => [
        createElement("h2", {class: "my-3"}, this.state.title),
        createElement("span", {class: "line d-block"}),
        createElement("p", {class: "mb-4"}, this.state.text),
        createElement("a", {
            class: "btn-box btn-box-primary d-none d-lg-block",
            href: this.state.href,
            role: "button",
        }, [
            "See projects ",
            createElement("span", {class: "material-icons"}, "trending_flat")
        ]),
        createElement("a", {
            class: "btn btn-outline-primary d-block d-lg-none",
            href: this.state.href,
            role: "button",
        }, "See Projects"),
    ]

}

/**
 * Binds ScrollMagic to elements
 * @param {HTMLDivElement} container - container of event
 * @param {HTMLCollectionOf.<HTMLImageElement>} images - names of images
 * @param {LangDisplay} langDisplay - language display component
 * @returns {ScrollMagic.Scene} scrollmagic scene
 */
export const bindLangStickEvent = (
    container: HTMLDivElement,
    images: HTMLCollectionOf<HTMLImageElement>,
    langDisplay: LangDisplay,
): ScrollMagic.Scene => {
    console.log(images[images.length - 1].offsetTop + window.innerHeight * 0.5)

    const scene = new ScrollMagic.Scene({
            triggerElement: images[0],
            triggerHook: 0.5,
            duration: images[images.length - 1].offsetTop +
                window.innerHeight * 0.5,
        }),
        increment = 1 / images.length,
        langs = ["tsjs", "frontend", "bash", "backend"]
    
    if (scene) {
        scene.setPin(container)
            .addTo(utils.default.controller)
    }

    let currentKey = "tsjs"

    scene.on("progress", (event) => {
        for (const [index, lang] of langs.entries()) {
            if (event.target.progress() <= increment * (index + 1)) {
                if (currentKey !== lang) {
                    currentKey = lang
                    langDisplay.changeComponent({
                        ...(langData as LangData)[lang],
                        key: lang,
                        index,
                    })
                }
                break
            }
        }
    })

    return scene
}

export const controller = utils.default
