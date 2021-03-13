/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 * @copyright (C) 2020 - 2021 Luke Zhang
 * @license BSD-3-Clause
 */

import * as DeStagnate from "destagnate/lib/createElementOnly"
import footer from "./footer"

// Append a footer to bottom of page
const _footer = <div class="page-footer font-small blue pt-4 bg-dark">
    {footer()}
</div>

document.body.appendChild(_footer)

// Hamburger menu setup for mobile page
const navbarToggler = document.querySelector("#navbar .navbar-toggler")
const navbarMenu = document.getElementById("navbarNav")

navbarToggler?.addEventListener("click", (): void => {
    if (navbarMenu?.classList.contains("active")) {
        navbarMenu?.classList.remove("active")
        navbarToggler?.classList.remove("open")
        navbarToggler?.querySelector(".burger")?.classList.remove("open")
    } else {
        navbarMenu?.classList.add("active")
        navbarToggler?.classList.add("open")
        navbarToggler?.querySelector(".burger")?.classList.add("open")
    }
})
