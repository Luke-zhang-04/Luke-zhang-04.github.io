let timelines = []
let scenes = []
const controller = new ScrollMagic.Controller()

if (!mobile()) {
    let timeline = new TimelineMax();
    timelines.push(timeline)
    let elem = document.querySelector(".content")
    timeline.from(elem.querySelector(".cover"), .25, {x: 0, opacity: 0, width: 0})

    for (i = 0; i < 3; i++) {
        timeline.from(
            elem.getElementsByTagName("h1")[i],
            .25,
            {
                x: elem.getElementsByTagName("h1")[i].clientWidth/1.25,
                opacity: 0
            },
            "-=.125"
        )
        
        let list = elem.getElementsByClassName("list")[i].children
        for (j = 0; j < list.length; j++) {
            let remove = .125
            timeline.from(
                list[j], .25,
                {
                    x: elem.getElementsByTagName("h1")[i].clientWidth/1.25,
                    opacity: 0
                },
                "-="+remove.toString()
            )
        }
    }

    const scene = new ScrollMagic.Scene({
        triggerElement: elem,
        triggerHook: "onLeave",
        duration: "200%"
    })
    .setPin(elem)
    .setTween(timeline)
    .addTo(controller)

    scenes.push(scene)
}