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
        "  LinkedIn"
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
            typewriter()
        }), 2000)
    }

    if (!step) {
        if (i < steps[0].length) {
            header.innerHTML += steps[0][i]
            // setTimeout(() => {
            //     typewriter(null, i+1)
            // }, 60)
            return new Promise(() => setTimeout(() => {
                typewriter(null, i+1)
            }, 60))
        
        } else {
            // setTimeout(() => {
            //     typewriter(1)
            // }, 200)
            return new Promise(() => setTimeout(() => {
                typewriter(1)
            }, 200))
        
        }
    } else if (step <= 4) {
        if (i < steps[step].length) {
            if (i === 0) {
                list[step-1].querySelector("a").innerHTML += fonts[step]
                // setTimeout(() => {
                //     typewriter(step, i+1)
                // }, 60)
                return new Promise(() => setTimeout(() => {
                    typewriter(step, i+1)
                }, 60))
            
            } else {
                list[step-1].querySelector("a").innerHTML += steps[step][i]
                // setTimeout(() => {
                //     typewriter(step, i+1)
                // }, 60)
                return new Promise(() => setTimeout(() => {
                    typewriter(step, i+1)
                }, 60))
            
            }
        } else {
            // setTimeout(() => {
            //     typewriter(step+1)
            // }, 200)
            return new Promise(() => setTimeout(() => {
                typewriter(step+1)
            }), 200)
        
        }
    } else {
        timeout(5000).then(() => {
            typewriter(null, 0, true)
        })
    }
}

function callTyper() {
    typewriter()
}

callTyper()

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}