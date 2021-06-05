<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2021 Luke Zhang
 -->
<style lang="scss">
    :global(.dropdown-menu.show) {
        max-height: 50vh;
        overflow-y: scroll;
    }

    .dropdown-item {
        cursor: pointer;
    }
</style>

<script lang="ts">
    import Fuse from "fuse.js/dist/fuse.basic.esm"
    import Grid from "./internal/grid.svelte"
    import Spinner from "~/components/spinner"
    import {projectData} from "~/globals"

    type Project = import("~/globals").Project

    const searchOptions: Fuse.IFuseOptions<Project> = {
        keys: ["description", "shortDescription", "name", "tags"],
        shouldSort: true,
        distance: 60,
    }

    let allProjects: Project[] = []
    let projects: Project[] = []
    let allTags = new Set(["all"])
    let currentTag = "all"

    projectData.then((_projects) => {
        projects = allProjects = _projects

        for (const project of projects) {
            for (const tag of project.tags) {
                allTags.add(tag)
            }
        }
    })

    const onInput: svelte.JSX.FormEventHandler<HTMLInputElement> = ({target}) => {
        const searchValue = (target as HTMLInputElement)?.value

        if (!searchValue) {
            projects = allProjects

            return
        }

        const fuse = new Fuse(allProjects, searchOptions)
        const search = fuse.search(searchValue)

        projects = search.map((item) => item.item)
    }
</script>

{#await projectData}
    <Spinner color="primary" size="25vw" class="my-5" centered />
{:then}
    <div class="container-fluid">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text material-icons">search</span>
            </div>
            <input
                type="text"
                class="form-control"
                placeholder="Project Search"
                aria-label="Project Search"
                on:input={onInput}
            />
        </div>
        <div class="dropdown col-1">
            <button
                class="btn input-group-text dropdown-toggle"
                type="button"
                id="tag-filter-dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <span class="material-icons">filter_list</span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="tag-filter-dropdown">
                {#each Array.from(allTags) as tag}
                    {#if currentTag === tag}
                        <li class="dropdown-item d-flex flex-row justify-content-between">
                            {tag}
                            <span class="material-icons">check</span>
                        </li>
                    {:else}
                        <li
                            on:click={() => {
                                currentTag = tag
                            }}
                            class="dropdown-item">{tag}</li
                        >
                    {/if}
                {/each}
            </ul>
        </div>
        <Grid
            projects={currentTag === "all"
                ? projects
                : projects.filter((project) => project.tags.includes(currentTag))}
        />
    </div>
{:catch err}
    {#if err instanceof Error}
        <p>{err.toString()}</p>
    {:else}
        <p>{JSON.stringify(err)}</p>
    {/if}
{/await}
