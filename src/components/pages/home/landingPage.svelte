<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2021 Luke Zhang
 -->
<style lang="scss" src="./landingPage.scss"></style>

<script lang="ts">
    import {Link} from "svelte-routing"
</script>

<div class="landing-page">
    <div class="content-container">
        <h2>Hello, I'm</h2>
        <h1>Luke Zhang</h1>
        <div class="btn-container">
            <Link
                role="button"
                class="btn-box-lg btn-box-primary d-lg-block d-none"
                to="portfolio.html"
            >
                My work
            </Link>
            <Link
                role="button"
                class="btn btn-outline-primary d-lg-none d-md-block d-sm-block"
                to="portfolio.html"
            >
                My Work
            </Link>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://rebrand.ly/luke-zhang-resume"
                class="d-none d-md-block"
                id="resume-btn"
            >
                Resume
            </a>
        </div>
    </div>
    <div class="image-container">
        <img alt="background" src="images/decor/decor1.svg" class="d-none d-md-block" />
        <img alt="background" src="images/decor/decor2.svg" class="d-sm-block d-md-none" />
        <img alt="computer" src="images/computer.svg" />
    </div>
</div>