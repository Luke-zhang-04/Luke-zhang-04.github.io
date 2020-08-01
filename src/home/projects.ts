/**
 * Luke Zhang's developer portfolio
 * Copyright (C) 2020 Luke Zhang Luke-zhang-04.github.io
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
