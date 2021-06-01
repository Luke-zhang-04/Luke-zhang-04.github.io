<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2021 Luke Zhang
 -->
<style lang="scss" src="./index.scss">
    @use "../../../styles/variables";

    @mixin _404-md() {
        .image-404 {
            width: 50vw;
        }
    }

    .image-404 {
        width: 90vw;
    }

    .image-container {
        min-height: 100vh;
    }

    @media (min-width: map-get(variables.$grid-breakpoints, "md")) {
        @include _404-md();
    }
</style>

<script lang="ts">
    import {Link} from "svelte-routing"
</script>

<div class="d-flex justify-content-center align-items-center w-100 image-container flex-column">
    <h1>404</h1>
    <p>The page you were looking for couldn't be found</p>
    <img class="image-404" src="images/404.svg" alt="404 not found" />
    <div class="d-flex justify-content-center flex-row mt-3 mt-md-5">
        <button class="btn btn-primary mx-1" on:click={() => window.history.back()}>Back</button>
        <Link to="/" class="btn btn-outline-primary mx-1">Home</Link>
    </div>
</div>
