/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 * @copyright (C) 2020 - 2021 Luke Zhang
 * @license BSD-3-Clause
 */

import DeStagnate from "destagnate"
import type {ProjectData} from "./grid"

const projectAgeThreshold = 15_778_476_000 // 0.5 years in ms
const msPerDay = 86_400_000

const isProjectOld = (timestamp: number): boolean => Date.now() - timestamp > projectAgeThreshold

const ProjectButtons = (props: ProjectData): JSX.Element => (
    <div class="project-btn-container">
        <button
            class="btn btn-pill-primary"
            data-toggle="modal"
            data-target={`#modal-${props.id}`}
        >
            More Info <span class="material-icons">chevron_right</span>
        </button>
    </div>
)

const BlankLink = (
    props: {href?: string; class?: string},
    children: JSX.Element[],
): JSX.Element | null =>
    props.href ? (
        <a target="_blank" rel="noopener noreferred" {...props}>
            {...children}
        </a>
    ) : null

const Modal = (props: ProjectData): JSX.Element => {
    const ModalHeader = (): JSX.Element => (
        <>
            <h5 class="modal-title" id={props.id}>
                <span class="material-icons">source</span>
                {"  "}
                {props.name}
            </h5>
            <button
                type="button"
                class="btn-close"
                data-dismiss="modal"
                aria-label="Close"
            ></button>
        </>
    )

    const ModalBody = (): JSX.Element => (
        <>
            {props.description}
            {isProjectOld(props.date) ? (
                <>
                    <hr />
                    <p>
                        Note: this project was last modified{" "}
                        {Math.round((Date.now() - props.date) / msPerDay)} days ago. Some of the
                        programming in this project may be old and filled with bad practice. I am
                        aware of this.
                    </p>
                </>
            ) : undefined}
            <hr class="d-block d-md-none" />
            <div class="language d-block d-md-none">
                <div class="language-indicator" style={`background-color: ${props.lang.colour}`} />
                {props.lang.name}
            </div>
        </>
    )

    const ModalFooter = (): JSX.Element => (
        <>
            <div class="d-none d-md-block col-3">
                <div class="language">
                    <div
                        class="language-indicator"
                        style={`background-color: ${props.lang.colour}`}
                    />
                    {props.lang.name}
                </div>
            </div>
            <div class="col-12 col-md-9 d-flex justify-content-end pe-3 button-container">
                <BlankLink class="btn btn-pill-dark mx-1" href={props.links.GitHub}>
                    Source <span class="material-icons">code</span>
                </BlankLink>
                <BlankLink class="btn btn-pill-success mx-1" href={props.links.live}>
                    <span class="expand">Live</span>
                    <span class="material-icons">visibility</span>
                </BlankLink>
                <BlankLink class="btn btn-pill-primary mx-1" href={props.links.PyPi}>
                    <span class="expand">PyPi</span>
                    <i class="fab fa-python" />
                </BlankLink>
                <BlankLink class="btn btn-pill-danger mx-1" href={props.links.NPM}>
                    <span class="expand">NPM</span>
                </BlankLink>
            </div>
        </>
    )

    return (
        <div
            class="modal fade"
            id={`modal-${props.id}`}
            tabindex="-1"
            aria-labelledby={props.id}
            aria-hidden="true"
        >
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <ModalHeader />
                    </div>
                    <div class="modal-body">
                        <ModalBody />
                    </div>
                    <div class="modal-footer flex-row flex-nowrap justify-content-start">
                        <ModalFooter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Project = (props: ProjectData): JSX.Element => (
    <>
        <Modal {...props} />
        <div class="col-12 col-md-6 col-lg-3 project-card">
            <figure>
                <img src={props.imgUrl} alt={`${props.name} cover`} />
                <figcaption class="text-center">
                    <h1>{props.name}</h1>
                    <p>{props.shortDescription}</p>
                    <ProjectButtons {...props} />
                </figcaption>
                <div class="card-overlay" />
            </figure>
        </div>
    </>
)
