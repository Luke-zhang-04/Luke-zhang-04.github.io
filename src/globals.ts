/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 *
 * @license BSD-3-Clause
 * @copyright (C) 2020 - 2021 Luke Zhang
 */

import {firestore, snapshotToArray} from "./utils/firebase"
import {getImageUrl} from "./utils"

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
    }
    tags: string[]
    lang: {
        name: string
        colour: string
    }
}
/* eslint-enable @typescript-eslint/naming-convention */

export const projectData: Promise<(ProjectData & {imgUrl: string})[]> = firestore
    ?.collection("projects")
    .orderBy("date", "desc")
    .get()
    .then((snapshot) =>
        snapshotToArray(snapshot).map((doc) => {
            const data = doc.data() as ProjectData

            return {
                ...data,
                imgUrl: getImageUrl(data.file),
            }
        }),
    )
