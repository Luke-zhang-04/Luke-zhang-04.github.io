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

let timelines = []
let scenes = []
const controller = new ScrollMagic.Controller()

let data = {projects: {}, collections: {}} //data for projects

function bindTimeline1() {
    let timeline1 = new TimelineMax();
    timelines.push(timeline1)
    let elem = document.getElementsByClassName("content")[0]
    timeline1.from(elem.querySelector(".cover"), 5, {x: 0, opacity: 0, width: 0})

    for (let i = 0; i < 3; i++) {
        // timeline1.staggerFromTo(
        //     elem.getElementsByTagName("h1")[i],
        //     .5,
        //     {
        //         x: elem.getElementsByTagName("h1")[i].clientWidth/1.25,
        //         opacity: 0
        //     },
        //     {
        //         x: 0,
        //         opacity: 1,
        //         ease: Back.easeOut
        //     },
        //     0.15,
        //     "-=.125"
        // )
        
        // let list = elem.getElementsByClassName("list")[i]
        // for (j = 0; j < list.length; j++) {
        //     let remove = .25
        //     timeline1.staggerFromTo(
        //         list[j], .5,
        //         {
        //             x: elem.getElementsByTagName("h1")[i].clientWidth/1.25,
        //             opacity: 0
        //         },
        //         {
        //             x: 0,
        //             opacity: 1,
        //             ease: Back.easeOut
        //         },
        //         0.15,
        //         "-="+remove.toString()
        //     )
        // }
        let objects = [elem.querySelector(".animate"+i.toString()), ...elem.getElementsByClassName("list")[i].children]
        timeline1.staggerFromTo(
            // list,
            objects,
            2,
            {
                x: elem.getElementsByTagName("h1")[i].clientWidth/1.25,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                ease: Back.easeOut
            },
            0.5,
            "-=.25"
        )
    }
    timeline1.from(elem, 10, {"background-position": "0% 0%"})

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

function bindTimeline3() {
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        .fromTo("section.panel.panel1", 7.5, {x: "100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
        .fromTo("section.panel.panel2", 7.5, {x:  "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
        .fromTo("section.panel.panel3", 7.5, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
        .fromTo('section.panel.panel4', 7.5, {y: "100%"}, {y: "0%", ease: Linear.easeNone})

    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "750%"
    })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    .addTo(controller);
}

if (!mobile()) {
    // bindTimeline1()
    // bindTimeline2()
}
bindTimeline1()
bindTimeline3()

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
        "  LinkedIn", //55
        "  StackOverflow"
    ]
    const fonts = [
        null,
        `<i class="fab fa-github"></i>`,
        `<i class="fas fa-envelope"></i>`,
        `<i class="fab fa-python"></i>`,
        `<i class="fab fa-linkedin"></i>`,
        `<i class="fab fa-stack-overflow"></i>`
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
    } else if (step <= 5) {
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
    timeout(10000).then(() => {
        callTyper()
    })
}

callTyper()

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// function displayProjects() {
//     db.collection("projects").orderBy("date").get().then(snapshot => {
//         const projectColumns = document.getElementsByClassName("proj-col")
//         for (counter = 0; counter < 3; counter++) {
//             let doc = snapshot.docs.reverse()[counter]
//             let imgurl = storageRef.child(doc.data().file) //get image URL
//             let column = projectColumns[counter] //column reference

//             imgurl.getDownloadURL().then(url => {
//                 data.projects[doc.id] = doc.data() //insert doc data
//                 data.projects[doc.id]["imgurl"] = url //insert image url

//                 for (i = 0; i < data.projects[doc.id].tags.length; i++) { //capitalize tags
//                     let target = data.projects[doc.id].tags[i]

//                     if (target === "front-end-code") {
//                         data.projects[doc.id].tags[i] = "HTML, CSS, JS"
//                     } else {
//                         data.projects[doc.id].tags[i] = target.charAt(0).toUpperCase() + target.slice(1)
//                     }
//                 }
//                 let tags = ""
//                 let description = ""

//                 for (i = 0; i < data.projects[doc.id].tags.length; i++) { //format tags and make sure they aren't too long
//                     if (i >= 5) {
//                         tags += " . . ."
//                         break
//                     } else if (i == 4 || i == data.projects[doc.id].tags.length-1) {
//                         tags += `${data.projects[doc.id].tags[i]}`
//                     } else {
//                         tags += `${data.projects[doc.id].tags[i]}, `
//                     }
//                 }

//                 for (i = 0; i < data.projects[doc.id].description.split(" ").length; i++) { //format description
//                     if (i >= 20) {
//                         description += " . . ."
//                         break
//                     } else {
//                         description += data.projects[doc.id].description.split(" ")[i].replace(`\\n`, "<br/>").replace(`\\n`, "") + " "
//                     }
//                 }
//                 column.innerHTML = `
//                     <div class="card port-card" style="display: inline-block; width: 100%">
//                         <img class="card-img-top" src="${url}" alt="Card image">
//                         <div class="card-img-overlay card-cover"></div>
//                         <div class="card-img-overlay">
//                             <h4 class="card-title">${(doc.id).charAt(0).toUpperCase() + (doc.id).slice(1)}</h4>
//                             <p>${description}</p>
//                             <p class="card-text">${tags}</p>
//                         </div>
//                     </div>
//                 `
//             })
//         }
//     })
// }

function displayProjects() {
    const containers = document.getElementsByClassName("panel-proj")
    db.collection("projects").orderBy("date").get().then(snapshot => {
        for (let i = 0; i < containers.length; i++) {
            let doc = snapshot.docs.reverse()[i]
            let container = containers[i]
            let imgurl = storageRef.child(doc.data().file)
            let description = doc.data().description.replace("\\n", "<br/>").replace("\\n", "")

            imgurl.getDownloadURL().then(url => {
                let image = new Image()
                image.onload = findHHandWW
                image.src = url

                function findHHandWW() {
                    imgHeight = this.height
                    container.querySelector(".col-lg-5").innerHTML = `<img src="${url}"/>`
                    container.querySelector(".col-lg-7").innerHTML = `<h2>${doc.id}</h2><p>${description}</p>`

                    let top = window.innerHeight/2 - container.querySelector("img").height/2 + 25
                    container.querySelector("img").style.top = top.toString() + "px"
                }
                
            })
        }
    })
}

$("document").ready(() => {
    displayProjects()
})