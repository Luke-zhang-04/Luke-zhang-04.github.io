/*
    luke-zhang-04.github.io
    Copyright (C) 2020 Luke Zhang

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

let data = {projects: {}, collections: {}} //data for projects

let activeFilters = []
let filters = []

window.onresize = function() { //resive image seperation div
    document.getElementById("splash").style.height = (
        window.innerWidth*0.66666666666 - navbar.offsetHeight - 26
    ).toString() + "px"
}
document.getElementById("splash").style.height = (
    window.innerWidth*0.66666666666 - navbar.offsetHeight - 26
).toString() + "px"

function clearProjects() {
    const collectionContainer = document.getElementById("collections")
    const projectContainer = document.getElementById("projects")
    const collectionColumns = collectionContainer.querySelector(".row").children
    const projectColumns = projectContainer.querySelector(".row").children

    for (let i of collectionColumns) {
        i.innerHTML = ""
        print(i)
    }
    for (let i of projectColumns) {
        i.innerHTML = ""
        print(i)
    }
    displayExistingProjects()
}

function includesTags(tags, filters) {
    for (i of tags) {
        if (filters.includes(i)) {
            return true
        }
    }
    return false
}

function displayExistingProjects() {
    let counter
    counter = 0
    for ([id, val] of Object.entries(data.projects)) {
        if (!includesTags(val.oldTags, activeFilters)) {
            let url = val.imgurl
            let tags = ""
            let description = ""

            for (i = 0; i < val.tags.length; i++) { //format tags and make sure they aren't too long
                if (i >= 5) {
                    tags += " . . ."
                    break
                } else if (i == 4 || i == val.tags.length-1) {
                    tags += `${val.tags[i]}`
                } else {
                    tags += `${val.tags[i]}, `
                }
            }

            for (i = 0; i < val.description.split(" ").length; i++) { //format description
                if (i >= 20) {
                    description += " . . ."
                    break
                } else {
                    description += val.description.split(" ")[i].replace(`\\n`, "<br/>").replace(`\\n`, "") + " "
                }
            }

            let column = document.getElementById("projects").querySelector(".row").children[counter%3]

            column.insertAdjacentHTML("beforeend", //insert tags and a card
                `<div class="card port-card" style="display: inline-block; width: 100%" data-toggle="modal" data-target="#projectModal" data-name="projects.${id}">
                    <img class="card-img-top" src="${url}" alt="Card image">
                    <div class="card-img-overlay card-cover"></div>
                    <div class="card-img-overlay">
                        <h4 class="card-title">${(id).charAt(0).toUpperCase() + (id).slice(1)}</h4>
                        <p>${description}</p>
                        <p class="card-text">${tags}</p>
                    </div>
                </div>`
            )
            counter ++
        }
    }
    counter = 0
    for ([id, val] of Object.entries(data.collections)) {
        if (!includesTags(val.oldTags, activeFilters)) {
            if (!includesTags(val.oldTags, activeFilters)) {
                let url = val.imgurl
                let tags = ""
                let description = ""
    
                for (i = 0; i < val.tags.length; i++) { //format tags and make sure they aren't too long
                    if (i >= 5) {
                        tags += " . . ."
                        break
                    } else if (i == 4 || i == val.tags.length-1) {
                        tags += `${val.tags[i]}`
                    } else {
                        tags += `${val.tags[i]}, `
                    }
                }
    
                for (i = 0; i < val.description.split(" ").length; i++) { //format description
                    if (i >= 20) {
                        description += " . . ."
                        break
                    } else {
                        description += val.description.split(" ")[i].replace(`\\n`, "<br/>").replace(`\\n`, "") + " "
                    }
                }
    
                let column = document.getElementById("collections").querySelector(".row").children[counter%3]
    
                column.insertAdjacentHTML("beforeend", //insert tags and a card
                    `<div class="card port-card" style="display: inline-block; width: 100%" data-toggle="modal" data-target="#projectModal" data-name="projects.${id}">
                        <img class="card-img-top" src="${url}" alt="Card image">
                        <div class="card-img-overlay card-cover"></div>
                        <div class="card-img-overlay">
                            <h4 class="card-title">${(id).charAt(0).toUpperCase() + (id).slice(1)}</h4>
                            <p>${description}</p>
                            <p class="card-text">${tags}</p>
                        </div>
                    </div>`
                )
                counter ++
            }
        }
    }
}

function addFilters() {
    const filterContainer = document.getElementById("filters")
    for (i of filters.sort(function (a, b) {
        if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
        }
        if (b.toLowerCase() > a.toLowerCase()) {
            return -1;
        }
        return 0;
    })) {
        filterContainer.insertAdjacentHTML("beforeend", `<div id="filter-${i}" class="card-body"><i class="fas fa-check"></i> ${i}</div>`)
        let cur = i
        document.getElementById("filter-" + i).addEventListener("click", e => {
            if (!activeFilters.includes(cur)) {
                e.target.innerHTML = `<i class="fas fa-times"></i> ${cur}`
                activeFilters.push(cur)
            } else {
                e.target.innerHTML = `<i class="fas fa-check"></i> ${cur}`
                activeFilters = activeFilters.filter(function(value) {
                    return value !== cur
                })
            }
        })
    }
}

function displayProjects() { //displays project cards
    const projectContainer = document.getElementById("projects")
    const collectionContainer = document.getElementById("collections")
    const projectColumns = projectContainer.querySelector(".row")
    const collectionColumns = collectionContainer.querySelector(".row")
    let counter

    db.collection("projects").get().then(snapshot => { //get projects from projects database collection
        counter = 0
        snapshot.docs.forEach(doc => {
            let imgurl = storageRef.child(doc.data().file) //get image URL
            let column = projectColumns.getElementsByClassName("proj-col")[counter%3] //column reference

            for (i of doc.data().tags) {
                if (!filters.includes(i)) {
                    filters.push(i)
                }
            }
            
            imgurl.getDownloadURL().then(url => {
                data.projects[doc.id] = doc.data() //insert doc data
                data.projects[doc.id].oldTags = doc.data().tags
                data.projects[doc.id]["imgurl"] = url //insert image url

                for (i = 0; i < data.projects[doc.id].tags.length; i++) { //capitalize tags
                    let target = data.projects[doc.id].tags[i]

                    if (target === "front-end-code") {
                        data.projects[doc.id].tags[i] = "HTML, CSS, JS"
                    } else {
                        data.projects[doc.id].tags[i] = target.charAt(0).toUpperCase() + target.slice(1)
                    }
                }
                let tags = ""
                let description = ""

                for (i = 0; i < data.projects[doc.id].tags.length; i++) { //format tags and make sure they aren't too long
                    if (i >= 5) {
                        tags += " . . ."
                        break
                    } else if (i == 4 || i == data.projects[doc.id].tags.length-1) {
                        tags += `${data.projects[doc.id].tags[i]}`
                    } else {
                        tags += `${data.projects[doc.id].tags[i]}, `
                    }
                }

                for (i = 0; i < data.projects[doc.id].description.split(" ").length; i++) { //format description
                    if (i >= 20) {
                        description += " . . ."
                        break
                    } else {
                        description += data.projects[doc.id].description.split(" ")[i].replace(`\\n`, "<br/>").replace(`\\n`, "") + " "
                    }
                }

                column.insertAdjacentHTML("beforeend", //insert tags and a card
                    `<div class="card port-card" style="display: inline-block; width: 100%" data-toggle="modal" data-target="#projectModal" data-name="projects.${doc.id}">
                        <img class="card-img-top" src="${url}" alt="Card image">
                        <div class="card-img-overlay card-cover"></div>
                        <div class="card-img-overlay">
                            <h4 class="card-title">${(doc.id).charAt(0).toUpperCase() + (doc.id).slice(1)}</h4>
                            <p>${description}</p>
                            <p class="card-text">${tags}</p>
                        </div>
                    </div>`
                )
            })
            counter ++
        })
    }).then(() => {
        counter = 0
        db.collection("collections").get().then(snapshot => { //get collections from database collection
            snapshot.docs.forEach(doc => {
                let imgurl = storageRef.child(doc.data().file) //get image URL
                let column = collectionColumns.getElementsByClassName("proj-col")[counter%3] //column reference

                for (i of doc.data().tags) {
                    if (!filters.includes(i)) {
                        filters.push(i)
                    }
                }

                imgurl.getDownloadURL().then(url => {
                    data.collections[doc.id] = doc.data() //insert doc data
                    data.collections[doc.id].oldTags = doc.data().tags
                    data.collections[doc.id]["imgurl"] = url //insert image URL

                    for (i = 0; i < data.collections[doc.id].tags.length; i++) { //capitalize tags
                        let target = data.collections[doc.id].tags[i]
                        data.collections[doc.id].tags[i] = target.charAt(0).toUpperCase() + target.slice(1)
                    }
                    let tags = ""
                    let description = ""

                    for (i = 0; i < data.collections[doc.id].tags.length; i++) {//format tags and make sure they're not too long
                        if (i >= 5) {
                            tags += " . . ."
                            break
                        } else if (i == 4 || i == data.collections[doc.id].tags.length-1) {
                            tags += `${data.collections[doc.id].tags[i]}`
                        } else {
                            tags += `${data.collections[doc.id].tags[i]}, `
                        }
                    }

                    for (i = 0; i < data.collections[doc.id].description.split(" ").length; i++) { //format description
                        if (i >= 20) {
                            description += " . . ."
                            break
                        } else {
                            description += data.collections[doc.id].description.split(" ")[i].replace(`\\n`, "<br/>").replace(`\\n`, "") + " "
                        }
                    }

                    column.insertAdjacentHTML("beforeend", //create new card with the data
                        `<div class="card port-card" style="display: inline-block; width: 100%" data-toggle="modal" data-target="#projectModal" data-name="collections.${doc.id}">
                            <img class="card-img-top" src="${url}" alt="Card image">
                            <div class="card-img-overlay card-cover"></div>
                            <div class="card-img-overlay">
                                <h4 class="card-title">${(doc.id).charAt(0).toUpperCase() + (doc.id).slice(1)}</h4>
                                <p>${description}</p>
                                <p class="card-text">${tags}</p>
                            </div>
                        </div>`
                    )
                })
                counter ++
            })
        }).then(() => {
            addFilters()
        })
    })
}

displayProjects()

$('#projectModal').on('show.bs.modal', event => { //hopefully the only time I'll need Jquery
    const trigger = $(event.relatedTarget)
    const [type, name] = trigger.data("name").split(".")
    const projectData = data[type][name]

    const modal = document.getElementById("projectModal")
    const footer = modal.querySelector(".modal-footer")
    const body = modal.querySelector(".modal-body")
    const header = modal.querySelector(".modal-header")

    header.querySelector("#modalTitle").innerHTML = name

    if (type === "projects") {
        for ([key, version] of Object.entries(projectData.links)) { //make links for viewing
            if (key === "live") {
                footer.insertAdjacentHTML("afterbegin", 
                    `<a type="button" class="btn btn-primary" href=${version} target="_blank"><i class="fas fa-eye"></i> View live</a>`
                )
            } else if (key === "GitHub") {
                footer.insertAdjacentHTML("afterbegin", 
                    `<a type="button" class="btn btn-secondary" href=${version} target="_blank"><i class="fab fa-github"></i> View GitHub</a>`
                )
            } else if (key === "PyPi") {
                footer.insertAdjacentHTML("afterbegin", 
                    `<a type="button" class="btn btn-warning" href=${version} target="_blank"><i class="fab fa-python"></i> View PyPi</a>`
                )
            } else if (key === "NPM") {
                footer.insertAdjacentHTML("afterbegin", 
                    `<a type="button" class="btn btn-danger" href="${version} target="_blank"<i class="fab fa-npm"></i> View NPM</a>`
                )
            }
        }
    } else if (type === "collections") {
        footer.insertAdjacentHTML("afterbegin", 
                `<a type="button" class="btn btn-secondary" href=${projectData.link} target="_blank"><i class="fab fa-github"></i> View GitHub</a>`
            )
    }
    let tags = ""
    let description = projectData.description.replace("\\n", "<br/><br/>").replace("\\n", "")

    for ([index, elem] of projectData.tags.entries()) {
        if (index < projectData.tags.length-1) {
            tags += `${elem}, `
        } else {
            tags += elem
        }
    }

    body.querySelector("#img-col").querySelector(".modal-img").setAttribute("src", projectData.imgurl)
    body.querySelector("#des-col").innerHTML = `
        <p>${description}</p>
        <p>${tags}</p>
    `
})

$("#projectModal").on("hide.bs.modal", event => { //apparently I'll need it again :(
    const modal = document.getElementById("projectModal")
    const footer = modal.querySelector(".modal-footer")
    const body = modal.querySelector(".modal-body")
    const header = modal.querySelector(".modal-header")

    //clear HTML
    footer.innerHTML = ``
})