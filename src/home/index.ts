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
import LangDisplay, {bindLangStickEvent} from "./langs"
import globals from "../_globals"

let scrollmagicScene: ScrollMagic.Scene

const langDisplay = new LangDisplay(
        document.getElementById("langs-display") as HTMLElement,
        {parent: document.getElementById("langs-display") as HTMLElement}
    ),

    windowResize = (): void => {
        if (window.innerWidth > globals.sizes.sm) {
            const home = document.getElementById("home")
            
            langDisplay.unmount()
            langDisplay.mount()

            if (home) {
                if (
                    home.querySelector(".languages #fixed") &&
                    home.getElementsByClassName("lang-img") &&
                    !scrollmagicScene
                ) {
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
        }
    }

window.onresize = windowResize

windowResize()
