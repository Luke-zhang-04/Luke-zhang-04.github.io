<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2021 Luke Zhang
 -->
<script lang="ts">
    import {contactData, pages} from "~/globals"
    import {Link} from "svelte-routing"

    const linkProps = {
        target: "_blank",
        rel: "noopener noreferrer",
    }
</script>

<footer class="page-footer font-small blue pt-4 bg-dark">
    <div class="container-fluid text-center blue text-light text-md-left">
        <div class="row">
            <div class="col-md-3 mt-md-0 mt-3 px-md-5">
                <h5 class="text-uppercase d-block text-center">Luke Zhang</h5>
            </div>

            <div class="col-md-3" />
            <hr class="clearfix w-100 d-md-none pb-1 my-3" />

            <div class="col-md-3 mb-md-0 mb-3">
                <h5 class="text-uppercase">Nav</h5>
                <ul class="list-unstyled">
                    {#each pages as page}
                        <li>
                            {#if page.isExternal}
                                <a href={page.href} {...linkProps}>{page.displayName}</a>
                            {:else}
                                <Link to={page.href}>{page.displayName}</Link>
                            {/if}
                        </li>
                    {/each}
                </ul>
            </div>
            <div class="col-md-3 mb-md-0 mb-3">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled">
                    {#each Object.entries(contactData) as [name, href]}
                        <li>
                            <a {href} {...linkProps}>
                                {name[0]?.toUpperCase() + name.slice(1)}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-copyright text-center py-3 text-light">Copyright © 2020: Luke Zhang</div>
</footer>
