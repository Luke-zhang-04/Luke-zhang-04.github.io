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

if (!mobile()) {
    let timeline = new TimelineMax();
    timelines.push(timeline)
    let elem = document.querySelector(".content")
    timeline.from(elem.querySelector(".cover"), 2.5, {x: 0, opacity: 0, width: 0})

    for (i = 0; i < 3; i++) {
        timeline.from(
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
            timeline.from(
                list[j], .5,
                {
                    x: elem.getElementsByTagName("h1")[i].clientWidth/1.25,
                    opacity: 0
                },
                "-="+remove.toString()
            )
        }
    }
    timeline.from(elem, 5, {"background-position": "0% 0%"})

    const scene = new ScrollMagic.Scene({
        triggerElement: elem,
        triggerHook: "onLeave",
        duration: "400%"
    })
    .setPin(elem)
    .setTween(timeline)
    .addTo(controller)

    scenes.push(scene)
}

window.onresize = function() {
    document.getElementById("splash").style.height = (
        window.innerWidth*0.56255674596 - navbar.offsetHeight - 26
    ).toString() + "px"
}
document.getElementById("splash").style.height = (
    window.innerWidth*0.56255674596 - navbar.offsetHeight - 26
).toString() + "px"