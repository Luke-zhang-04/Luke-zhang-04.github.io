<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2021 Luke Zhang
 -->
<style lang="scss">
    @use "../../styles/variables";
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 40vw;
        height: 30vw;
        box-shadow: 0 2vw 5vw rgba(variables.$dark, 0.5);
    }

    .swiper-slide,
    .swiper-slide-shadow-left,
    .swiper-slide-shadow-right {
        border-radius: 12px;
    }
</style>

<script lang="ts">
    export let className = ""
    export {className as class}
    export let loading = "lazy"
    export let style = ""
</script>

<div class="swiper-slide {className}" {loading} {style} {...$$restProps} />
