<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2021 Luke Zhang
 -->
<script lang="ts">
    export let href = ""
    export let title: string | undefined = undefined
</script>

<a {href} {title} target="_blank" rel="noopener noreferrer"><slot /></a>
