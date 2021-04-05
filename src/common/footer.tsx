/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 * @copyright (C) 2020 - 2021 Luke Zhang
 * @license BSD-3-Clause
 */

import * as DeStagnate from "destagnate/lib/createElementOnly"

const linkProps = {
    target: "_blank",
    rel: "noopener noreferrer",
}

const Logo = (): JSX.Element => (
    <div class="col-md-3 mt-md-0 mt-3 px-md-5">
        <h5 class="text-uppercase d-block text-center">Luke Zhang</h5>
    </div>
)

const Nav = (): JSX.Element => (
    <div class="col-md-3 mb-md-0 mb-3">
        <h5 class="text-uppercase">Nav</h5>
        <ul class="list-unstyled">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/portfolio.html">Portfolio</a>
            </li>
            <li>
                <a href="https://rebrand.ly/luke-zhang-resume" {...linkProps}>
                    Resume
                </a>
            </li>
        </ul>
    </div>
)

const Profiles = (): JSX.Element => (
    <div class="col-md-3 mb-md-0 mb-3">
        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled">
            <li>
                <a href="https://github.com/Luke-zhang-04" {...linkProps}>
                    GitHub
                </a>
            </li>
            <li>
                <a href="mailto:Luke.zhang2004@gmail.com" {...linkProps}>
                    Email
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/luke-zhang-1b8a89198/" {...linkProps}>
                    Linkedin
                </a>
            </li>
            <li>
                <a href="https://stackoverflow.com/users/12370337/luke-zhang-04" {...linkProps}>
                    Stackoverflow
                </a>
            </li>
        </ul>
    </div>
)

const Footer = (): JSX.Element[] => [
    <div class="container-fluid text-center blue text-light text-md-left">
        <div class="row">
            <Logo />

            <div class="col-md-3" />
            <hr class="clearfix w-100 d-md-none pb-1 my-3" />

            <Nav />
            <Profiles />
        </div>
    </div>,
    <div class="footer-copyright text-center py-3 text-light">Copyright © 2020: Luke Zhang</div>,
]

export default Footer
