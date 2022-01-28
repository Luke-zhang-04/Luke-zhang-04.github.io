<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2022 Luke Zhang
 -->
<script lang="ts">
    import * as utils from "~/utils"
    import Project from "./project.svelte"
    import type {Project as ProjectType} from "~/globals"

    export let projects: ProjectType[]
</script>

{#each Array.from(utils.arrayToChunks(projects, 4)) as projectRow}
    <div class="row g-3 my-md-0">
        {#each projectRow as project (project.id)}
            <Project {...project} />
        {/each}
    </div>
{/each}
