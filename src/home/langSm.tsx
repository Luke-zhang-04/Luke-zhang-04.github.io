/**
 * Luke Zhang's developer portfolio
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang Luke-zhang-04.github.io
 * @license GPL-3.0
 *
 * @file mobile languages display
 */

import {
    LangData,
    LangDisplayProps,
    LangDisplayState,
} from "./langs"
import DeStagnate from "destagnate"
import langData from "./langData"

export default class LangDisplaySm extends DeStagnate.Component
    <LangDisplayProps, LangDisplayState> {

    private _contentRef = this.createRef<HTMLDivElement>()

    public constructor (parent: HTMLElement, props: LangDisplayProps) {
        super(parent, props)

        this.state = {
            ...(langData as LangData).tsjs,
            key: "tsjs",
            index: 0,
        }
    }

    public render = (): JSX.Element => <>
        <div class="change-buttons">{this._changeButtons()}</div>
        <div ref={this._contentRef}>
            <h2 class="my-3">{this.state.title}</h2>
            <span class="line d-block"/>
            <p class="mb-4">{this.state.text}</p>
            <a
                class="btn btn-outline-primary d-block d-lg-none"
                href={this.state.href}
                role="button"
            >See Projects</a>
        </div>
    </>

    private _incrementData = (val: 1 | -1): void => {
        this._contentRef.current?.classList.add("fade-out")

        setTimeout(() => {
            if (this.state.index + val >= Object.keys(langData).length) {
                this.setState({
                    index: 0,
                    key: Object.keys(langData)[0] as keyof LangData,
                })
            } else if (this.state.index + val < 0) {
                this.setState({
                    index: 3,
                    key: Object.keys(langData)[3] as keyof LangData,
                })
            } else {
                this.setState({
                    index: this.state.index + val,
                    key: Object.keys(
                        langData
                    )[this.state.index + val] as keyof LangData,
                })
            }

            this.setState({
                ...(langData as LangData)[this.state.key]
            })

            this._contentRef.current?.classList.remove("fade-out")
        }, 250)
    }

    private _changeButtons = (): [
        leftArrow: JSX.Element,
        rightArrow: JSX.Element
    ] => [
        <button class="btn-circle btn-circle-primary mr-3">
            <span
                class="material-icons"
                onClick={(): void => this._incrementData(-1)}
            >arrow_back</span>
        </button>,
        <button class="btn-circle btn-circle-primary ml-3">
            <span
                class="material-icons"
                onClick={(): void => this._incrementData(1)}
            >arrow_forward</span>
        </button>,
    ]

}
