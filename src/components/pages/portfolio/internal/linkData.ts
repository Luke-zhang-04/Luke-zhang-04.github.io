/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 *
 * @license BSD-3-Clause
 * @copyright (C) 2020 - 2021 Luke Zhang
 */

import type {ProjectData} from "~/globals"

type LinkData = {
    key: keyof ProjectData["links"]
    text: string
    icon?:
        | [provider: "material-icons", name: string]
        | [provider: "fontawesome", className: string]
    color?: string
}

export const linkData: LinkData[] = [
    {
        key: "GitHub",
        text: "Source",
        icon: ["material-icons", "code"],
        color: "dark",
    },
    {
        key: "live",
        text: "Live",
        icon: ["material-icons", "visibility"],
        color: "success",
    },
    {
        key: "marketplace",
        text: "VSCode Marketplace",
        icon: ["material-icons", "store"],
        color: "primary",
    },
    {
        key: "PyPi",
        text: "PyPi",
        icon: ["fontawesome", "fab fa-python"],
        color: "primary",
    },
    {
        key: "NPM",
        text: "NPM",
        color: "danger",
    },
]

export default linkData
