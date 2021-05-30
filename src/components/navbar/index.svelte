<script lang="ts">
    import {Link} from "svelte-routing"

    const pages: {name: string; displayName: string; href: string; isExternal?: boolean}[] = [
        {
            name: "home",
            displayName: "home",
            href: "/",
        },
        {
            name: "portfolio",
            displayName: "Portfolio",
            href: "portfolio",
        },
    ]
</script>

<!-- Navbar -->
<nav class="navbar navbar-expand-md navbar-light bg-none w-95 ml-md-0 pl-md-4" id="navbar">
    <a role="button" class="navbar-brand d-md-none d-lg-block" href="/">
        <img src="images/logo.png" alt="logo" />
    </a>
    <div id="navbarNav">
        <ul class="navbar-nav">
            {#each pages as page}
                <li class="nav-item">
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
            <li class="nav-item">
                <a role="button" class="nav-link" href="/">
                    Home <span class="visually-hidden-focusable">(current)</span>
                </a>
            </li>
            <li class="nav-item">
                <a role="button" class="nav-link" href="portfolio.html">Portfolio</a>
            </li>
            <li class="nav-item">
                <a
                    role="button"
                    class="nav-link"
                    href="https://rebrand.ly/luke-zhang-resume"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                </a>
            </li>
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
