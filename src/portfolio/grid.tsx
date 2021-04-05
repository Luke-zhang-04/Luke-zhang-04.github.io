/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 * @copyright (C) 2020 - 2021 Luke Zhang
 * @license BSD-3-Clause
 */

import * as firebaseApp from "../_firebase"
import * as utils from "../_utils"
import DeStagnate from "destagnate"
import {Project} from "./project"
import type {ProjectData as _ProjectData} from "../_globals"

export interface ProjectData extends _ProjectData {
    imgUrl: string
    name: string
    id: string
}

interface PortfolioState {
    projects?: ProjectData[]
}

class Portfolio extends DeStagnate.Component<{[key: string]: string}, PortfolioState> {
    public constructor(parent: HTMLElement | null) {
        super(parent)

        this.state = {
            projects: undefined,
        }
    }

    public componentDidMount = async (): Promise<void> => {
        const projects = await firebaseApp.firestore
            ?.collection("projects")
            .orderBy("date", "desc")
            .get()
        const projectsData: Promise<ProjectData>[] = []

        if (projects) {
            for (const project of firebaseApp.utils.snapshotToArray(projects)) {
                projectsData.push(
                    (async () => ({
                        ...(project.data() as _ProjectData),

                        imgUrl: utils.getImageUrl((project.data() as _ProjectData).file),
                        name: project.id,
                        id: (await utils.hash("SHA-256", project.id)) ?? "",
                    }))(),
                )
            }
        }

        this.setState({
            projects: await Promise.all(projectsData),
        })
    }

    public render = (): Node =>
        this.state.projects ? (
            <div class="project-container container-fluid">
                {Array.from(utils.arrayToChunks(this.state.projects, 4)).map((projects) => (
                    <div class="row project-row g-3 my-md-0">
                        {projects.map((project) => (
                            <Project {...project} />
                        ))}
                    </div>
                ))}
            </div>
        ) : (
            <div class="d-flex justify-content-center align-items-center vh-100">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
}

const portfolio = new Portfolio(document.getElementById("root"))

portfolio.mount()
