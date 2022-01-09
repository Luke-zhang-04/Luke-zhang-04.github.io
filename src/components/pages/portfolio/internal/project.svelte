<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2021 Luke Zhang
 -->
<style lang="scss" src="./project.scss"></style>

<script lang="ts">
    import {imageMap, shouldUseLocalImages} from "~/globals"
    import {Image as Img} from "~/components/elements"
    import Modal from "./modal.svelte"
    import type {ProjectData} from "~/globals"
    import Spinner from "~/components/spinner"

    const idLen = 7

    export let date: ProjectData["date"]
    export let description: ProjectData["description"]
    export let shortDescription: ProjectData["shortDescription"]
    export let links: ProjectData["links"]
    export let lang: ProjectData["lang"] = undefined
    export let name: string
    export let id: string
    export let imgUrl: string

    let modalId = ""

    $: modalId = id.slice(0, idLen)
</script>

<Modal {...{date, description, links, lang, name}} id={modalId} />
<div class="col-12 col-md-6 col-lg-3 project-card">
    <figure>
        <Img
            src={shouldUseLocalImages ? imageMap[name] : imgUrl}
            alt="{name} cover"
            shouldUseDefault={false}
        >
            <Spinner color="primary" size="20vw" centered />
        </Img>
        <div class="card-overlay" />
        <figcaption class="text-center">
            <h1>{name}</h1>
            <p>{shortDescription}</p>
            <div class="project-btn-container">
                <button
                    class="btn btn-pill-primary"
                    data-bs-toggle="modal"
                    data-bs-target={`#modal-${modalId}`}
                >
                    More Info <span class="material-icons">chevron_right</span>
                </button>
            </div>
        </figcaption>
    </figure>
</div>
