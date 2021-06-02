<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2021 Luke Zhang
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
</style>

<script lang="ts">
    import {MaybeLink} from "~/components/elements"
    import type {ProjectData} from "~/globals"

    export let date: ProjectData["date"]
    export let description: ProjectData["description"]
    export let links: ProjectData["links"]
    export let lang: ProjectData["lang"]
    export let name: string
    export let id: string

    const projectAgeThreshold = 15_778_476_000 // 0.5 years in ms
    const msPerDay = 86_400_000

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
                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" />
            </div>
            <div class="modal-body">
                {description}
                {#if isProjectOld(date)}
                    <hr />
                    <p>
                        Note: this project was last modified{" "}
                        {Math.round((Date.now() - date) / msPerDay)} days ago. Some of the programming
                        in this project may be old and filled with bad practice. I am aware of this.
                    </p>
                {/if}
                <hr class="d-block d-md-none" />
                <div class="language d-block d-md-none">
                    <div class="language-indicator" style={`background-color: ${lang.colour}`} />
                    {lang.name}
                </div>
            </div>
            <div class="modal-footer flex-row flex-nowrap justify-content-start">
                <div class="d-none d-md-block col-3">
                    <div class="language">
                        <div
                            class="language-indicator"
                            style={`background-color: ${lang.colour}`}
                        />
                        {lang.name}
                    </div>
                </div>
                <div class="col-12 col-md-9 d-flex justify-content-end pe-3 button-container">
                    <MaybeLink class="btn btn-pill-dark mx-1" href={links.GitHub}>
                        Source <span class="material-icons">code</span>
                    </MaybeLink>
                    <MaybeLink class="btn btn-pill-success mx-1" href={links.live}>
                        <span class="expand">Live</span>
                        <span class="material-icons">visibility</span>
                    </MaybeLink>
                    <MaybeLink class="btn btn-pill-primary mx-1" href={links.PyPi}>
                        <span class="expand">PyPi</span>
                        <i class="fab fa-python" />
                    </MaybeLink>
                    <MaybeLink class="btn btn-pill-danger mx-1" href={links.NPM}>
                        <span class="expand">NPM</span>
                    </MaybeLink>
                </div>
            </div>
        </div>
    </div>
</div>
