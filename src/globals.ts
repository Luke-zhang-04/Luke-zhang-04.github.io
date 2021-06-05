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
    shortDescription: string
    file: string
    links: {
        GitHub?: string
        PyPi?: string
        NPM?: string
        live?: string
        marketplace?: string
    }
    tags: string[]
    lang: {
        name: string
        colour: string
    }
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
