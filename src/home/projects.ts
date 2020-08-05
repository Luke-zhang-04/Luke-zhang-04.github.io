/**
 * Luke Zhang's developer portfolio
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang Luke-zhang-04.github.io
 * @license GPL-3.0
 * 
 * @file projects display
 */
import * as firebaseApp from "../_firebase"
import type {default as _Swiper} from "swiper/bundle"
import createElement from "destagnate/lib/createElement"

declare class Swiper extends _Swiper {}

/* eslint-disable @typescript-eslint/naming-convention */

interface Links {
    [index: string]: string | undefined,
    GitHub?: string,
    PyPi?: string,
    NPM?: string,
    live?: string,
}
/* eslint-enable @typescript-eslint/naming-convention */

interface ProjectData {
    date: number,
    description: string,
    file: string,
    links: Links,
    tags: string[],
}

// CDN https://firebasestorage.googleapis.com/v0/b/luke-zhang.appspot.com/o/project_images%2F**FILENAME**?alt=media

/**
 * Displays projects with swiper
 * @returns {void} void
 */
const displayProjects = async (): Promise<_Swiper> => {
    const sliderContainer = document.getElementById("projects-slider")

    await firebaseApp.firestore.collection("projects")
        .orderBy("date", "desc")
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                const imgFileName = (doc.data() as ProjectData).file,
                    imgUrl = `https://firebasestorage.googleapis.com/v0/b/luke-zhang.appspot.com/o/project_images%2F${imgFileName}?alt=media`

                sliderContainer?.querySelector(".swiper-wrapper")?.appendChild(
                    createElement(
                        "div",
                        {
                            class: "swiper-slide",
                            style: `background-image: url(${imgUrl});`,
                        },
                    )
                )
            })
        })

    return new Swiper("#projects-slider", {
        effect: "coverflow",
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    })
}

export default displayProjects
