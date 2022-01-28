<!--
Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io

License: BSD-3-Clause
Copyright (C) 2020 - 2022 Luke Zhang
 -->
<style lang="scss">
    @use "src/styles/variables";

    $transition-timing: map-get(variables.$timings, "ease-in-out");

    .contact-title {
        position: relative;
        margin-top: 10vh;
    }

    .contact-container {
        height: max-content;

        ul {
            position: relative;
            display: flex;
            justify-content: space-around;
            width: 100%;
            margin: 10vh 0;

            li {
                position: relative;
                list-style: none;
                cursor: pointer;
                transform: translateX(-25%);

                &::before {
                    font-family: fontawesome, sans-serif;
                    position: absolute;
                    top: -3vw;
                    left: 0;
                    font-size: 12vw;
                    height: 0;
                    overflow: hidden;
                    transition: height 0.5s $transition-timing;
                }

                &:hover::before {
                    height: 150%;
                }

                &:nth-child(1)::before {
                    content: "\f2b6";
                    color: variables.$danger;
                    border-bottom: 0.25rem solid;
                }

                &:nth-child(2)::before {
                    content: "\f09b";
                    color: black;
                    border-bottom: 0.25rem solid;
                }

                &:nth-child(3)::before {
                    content: "\f08c";
                    color: #2867b2;
                    border-bottom: 0.25rem solid;
                }

                a {
                    text-decoration: none;

                    .fab,
                    .far {
                        font-size: 12vw;
                        color: mix(variables.$light, variables.$dark, 75%);
                    }
                }
            }
        }
    }
</style>

<script lang="ts">
    import {contactDataWithIcons as data} from "~/globals"
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
