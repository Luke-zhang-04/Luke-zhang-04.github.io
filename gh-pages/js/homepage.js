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

let timelines = []
let scenes = []
const controller = new ScrollMagic.Controller()

let data = {projects: {}, collections: {}} //data for projects

function bindTimeline1() {
    let timeline1 = new TimelineMax();
    timelines.push(timeline1)
    let elem = document.getElementsByClassName("content")[0]
    timeline1.from(elem.querySelector(".cover"), 2.5, {x: 0, opacity: 0, width: 0})

    for (i = 0; i < 3; i++) {
        timeline1.from(
            elem.getElementsByTagName("h1")[i],
            .5,
            {
                x: elem.getElementsByTagName("h1")[i].clientWidth/1.25,
                opacity: 0
            },
            "-=.125"
        )
        
        let list = elem.getElementsByClassName("list")[i].children
        for (j = 0; j < list.length; j++) {
            let remove = .25
            timeline1.from(
                list[j], .5,
                {
                    x: elem.getElementsByTagName("h1")[i].clientWidth/1.25,
                    opacity: 0
                },
                "-="+remove.toString()
            )
        }
    }
    timeline1.from(elem, 5, {"background-position": "0% 0%"})

    const scene = new ScrollMagic.Scene({
        triggerElement: elem,
        triggerHook: "onLeave",
        duration: "400%"
    })
    .setPin(elem)
    .setTween(timeline1)
    .addTo(controller)

    scenes.push(scene)
}

function bindTimeline2() {
    const timeline2 = new TimelineMax()
    timelines.push(timeline2)
    const elem = document.getElementById("section3")
    const title = elem.querySelector(".proj-title")
    const projects = elem.getElementsByClassName("proj-col")

    timeline2.from(
        ".proj",
        0.2,
        {display: "none"}

    )

    timeline2.staggerFromTo(
        ".proj-header",
        2,
        {
            x: window.innerWidth,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            ease: Back.easeOut,
        },
        0.15
    )

    timeline2.staggerFromTo(
        ".proj-col",
        2,
        {
            x: window.innerWidth,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            ease: Back.easeOut,
        },
        0.15,
        "-=1.75"
    )

    const scene = new ScrollMagic.Scene({
        triggerElement: elem,
        triggerHook: "onLeave",
        duration: "400%"
    })
    .setPin(elem)
    .setTween(timeline2)
    .addTo(controller)

    scenes.push(scene)
}

if (!mobile()) {
    bindTimeline1()
    bindTimeline2()
}

window.onresize = function() {
    document.getElementById("splash").style.height = (
        window.innerWidth*0.56255674596 - navbar.offsetHeight - 26
    ).toString() + "px"
}
document.getElementById("splash").style.height = (
    window.innerWidth*0.56255674596 - navbar.offsetHeight - 26
).toString() + "px"

function typewriter(step = null, i = 0, clear = false) {
    const header = document.getElementById("section2").querySelector("h1")
    const list = document.getElementById("section2").querySelector(".list-unstyled").children
    const steps = [
        "Profiles and Contact",
        "  GitHub",
        "  Email",
        "  PyPi",
        "  LinkedIn" //55
    ]
    const fonts = [
        null,
        `<i class="fab fa-github"></i>`,
        `<i class="fas fa-envelope"></i>`,
        `<i class="fab fa-python"></i>`,
        `<i class="fab fa-linkedin"></i>`
    ]

    if (clear) {
        header.innerHTML = ""
        for (i of list) {
            i.querySelector("a").innerHTML = ""
        }
        return new Promise(() => setTimeout(() => {
            return
        }), 2000)
    }

    if (!step) {
        if (i < steps[0].length) {
            header.innerHTML += steps[0][i]
            return new Promise(() => setTimeout(() => {
                return typewriter(null, i+1)
            }, 60))
        
        } else {
            return new Promise(() => setTimeout(() => {
                return typewriter(1)
            }, 200))
        
        }
    } else if (step <= 4) {
        if (i < steps[step].length) {
            if (i === 0) {
                list[step-1].querySelector("a").innerHTML += fonts[step]
                return new Promise(() => setTimeout(() => {
                    return typewriter(step, i+1)
                }, 60))
            
            } else {
                list[step-1].querySelector("a").innerHTML += steps[step][i]
                return new Promise(() => setTimeout(() => {
                    return typewriter(step, i+1)
                }, 60))
            
            }
        } else {
            return new Promise(() => setTimeout(() => {
                return typewriter(step+1)
            }), 200)
        
        }
    } else {
        return timeout(5000).then(() => {
            return typewriter(null, 0, true)
        })
    }
}

function callTyper() {
    typewriter()
    timeout(9100).then(() => {
        callTyper()
    })
}

callTyper()

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function displayProjects() {
    db.collection("projects").orderBy("date").get().then(snapshot => {
        const projectColumns = document.getElementsByClassName("proj-col")
        for (counter = 0; counter < 3; counter++) {
            let doc = snapshot.docs.reverse()[counter]
            let imgurl = storageRef.child(doc.data().file) //get image URL
            let column = projectColumns[counter] //column reference

            imgurl.getDownloadURL().then(url => {
                data.projects[doc.id] = doc.data() //insert doc data
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
                column.innerHTML = `
                    <div class="card port-card" style="display: inline-block; width: 100%">
                        <img class="card-img-top" src="${url}" alt="Card image">
                        <div class="card-img-overlay card-cover"></div>
                        <div class="card-img-overlay">
                            <h4 class="card-title">${(doc.id).charAt(0).toUpperCase() + (doc.id).slice(1)}</h4>
                            <p>${description}</p>
                            <p class="card-text">${tags}</p>
                        </div>
                    </div>
                `
            })
        }
    })
}

displayProjects()