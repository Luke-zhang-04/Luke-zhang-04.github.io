/**
 * Luke Zhang's developer portfolio
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang Luke-zhang-04.github.io
 * @license AGPL-3.0
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
 */
import * as ScrollMagic from "scrollmagic"
import * as utils from "../_utils"
import DeStagnate, {createElement} from "destagnate"
import {default as langData} from "./langData.json"

interface LangData {
    [index: string]: LangDisplayState,
    tsjs: LangDisplayState,
    frontend: LangDisplayState,
    bash: LangDisplayState,
    backend: LangDisplayState,
}

interface LangDisplayState {
    [index: string]: string,
    key: string,
    title: string,
    text: string,
    href: string,
}

export default class LangDisplay extends DeStagnate<{}, LangDisplayState> {

    public constructor (parent: HTMLElement) {
        super(parent)

        this.state = {
            ...(langData as LangData).tsjs,
            key: "tsjs",
        }
    }

    public render = (): HTMLElement => createElement("div", {}, [
        createElement("h2", {class: "my-3"}, this.state.title),
        createElement("span", {class: "line d-block"}),
        createElement("p", {class: "mb-4"}, this.state.text),
        createElement("button", {
            class: "btn-box btn-box-primary",
            href: this.state.href,
        }, [
            "See projects ",
            createElement("span", {class: "material-icons"}, "trending_flat")
        ])
    ])

    public getState = (): LangDisplayState => this.state

}

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
            .addTo(utils.default)
    }

    scene.on("progress", (event) => {
        for (const [index, lang] of langs.entries()) {
            if (event.target.progress() <= increment * (index + 1)) {
                if (langDisplay.getState().key !== lang) {
                    langDisplay.setState({
                        ...(langData as LangData)[lang],
                        key: lang,
                    })
                }
                break
            }
        }
    })

    return scene
}
