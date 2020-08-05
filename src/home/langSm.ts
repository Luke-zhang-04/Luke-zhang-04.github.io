/**
 * Luke Zhang's developer portfolio
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang Luke-zhang-04.github.io
 * @license GPL-3.0
 * 
 * @file mobile languages display
 */

import DeStagnate, {createElement} from "destagnate"
import {
    LangData,
    LangDisplayProps,
    LangDisplayState,
} from "./langs"
import {default as langData} from "./langData.json"

export default class LangDisplaySm extends DeStagnate
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

    public render = (): HTMLElement[] => [
        createElement("div", {class: "change-buttons"}, this._changeButtons()),
        createElement(
            "div",
            {ref: this._contentRef},
            createElement("h2", {class: "my-3"}, this.state.title),
            createElement("span", {class: "line d-block"}),
            createElement("p", {class: "mb-4"}, this.state.text),
            createElement("a", {
                class: "btn btn-outline-primary d-block d-lg-none",
                href: this.state.href,
                role: "button",
            }, "See Projects"),
        )
    ]

    private _incrementData = (val: 1 | -1): void => {
        this._contentRef.current?.classList.add("fade-out")

        setTimeout(() => {
            if (this.state.index + val >= Object.keys(langData).length) {
                this.setState({
                    index: 0,
                    key: Object.keys(langData)[0],
                })
            } else if (this.state.index + val < 0) {
                this.setState({
                    index: 3,
                    key: Object.keys(langData)[3],
                })
            } else {
                this.setState({
                    index: this.state.index + val,
                    key: Object.keys(langData)[this.state.index + val],
                })
            }

            this.setState({
                ...(langData as LangData)[this.state.key]
            })

            this._contentRef.current?.classList.remove("fade-out")
        }, 250)
    }

    private _changeButtons = (): HTMLElement[] => [
        createElement(
            "button",
            {class: "btn-circle btn-circle-primary mr-3"},
            createElement(
                "span",
                {
                    class: "material-icons",
                    onClick: () => this._incrementData(-1),
                },
                "arrow_back"
            )
        ),
        createElement(
            "button",
            {class: "btn-circle btn-circle-primary ml-3"},
            createElement(
                "span",
                {
                    class: "material-icons",
                    onClick: () => this._incrementData(1),
                },
                "arrow_forward"
            )
        )
    ]

}
