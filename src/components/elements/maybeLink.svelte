<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2021 Luke Zhang
 -->
<script lang="ts">
    export let href: string | undefined
    let className = ""

    export {className as class}
</script>

{#if href}
    <a target="_blank" rel="noopener noreferrer" class={className} {href}>
        <slot />
    </a>
{/if}
