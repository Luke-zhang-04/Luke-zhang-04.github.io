/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 * @copyright (C) 2020 - 2021 Luke Zhang
 * @license BSD-3-Clause
 */

import Portfolio from "./portfolio"

const root = document.getElementById("root")

if (root) {
    const portfolio = new Portfolio(root)

    portfolio.mount()
}
