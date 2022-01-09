/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 *
 * @license BSD-3-Clause
 * @copyright (C) 2020 - 2021 Luke Zhang
 */

import * as firestore from "firebase/firestore"
import {crypto, getImageUrl} from "./utils"
import {firestore as db, snapshotToArray} from "./utils/firebase"

export const shouldUseLocalImages = true

export {default as imageMap} from "./images"

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

export interface Project extends ProjectData {
    imgUrl: string
    name: string
    id: string
}

const fallbackCounter = 0

export const projectData: Promise<Project[]> = (async () => {
    const projects = snapshotToArray(
        await firestore.getDocs(
            firestore.query(
                firestore.collection(db, "projects"),
                firestore.orderBy("date", "desc"),
            ),
        ),
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

export const contactData = {
    email: "mailto:luke.zhang2004dev@gmail.com",
    github: "https://github.com/luke-zhang-04",
    linkedin: "https://www.linkedin.com/in/luke-zhang-1b8a89198/",
    stackoverflow: "https://stackoverflow.com/users/12370337/luke-zhang-04",
}

export const contactDataWithIcons: {href: string; iconClass: string}[] = [
    {href: contactData.email, iconClass: "far fa-envelope-open"},
    {href: contactData.github, iconClass: "fab fa-github"},
    {href: contactData.linkedin, iconClass: "fab fa-linkedin"},
]
