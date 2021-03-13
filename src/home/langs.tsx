/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 * @copyright (C) 2020 - 2021 Luke Zhang
 * @license BSD-3-Clause
 */

import DeStagnate from "destagnate"
import languages from "./langData.json"

type LanguagesState = {
    currentLang: number,
}

class Languages extends DeStagnate.Component<
    Record<string, string>,
    LanguagesState
> {

    private _images = Array.from(
        document.querySelectorAll<HTMLImageElement>(
            "#languages .image-container img",
        ),
    )

    private _containerElem = document.getElementById("languages") as HTMLElement

    public constructor (parent: HTMLElement | null) {
        super(parent)

        this.state = {
            currentLang: 0,
        }
    }

    public shouldComponentUpdate = this.stateDidChange

    public onScroll = (): void => {
        const {scrollY} = window
        const {offsetTop} = this._containerElem
        const fixed = document.getElementById("fixed")
        const imageContainer =
            document.querySelector("#languages .image-container") as HTMLElement
        const height = window.innerHeight
        const containerBottom = imageContainer?.offsetTop +
            imageContainer?.clientHeight +
            height

        if ( // Add fixed class if when reached, set image
            scrollY >= offsetTop &&
            scrollY < containerBottom
        ) {
            this._setCurrentImage(this._images.reverse())

            fixed?.classList.add("position-fixed")
            fixed?.classList.remove("bottom")
        } else if (this.state.currentLang === 0 && scrollY < offsetTop) { // Remove it if scrolled above it
            fixed?.classList.remove("position-fixed")
            fixed?.classList.remove("bottom")
        } else if (scrollY >= containerBottom) { // Remove if reached below it
            fixed?.classList.remove("position-fixed")
            fixed?.classList.add("bottom")
        }
    }

    public render = (): JSX.Element => <>
        <h2 class="my-3">{languages[this.state.currentLang].title}</h2>
        <span class="line d-block"/>
        <p class="mb-4">{languages[this.state.currentLang].text}</p>
        <a
            href={languages[this.state.currentLang].href}
            class="btn-box btn-box-primary d-none d-lg-block"
        >
            See Projects{" "}
            <span class="material-icons">trending_flat</span>
        </a>
        <a
            href={languages[this.state.currentLang].href}
            class="btn btn-outline-primary d-block d-lg-none"
        >See Projects</a>
    </>


    /**
     * Sets the current image that has been scrolled to to the state
     * @param images - array of image elements from bottom to top
     * @param scrollY - current scrollY from window
     */
    private _setCurrentImage = (images: HTMLImageElement[]): void => {
        for (const [index, image] of images.entries()) {
            const {y: position} = image.getBoundingClientRect(),
                shrinkFactor = 3

            if (position - image.height < window.innerHeight / shrinkFactor) {
                const newIndex = images.length - (index + 1)

                if (newIndex === this.state.currentLang) {
                    return
                }

                this.parent?.classList.add("fade-out")

                setTimeout(() => {
                    this.setState({currentLang: newIndex})
                    this.parent?.classList.remove("fade-out")
                }, 250)

                return
            }
        }
    }

}

const languagesComponent = new Languages(document.getElementById("langs-display"))

languagesComponent.mount()
