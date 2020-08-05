/**
 * Luke Zhang's developer portfolio
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang Luke-zhang-04.github.io
 * @license AGPL-3.0
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 * @file script for all pages
 */
import createElement from "destagnate/lib/createElement"
import html from "../../templates/footer.html"

/**
 * Append a footer to bottom of page
 * @returns {void} void
 */
((): void => {
    const footer = createElement(
        "footer", {class: "page-footer font-small blue pt-4 bg-dark"}
    )

    document.body.appendChild(footer)

    footer.innerHTML = html as string
})();

/**
 * Hamburger menu setup for mobile page
 * @returns {void} void
 */
((): void => {
    const navbarToggler = document.querySelector("#navbar .navbar-toggler"),
        navbarMenu = document.getElementById("navbarNav")

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
})()
