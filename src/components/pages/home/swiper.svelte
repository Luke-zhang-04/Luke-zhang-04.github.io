<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2021 Luke Zhang
 -->
<script lang="ts">
    import "swiper/swiper.scss"
    import "swiper/components/pagination/pagination.scss"
    import "components/effect-coverflow/effect-coverflow.scss"
    import SwiperCore, {EffectCoverflow} from "swiper/core"
    import {Swiper, SwiperSlide} from "swiper/svelte"
    import {Link} from "svelte-routing"
    import Spinner from "../../spinner/index.svelte"
    import {projectData} from "../../../globals"

    SwiperCore.use([EffectCoverflow])
</script>

<!--
<div class="swiper-container" id="projects-slider">
    <div class="p-3 text-center mt-6 mt-md-0 title">
        <div>
            <h1>My Work</h1>
            <Link to="portfolio.html" class="btn btn-outline-primary" id="see-all-btn">
                See all
            </Link>
        </div>
    </div>
    <div class="swiper-wrapper">
    {#await projectData}
        <Spinner color="primary" size="25vw" class="my-5" centered />
    {:then projects}
        {#each projects as {imgUrl}}
            <SwiperSlide loading="lazy" style={`background-image: url(${imgUrl});`} />
        {/each}
    {/await}
    </div>

    <div class="swiper-pagination mb-lg-5 d-block" />
</div> -->

{#await projectData}
    <Spinner color="primary" size="25vw" class="my-5" centered />
{:then projects}
    <Swiper
        effect="coverflow"
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        pagination={true}
        coverflowEffect={{rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true}}
        id="projects-slider"
    >
        {#each projects as {imgUrl}}
            <SwiperSlide loading="lazy" style={`background-image: url(${imgUrl});`} />
        {/each}
    </Swiper>
{:catch err}
    {#if err instanceof Error}
        <p>{err.toString()}</p>
    {:else}
        <p>{JSON.stringify(err)}</p>
    {/if}
{/await}
