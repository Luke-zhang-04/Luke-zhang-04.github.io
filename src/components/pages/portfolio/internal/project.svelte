<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2021 Luke Zhang
 -->
<style lang="scss" src="./project.scss"></style>

<script lang="ts">
    import {Image as Img} from "~/components/elements"
    import Modal from "./modal.svelte"
    import type {ProjectData} from "~/globals"
    import Spinner from "~/components/spinner"

    export let date: ProjectData["date"]
    export let description: ProjectData["description"]
    export let shortDescription: ProjectData["shortDescription"]
    export let links: ProjectData["links"]
    export let lang: ProjectData["lang"]
    export let name: string
    export let id: string
    export let imgUrl: string
</script>

<Modal {...{date, description, links, lang, name, id}} />
<div class="col-12 col-md-6 col-lg-3 project-card">
    <figure>
        <Img src={imgUrl} alt={`${name} cover`} shouldUseDefault={false}>
            <Spinner color="primary" size="20vw" centered />
        </Img>
        <div class="card-overlay" />
        <figcaption class="text-center">
            <h1>{name}</h1>
            <p>{shortDescription}</p>
            <div class="project-btn-container">
                <button
                    class="btn btn-pill-primary"
                    data-toggle="modal"
                    data-target={`#modal-${id}`}
                >
                    More Info <span class="material-icons">chevron_right</span>
                </button>
            </div>
        </figcaption>
    </figure>
</div>
