/*
	luke-zhang-04.github.io
    Copyright (C) 2020  Luke Zhang
    
    https://github.com/Luke-zhang-04

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
*/

let data = {projects: {}, collections: {}} //data for projects

window.onresize = function() { //resive image seperation div
    document.getElementById("splash").style.height = (
        window.innerWidth*0.66666666666 - navbar.offsetHeight - 26
    ).toString() + "px"
}
document.getElementById("splash").style.height = (
    window.innerWidth*0.66666666666 - navbar.offsetHeight - 26
).toString() + "px"

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
            let column = projectColumns.getElementsByClassName("col")[counter%3] //column reference
            
            imgurl.getDownloadURL().then(url => {
                data.projects[doc.id] = doc.data() //insert doc data
                data.projects[doc.id][imgurl] = url //insert image url

                for (i = 0; i < data.projects[doc.id].tags.length; i++) { //capitalize tags
                    let target = data.projects[doc.id].tags[i]
                    data.projects[doc.id].tags[i] = target.charAt(0).toUpperCase() + target.slice(1)
                }
                let tags = ""

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

                column.insertAdjacentHTML("beforeend", //insert tags and a card
                    `<div class="card port-card" style="display: inline-block; width: 100%">
                        <img class="card-img-top" src="${url}" alt="Card image">
                        <div class="card-img-overlay card-cover"></div>
                        <div class="card-img-overlay">
                            <h4 class="card-title">${(doc.id).charAt(0).toUpperCase() + (doc.id).slice(1)}</h4>
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
                let column = collectionColumns.getElementsByClassName("col")[counter%3] //column reference

                imgurl.getDownloadURL().then(url => {
                    data.collections[doc.id] = doc.data() //insert doc data
                    data.collections[doc.id][imgurl] = url //insert image URL

                    for (i = 0; i < data.collections[doc.id].tags.length; i++) { //capitalize tags
                        let target = data.collections[doc.id].tags[i]
                        data.collections[doc.id].tags[i] = target.charAt(0).toUpperCase() + target.slice(1)
                    }

                    let tags = ""
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

                    column.insertAdjacentHTML("beforeend", //create new card with the data
                        `<div class="card port-card" style="display: inline-block; width: 100%">
                            <img class="card-img-top" src="${url}" alt="Card image">
                            <div class="card-img-overlay card-cover"></div>
                            <div class="card-img-overlay">
                                <h4 class="card-title">${(doc.id).charAt(0).toUpperCase() + (doc.id).slice(1)}</h4>
                                <p class="card-text">${tags}</p>
                            </div>
                        </div>`
                    )
                })
                counter ++
            })
        })
    })
}

displayProjects()