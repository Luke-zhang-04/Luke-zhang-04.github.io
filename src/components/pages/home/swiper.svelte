<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2021 Luke Zhang
 -->

<script lang="ts">
    import "swiper/scss"
    import "swiper/scss/pagination"
    import {EffectCoverflow, Swiper as SwiperCore} from "swiper"
    import {SwiperSlide as Slide, Swiper} from "swiper/svelte"
    import {imageMap, projectData, shouldUseLocalImages} from "~/globals"
    import {Link} from "svelte-routing"
    import Spinner from "~/components/spinner"

    SwiperCore.use([EffectCoverflow])
</script>

{#await projectData}
    <Spinner color="primary" size="25vw" class="my-5" centered />
{:then projects}
    <Swiper
        effect="coverflow"
        loop
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        }}
        pagination
    >
        <div class="p-3 text-center mt-6 mt-md-0 title" slot="header">
            <div>
                <h1>My Work</h1>
                <Link to="portfolio" class="btn btn-outline-primary" id="see-all-btn">
                    See all
                </Link>
            </div>
        </div>
        <svelte:fragment slot="slides">
            {#each projects as { name, imgUrl }}
                <Slide
                    loading="lazy"
                    style="background-image: url({shouldUseLocalImages
                        ? imageMap[name]
                        : imgUrl});"
                />
            {/each}
        </svelte:fragment>
    </Swiper>
{:catch err}
    {#if err instanceof Error}
        <p>{err.toString()}</p>
    {:else}
        <p>{JSON.stringify(err)}</p>
    {/if}
{/await}
