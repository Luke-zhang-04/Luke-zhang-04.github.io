/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 *
 * @license BSD-3-Clause
 * @copyright (C) 2020 - 2021 Luke Zhang
 */

import {crypto, getImageUrl} from "./utils"
import {firestore, snapshotToArray} from "./utils/firebase"

export const pages: {name: string; displayName: string; href: string; isExternal?: boolean}[] = [
    {
        name: "home",
        displayName: "Home",
        href: "/",
    },
    {
        name: "portfolio",
        displayName: "Portfolio",
        href: "portfolio",
    },
    {
        name: "resume",
        displayName: "Resume",
        href: "https://rebrand.ly/luke-zhang-resume",
        isExternal: true,
    },
]

/* eslint-disable @typescript-eslint/naming-convention */
export interface ProjectData {
    date: number
    description: string
    file: string
    lang: {
        name: string
        colour: string
    }
    links: {
        github: string
        pypi?: string
        npm?: string
        live?: string
        marketplace?: string
    }
    shortDescription: string
    tags: string[]
}
/* eslint-enable @typescript-eslint/naming-convention */

export interface Project extends ProjectData {
    imgUrl: string
    name: string
    id: string
}

const fallbackCounter = 0

export const projectData: Promise<Project[]> = (async () => {
    const projects = snapshotToArray(
        await firestore?.collection("projects").orderBy("date", "desc").get(),
    )

    return await Promise.all(
        projects.map(async (doc) => {
            const data = doc.data() as ProjectData

            return {
                ...data,
                name: doc.id,
                id: (await crypto.hash("SHA-256", doc.id)) ?? fallbackCounter.toString(),
                imgUrl: getImageUrl(data.file),
            }
        }),
    )
})()

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
        key: "github",
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
        key: "pypi",
        text: "PyPi",
        icon: ["fontawesome", "fab fa-python"],
        color: "primary",
    },
    {
        key: "npm",
        text: "NPM",
        icon: ["fontawesome", "fab fa-npm"],
        color: "danger",
    },
]
