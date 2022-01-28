<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2022 Luke Zhang
 -->
<script lang="ts">
    import {createEventDispatcher, onDestroy} from "svelte"
    import defaultImage from "./default.svg"

    const dispatch =
        createEventDispatcher<{
            error: Event & {
                currentTarget: EventTarget & HTMLElement
            }
            load: Event & {
                currentTarget: EventTarget & HTMLElement
            }
        }>()
    const props = $$props as Omit<svelte.JSX.HTMLProps<HTMLImageElement>, "src"> & {
        /**
         * If the default grey square should be included last in the queue
         *
         * @default true
         */
        shouldUseDefault?: boolean

        /**
         * Image source, either from
         */
        src: string | string[]
    }

    let images: string[] = []

    $: images = typeof props.src === "string" ? [props.src] : props.src

    let currentIndex = 0
    let didLoad = false

    if (props.shouldUseDefault !== false) {
        // undefined -> true
        images.push(defaultImage)
    }

    const {class: className} = $$props

    onDestroy(() => (images = []))
</script>

{#if !didLoad}
    {#if $$slots.spinner}
        <slot name="spinner" />
    {:else}
        <slot />
    {/if}
{/if}
<img
    alt="All backups failed"
    {...$$props}
    src={images[currentIndex]}
    class="{didLoad ? 'd-block' : 'd-none'} {className}"
    on:load={(event) => {
        didLoad = true

        return dispatch("load", event)
    }}
    on:error={(event) => {
        if (images.length > currentIndex + 1) {
            currentIndex++
        }

        return dispatch("error", event)
    }}
/>
