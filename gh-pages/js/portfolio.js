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

let data = {projects: {}, collections: {}}

window.onresize = function() {
    document.getElementById("splash").style.height = (
        window.innerWidth*0.66666666666 - navbar.offsetHeight - 26
    ).toString() + "px"
}
document.getElementById("splash").style.height = (
    window.innerWidth*0.66666666666 - navbar.offsetHeight - 26
).toString() + "px"

function displayProjects() {
    const projectContainer = document.getElementById("projects")
    const collectionContainer = document.getElementById("collections")
    const projectColumns = projectContainer.querySelector(".row")
    const collectionColumns = collectionContainer.querySelector(".row")
    let counter

    db.collection("projects").get().then(snapshot => {
        counter = 0
        snapshot.docs.forEach(doc => {
            let imgurl = storageRef.child(doc.data().file)
            let column = projectColumns.getElementsByClassName("col")[counter%3]
            
            imgurl.getDownloadURL().then(url => {
                column.insertAdjacentHTML("beforeend",
                `
                <div class="card port-card" style="display: inline-block; width: 100%">
                    <img class="card-img-top" src="${url}" alt="Card image">
                    <div class="card-img-overlay">
                        <h4 class="card-title">${doc.id}</h4>
                        <p class="card-text">${doc.data().tags}</p>
                    </div>
                </div>
                `
                )
            })
            counter ++
        })
    }).then(() => {
        counter = 0
        db.collection("collections").get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                let imgurl = storageRef.child(doc.data().file)
                let column = collectionColumns.getElementsByClassName("col")[counter%3]

                imgurl.getDownloadURL().then(url => {
                    column.insertAdjacentHTML("beforeend",
                    `
                    <div class="card port-card" style="display: inline-block; width: 100%">
                        <img class="card-img-top" src="${url}" alt="Card image">
                        <div class="card-img-overlay">
                            <h4 class="card-title">${doc.id}</h4>
                            <p class="card-text">${doc.data().tags}</p>
                        </div>
                    </div>
                    `
                    )
                })
                counter ++
            })
        })
    })
}

displayProjects()