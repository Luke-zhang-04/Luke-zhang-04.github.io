<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2022 Luke Zhang
 -->
<style lang="scss">
    @use "src/styles/variables";

    @mixin _landing-page-md() {
        .landing-page {
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
            height: 100vh;
            position: static;

            .content-container,
            .image-container {
                width: 50%;
            }

            // Landing page content
            .content-container {
                h1 {
                    font-size: 8vw;
                    margin-bottom: 5vh;
                    margin-top: 5vh;
                }

                h2 {
                    font-size: 6vw;
                    margin-bottom: 5vh;
                    margin-top: 5vh;
                }
            }

            .image-container {
                position: absolute;
                top: 0;
                right: 0;
                left: auto;

                img {
                    max-width: 100%;

                    &:nth-child(3) {
                        // Thing in the middle
                        position: absolute;
                        width: 75%;
                        right: 5%;
                        top: 10vw;
                    }
                }
            }

            .btn-container {
                // Button container is flexed
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;

                #resume-btn {
                    margin-left: 3vw;
                }
            }
        }
    }

    @mixin _landing-page-landscape() {
        .landing-page {
            flex-direction: row;
        }
    }

    .landing-page {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
        position: relative;
        height: 100vh;

        .content-container,
        .image-container {
            width: 100%;
        }

        // Landing page content
        .content-container {
            padding-left: 1.5rem;
            position: relative;
            z-index: 100;

            h1 {
                font-size: min(12.5vw, 12.5vh);
                margin-bottom: 0.67rem;
                margin-top: 0;
            }

            h2 {
                font-size: min(10vw, 10vh);
                margin-bottom: 0.5rem;
                margin-top: 0;
            }

            a:not([role="button"]) {
                font-size: 2vw;
            }
        }

        // Landing page image
        .image-container {
            position: relative; // Allow text to pass into the container
            left: 0;
            top: -5vh;
            height: 100%;

            img {
                max-width: 95%; // Image shouldn't be fully sized
                max-height: fit-content;

                &:nth-child(2) {
                    // Background thing
                    position: absolute;
                    right: 0;
                    top: 0;
                }

                &:nth-child(3) {
                    // Thing in the middle
                    position: absolute;
                    width: 80%;
                    right: 0;
                    top: 35%;
                }
            }
        }
    }

    @media (min-width: map-get(variables.$grid-breakpoints, "md")) {
        @include _landing-page-md();
    }

    @media (orientation: landscape) {
        @include _landing-page-landscape();
    }
</style>

<script lang="ts">
    import {Link} from "svelte-routing"
    import computer from "./computer.svg"
    import decor1 from "./decor1.svg"
    import decor2 from "./decor2.svg"
</script>

<div class="landing-page">
    <div class="content-container">
        <h2>Hello, I'm</h2>
        <h1>Luke Zhang</h1>
        <div class="btn-container">
            <Link
                role="button"
                class="btn-box-lg btn-box-primary d-lg-block d-none"
                to="portfolio"
            >
                My work
            </Link>
            <Link
                role="button"
                class="btn btn-outline-primary d-lg-none d-md-block d-sm-block"
                to="portfolio"
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
        <img alt="background" src={decor1} class="d-none d-md-block" />
        <img alt="background" src={decor2} class="d-sm-block d-md-none" />
        <img alt="computer" src={computer} />
    </div>
</div>
