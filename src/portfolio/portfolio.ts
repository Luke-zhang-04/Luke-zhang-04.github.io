/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 * @copyright (C) 2020 - 2021 Luke Zhang
 * @license BSD-3-Clause
 */

import * as firebaseApp from "../_firebase"
import DeStagnate, {createElement} from "destagnate"
import type {ProjectData as _ProjectData} from "../_globals"

interface ProjectData extends _ProjectData {
    imgUrl: string,
    name: string,
}

interface PortfolioState {
    projects: ProjectData[],
}

export default class Portfolio extends DeStagnate.Component<
    Record<string, string>,
    PortfolioState
> {

    public constructor (parent: HTMLElement) {
        super(parent)

        this.state = {
            projects: [],
        }
    }

    public componentDidMount = (): void => {
        firebaseApp.firestore.collection("projects")
            .orderBy("date", "desc")
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    const imgFileName = (doc.data() as _ProjectData).file
                    const data = {
                        ...doc.data() as _ProjectData,
                        imgUrl: `https://firebasestorage.googleapis.com/v0/b/luke-zhang.appspot.com/o/project_images%2F${imgFileName}?alt=media`,
                        name: doc.id,
                    }

                    this.setState({projects: [...this.state.projects, data]})
                })
            })
    }

    public render = (): HTMLDivElement => (
        createElement("div", {class: "project-container"},
            this._groupProjects().map((projects) => (
                createElement("div", {class: "row project-row"},
                    projects.map((project) => this._project(project)),
                )
            )),
        )
    )

    private _groupProjects = (): ProjectData[][] => {
        const grouped: ProjectData[][] = []
        let group: ProjectData[] = []

        for (const [index, entry] of this.state.projects.entries()) {
            group.push(entry)

            if ((index + 1) % 4 === 0) {
                grouped.push(group)
                group = []
            }
        }

        if (group.length > 0) {
            grouped.push(group)
        }

        return grouped
    }

    private _project = ({imgUrl}: ProjectData): HTMLElement => (
        createElement(
            "div",
            {
                class: "col-sm-6 col-md-3 project-card",
                style: `background-image: url(${imgUrl})`,
            },
        )
    )

}
