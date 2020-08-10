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

export default class Portfolio extends DeStagnate<{}, PortfolioState> {

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
                    const imgFileName = (doc.data() as _ProjectData).file,
                        data = {
                            ...doc.data() as _ProjectData,
                            imgUrl: `https://firebasestorage.googleapis.com/v0/b/luke-zhang.appspot.com/o/project_images%2F${imgFileName}?alt=media`,
                            name: doc.id
                        }

                    this.setState({projects: [...this.state.projects, data]})
                })
            })
    }

    public render = (): HTMLElement[] => (
        this._groupProjects().map((projects) => (
            createElement("div", {class: "row project-row"},
                projects.map((project) => this._project(project))
            )
        ))
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
            }
        )
    )

}
