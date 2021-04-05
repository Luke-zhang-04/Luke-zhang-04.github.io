/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 * @copyright (C) 2020 - 2021 Luke Zhang
 * @license BSD-3-Clause
 */

import * as firebaseApp from "../_firebase"
import Swiper, {EffectCoverflow} from "swiper/core"
import DeStagnate from "destagnate"
import type {ProjectData} from "../_globals"
import {getImageUrl} from "../_utils"

Swiper.use([EffectCoverflow])

/**
 * Displays projects with swiper
 */
;(async (): Promise<Swiper> => {
    const sliderContainer = document.getElementById("projects-slider")

    await firebaseApp.firestore
        ?.collection("projects")
        .orderBy("date", "desc")
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                const imgFileName = (doc.data() as ProjectData).file
                const imgUrl = getImageUrl(imgFileName)

                sliderContainer
                    ?.querySelector(".swiper-wrapper")
                    ?.appendChild(
                        <div
                            class="swiper-slide"
                            loading="lazy"
                            style={`background-image: url(${imgUrl});`}
                        />,
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
})()
