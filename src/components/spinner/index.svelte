<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2021 Luke Zhang

Ported from https://github.com/Luke-zhang-04/talentmaker-site/blob/refactor/src/components/bootstrap/spinner.tsx
 -->
<script lang="ts">
    export let color = ""
    export let type: "border" | "grow" = "border"
    export let style = ""
    export let size = ""
    export let centered = false
    export let small = false
    export let inline = false

    let className = ""
    export {className as class}

    // Spinner color
    const _color = color ? `text-${color}` : ""
    // Classname for a small spinner
    const _size = small || inline ? `spinner-${type}-sm` : ""
    // Style object
    let _style = style ?? "" + (size ? `; width: ${size}; height: ${size}` : "")

    const _className = `spinner-${type ?? "border"} ${_size} ${_color} ${className}`
</script>

{#if inline}
    <span class={_className} role="status" aria-hidden="true" />
    <span class="visually-hidden">Loading...</span>
    <slot />
{:else if centered}
    <div class="d-flex justify-content-center h-100 align-items-center">
        <div class={_className} style={_style}>
            <span class="visually-hidden">Loading...</span>
        </div>
        <slot />
    </div>
{:else}
    <div class={_className} style={_style}>
        <span class="visually-hidden">Loading...</span>
    </div>
    <slot />
{/if}
