<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2021 Luke Zhang
 -->
<style lang="scss" src="./contact.scss"></style>

<script lang="ts">
    const data: {href: string; iconClass: string}[] = [
        {href: "mailto:luke.zhang2004dev@gmail.com", iconClass: "far fa-envelope-open"},
        {href: "https://github.com/luke-zhang-04", iconClass: "fab fa-github"},
        {href: "https://www.linkedin.com/in/luke-zhang-1b8a89198/", iconClass: "fab fa-linkedin"},
    ]
</script>

<div class="contact-title">
    <div>
        <h1 class="text-center">Profiles and Contact</h1>
    </div>
</div>
<div class="contact-container">
    <ul>
        {#each data as icon}
            <li>
                <a role="button" target="_blank" rel="noopener noreferrer" href={icon.href}>
                    <i class={icon.iconClass} />
                </a>
            </li>
        {/each}
    </ul>
</div>
