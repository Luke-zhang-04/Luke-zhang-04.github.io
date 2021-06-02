<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2021 Luke Zhang
 -->
<style lang="scss">
    @use "src/styles/variables";

    @mixin _projects-sm() {
        .swiper-container {
            height: 90vh;
        }
    }

    .swiper-container {
        width: 100%;
        height: min(100vh, 100vw);
        max-height: max-content;
        position: relative;

        .swiper-wrapper {
            position: absolute;
        }
    }

    @media (min-width: map-get(variables.$grid-breakpoints, "md")) {
        @include _projects-sm();
    }
</style>

<script lang="ts">
    import "swiper/swiper.scss"
    import "swiper/components/pagination/pagination.scss"
    import {EffectCoverflow, Swiper} from "swiper/swiper.esm"
    import {onDestroy, onMount} from "svelte"

    Swiper.use([EffectCoverflow])

    export let options: import("swiper").SwiperOptions = {}

    let elem: HTMLElement
    let pagination: HTMLElement
    let swiper: Swiper | undefined

    onMount(() => {
        swiper = new Swiper(elem, {
            ...options,
            pagination:
                options.pagination && pagination
                    ? {
                          el: pagination,
                      }
                    : undefined,
        })
    })

    onDestroy(() => {
        swiper?.destroy()
    })
</script>

<div class="swiper-container" bind:this={elem}>
    {#if $$slots.header}
        <slot name="header" />
        <div class="swiper-wrapper"><slot name="slides" /></div>
    {:else}
        <div class="swiper-wrapper"><slot /></div>
    {/if}

    {#if options.pagination}
        <div class="swiper-pagination mb-lg-5 d-block" bind:this={pagination} />
    {/if}
</div>
