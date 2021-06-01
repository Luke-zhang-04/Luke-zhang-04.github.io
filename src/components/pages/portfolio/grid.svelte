<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2021 Luke Zhang
 -->
<script lang="ts">
    import * as utils from "../../../utils"
    import Project from "./internal/project.svelte"
    import Spinner from "../../spinner"
    import {projectData} from "../../../globals"
</script>

{#await projectData}
    <Spinner color="primary" size="25vw" class="my-5" centered />
{:then projects}
    <div class="container-fluid">
        {#each Array.from(utils.arrayToChunks(projects, 4)) as projectRow}
            <div class="row g-3 my-md-0">
                {#each projectRow as project}
                    <Project {...project} />
                {/each}
            </div>
        {/each}
    </div>
{:catch err}
    {#if err instanceof Error}
        <p>{err.toString()}</p>
    {:else}
        <p>{JSON.stringify(err)}</p>
    {/if}
{/await}
