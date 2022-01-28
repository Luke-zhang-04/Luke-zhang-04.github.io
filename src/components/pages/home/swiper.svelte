<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2022 Luke Zhang
 -->
<script lang="ts">
    import "swiper/css"
    import "swiper/css/pagination"
    import {EffectCoverflow, Pagination} from "swiper"
    import {SwiperSlide as Slide, Swiper} from "swiper/svelte"
    import {imageMap, projectData, shouldUseLocalImages} from "~/globals"
    import {Link} from "svelte-routing"
    import Spinner from "~/components/spinner"
</script>

{#await projectData}
    <Spinner color="primary" size="25vw" class="my-5" centered />
{:then projects}
    <div class="p-3 text-center mt-6 mt-md-0 title">
        <div>
            <h1>My Work</h1>
            <Link to="portfolio" class="btn btn-outline-primary" id="see-all-btn">See all</Link>
        </div>
    </div>
    <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        loop
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
            rotate: 45,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        }}
        pagination
    >
        {#each projects as { name, imgUrl }}
            <Slide
                loading="lazy"
                style="background-image: url({shouldUseLocalImages ? imageMap[name] : imgUrl});"
            />
        {/each}
    </Swiper>
{:catch err}
    {#if err instanceof Error}
        <p>{err.toString()}</p>
    {:else}
        <p>{JSON.stringify(err)}</p>
    {/if}
{/await}
