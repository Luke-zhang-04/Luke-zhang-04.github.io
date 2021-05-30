<script lang="ts">
    import {Link} from "svelte-routing"

    export let activePage: undefined | string

    const pages: {name: string; displayName: string; href: string; isExternal?: boolean}[] = [
        {
            name: "home",
            displayName: "Home",
            href: "/",
        },
        {
            name: "portfolio",
            displayName: "Portfolio",
            href: "portfolio",
        },
        {
            name: "resume",
            displayName: "Resume",
            href: "https://rebrand.ly/luke-zhang-resume",
            isExternal: true,
        },
    ]
</script>

<!-- Navbar -->
<nav class="navbar navbar-expand-md navbar-light bg-none w-95 ml-md-0 pl-md-4" id="navbar">
    <Link role="button" class="navbar-brand d-md-none d-lg-block" to="/">
        <img src="images/logo.png" alt="logo" />
    </Link>
    <div id="navbarNav">
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
    <button role="button" class="navbar-toggler">
        <div class="burger burger-squeeze">
            <div class="burger-lines" />
        </div>
    </button>

    <a role="button" class="navbar-brand d-lg-none d-md-block d-none" href="/">
        <img src="images/logo-light.png" alt="logo" />
    </a>
</nav>
