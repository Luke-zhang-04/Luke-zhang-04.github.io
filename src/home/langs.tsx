/**
 * Luke Zhang's developer portfolio
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang Luke-zhang-04.github.io
 * @license GPL-3.0
 *
 * @file languages display
 */
import * as ScrollMagic from "scrollmagic"
import * as utils from "../_utils"
import DeStagnate from "destagnate"
import langData from "./langData"

export interface LangDisplayState {
    // eslint-disable-next-line
    key: keyof LangData,
    title: string,
    text: string,
    href: string,
    index: number,
}

export interface LangData {
    tsjs: LangDisplayState,
    frontend: LangDisplayState,
    bash: LangDisplayState,
    backend: LangDisplayState,
}

export interface LangDisplayProps {
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

    public render = (): JSX.Element[] => [
        <h2 class="my-3">{this.state.title}</h2>,
        <span class="line d-block"/>,
        <p class="mb-4">{this.state.text}</p>,
        <a
            class="btn-box btn-box-primary d-none d-lg-block"
            href={this.state.href}
            role="button"
        >See Projects <span class="material-icons">trending_flat</span></a>,
        <a
            class="btn btn-outline-primary d-block d-lg-none"
            href={this.state.href}
            role="button"
        >See Projects</a>
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

    let currentKey: keyof LangData = "tsjs"

    scene.on("progress", (event) => {
        for (const [index, lang] of langs.entries()) {
            if (event.target.progress() <= increment * (index + 1)) {
                if (currentKey !== lang) {
                    currentKey = lang as keyof LangData
                    langDisplay.changeComponent({
                        ...(langData as LangData)[lang as keyof LangData],
                        key: lang as keyof LangData,
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
