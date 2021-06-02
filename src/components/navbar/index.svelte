<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2021 Luke Zhang
 -->
<style lang="scss">
    @use "src/styles/variables";

    $transition-timing: map-get(variables.$timings, "ease-in-out");
    $nav-link-count: 3;

    /*
     * Navbar for mobile ONLY
     */
    @mixin _navbar-sm-only() {
        .navbar {
            z-index: 1000;

            .navbar-brand img {
                height: 5rem;
                max-height: 5rem;
            }

            .navbar-toggler {
                // Navbar toggler circle
                position: fixed;
                outline: none;
                border: none;
                top: -25vw; // Only show 1/4 of the circle
                right: -25vw;
                border-radius: 100%;
                width: min(50vw, 75vh);
                height: min(50vw, 75vh);
                z-index: 2000;
                background-color: variables.$light;
                transition: background-color 0.2s ease;

                &.open {
                    background-color: variables.$dark;
                }
            }
        }

        // The menu with links
        #navbarNav {
            position: fixed; // Fixed, show to whole screen
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
            background-color: variables.$light;
            z-index: 2000;
            color: variables.$light;
            opacity: 0;
            transition: background-color 0.2s $transition-timing, opacity 0.2s $transition-timing;
            animation: to-top 0s $transition-timing 0.2s forwards;

            .nav-item {
                // Nav links
                display: block;
                margin: min(2rem, #{(100 / ($nav-link-count * 8)) + vh}) auto;
                max-width: 50vw;

                .nav-link {
                    text-align: center;
                    color: variables.$light;
                    font-size: 2rem;
                }
            }

            &.active {
                opacity: 0.98;
                background-color: mix(white, variables.$dark, 5%);
                animation: from-top 0s $transition-timing 0.2s forwards;

                .nav-item {
                    opacity: 0;

                    @for $i from 1 through $nav-link-count {
                        // Each nav item fades in after the other
                        &:nth-child(#{$i}) {
                            animation: fade-in-down 0.2s $transition-timing 0.1 * $i + 0s forwards;
                        }
                    }
                }
            }
        }

        .burger {
            position: absolute;
            top: 62.5%; // In between 50% and 75%
            right: 62.5%;

            .burger-lines,
            .burger-lines::after,
            .burger-lines::before {
                background-color: variables.$dark;
            }

            &.open {
                .burger-lines {
                    background-color: variables.$none;
                }

                .burger-lines::after,
                .burger-lines::before {
                    background-color: variables.$light;
                }
            }
        }
    }

    .navbar {
        position: relative;
        margin-left: 1rem;
        font-size: 2.25vw;
        z-index: 1000;

        .nav-link {
            margin-left: 0.75vw;
            margin-right: 0.75vw;
        }

        .nav-item.active {
            .nav-link {
                color: rgba(0, 0, 0, 0.7);
            }
        }

        img {
            max-height: 5vw;
        }

        .navbar-brand.d-md-block {
            position: absolute;
            top: 0.25rem;
            right: 1rem;
        }
    }

    @media (max-width: map-get(variables.$grid-breakpoints, "md") + 1px) {
        @include _navbar-sm-only;
    }

    @media (min-width: 767px) and (max-width: 991px) {
        .navbar {
            font-size: 3vw;

            img {
                max-height: 5rem;
            }
        }
    }
</style>

<script lang="ts">
    import {onMount, onDestroy} from "svelte"
    import {Link} from "svelte-routing"
    import {globalHistory} from "svelte-routing/src/history"
    import logo from "./logo.png"
    import logoLight from "./logo-light.png"
    import {pages} from "../../globals"

    export let activePage: undefined | string

    let isOpen = false

    let unsub: ReturnType<typeof globalHistory.listen> | undefined

    onMount(() => {
        unsub = globalHistory.listen(() => {
            isOpen = false
        })
    })

    onDestroy(() => {
        isOpen = false

        unsub?.()
    })
</script>

<!-- Navbar -->
<nav class="navbar navbar-expand-md navbar-light bg-none w-95 ms-md-0 pl-md-4" id="navbar">
    <Link role="button" class="navbar-brand d-md-none d-lg-block" to="/">
        <img src={logo} alt="logo" />
    </Link>
    <div id="navbarNav" class:active={isOpen}>
        <ul class="navbar-nav">
            {#each pages as page}
                <li class="nav-item {activePage === page.name ? 'active' : ''}">
                    {#if page.isExternal}
                        <a
                            role="button"
                            class="nav-link"
                            href={page.href}
                            target="_blank"
                            rel="noopener noreferred"
                        >
                            {page.displayName}
                        </a>
                    {:else}
                        <Link role="button" class="nav-link" to={page.href}>
                            {page.displayName}
                        </Link>
                    {/if}
                </li>
            {/each}
        </ul>
    </div>

    <!-- Navbar button -->
    <button
        role="button"
        class="navbar-toggler"
        class:open={isOpen}
        on:click={() => (isOpen = !isOpen)}
    >
        <div class="burger burger-squeeze" class:open={isOpen}>
            <div class="burger-lines" />
        </div>
    </button>

    <a role="button" class="navbar-brand d-lg-none d-md-block d-none" href="/">
        <img src={logoLight} alt="logo" />
    </a>
</nav>
