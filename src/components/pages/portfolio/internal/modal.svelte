<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2022 Luke Zhang
 -->
<style lang="scss">
    .language {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        .language-indicator {
            width: 1rem;
            height: 1rem;
            border-radius: 1rem;
            margin-right: 0.5rem;
        }
    }

    .modal-footer .button-container {
        overflow-x: hidden;
    }

    .modal-body {
        overflow-y: scroll;
        max-height: 75vh;
    }
</style>

<script lang="ts">
    import * as utils from "~/utils"
    import {Anchor} from "~/components/markdown"
    import type {ProjectData} from "~/globals"
    import SvelteMarkdown from "svelte-markdown"
    import {linkData} from "~/globals"

    export let date: ProjectData["date"]
    export let description: ProjectData["description"]
    export let links: ProjectData["links"]
    export let lang: ProjectData["lang"]
    export let name: string
    export let id: string

    const projectAgeThreshold = 15_778_476_000 // 0.5 years in ms

    const isProjectOld = (timestamp: number): boolean =>
        Date.now() - timestamp > projectAgeThreshold
</script>

<div class="modal fade" id={`modal-${id}`} tabindex="-1" aria-labelledby={id} aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" {id}>
                    <span class="material-icons">source</span>
                    {"  "}
                    {name}
                </h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                />
            </div>
            <div class="modal-body">
                <SvelteMarkdown
                    source={description.replace(/\\n/gu, "\n")}
                    renderers={{link: Anchor}}
                />
                {#if isProjectOld(date)}
                    <hr />
                    <p>
                        Note: this project was last modified {utils.date.timeDifference(date)}.
                        Some of the programming in this project may be old and filled with bad
                        practice.
                    </p>
                {/if}
                <hr class="d-block d-md-none" />
                {#if lang}
                    <div class="language d-block d-md-none">
                        <div
                            class="language-indicator"
                            style={`background-color: ${lang.colour}`}
                        />
                        {lang.name}
                    </div>
                {/if}
            </div>
            {#if Object.keys(links).length > 0 || lang}
                <div class="modal-footer flex-row flex-nowrap justify-content-start">
                    <div class="d-none d-md-block col-3">
                        {#if lang}
                            <div class="language">
                                <div
                                    class="language-indicator"
                                    style={`background-color: ${lang.colour}`}
                                />
                                {lang.name}
                            </div>
                        {/if}
                    </div>
                    <div class="col-12 col-md-9 d-flex justify-content-end pe-3 button-container">
                        {#each linkData as link}
                            {#if links[link.key]}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={links[link.key]}
                                    class="btn btn-pill-{link.color ?? 'primary'} mx-1"
                                >
                                    {link.text}
                                    {#if link.icon}
                                        {" "}
                                        {#if link.icon[0] === "material-icons"}
                                            <span class="material-icons">{link.icon[1]}</span>
                                        {:else}
                                            <i class={link.icon[1]} />
                                        {/if}
                                    {/if}
                                </a>
                            {/if}
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>
