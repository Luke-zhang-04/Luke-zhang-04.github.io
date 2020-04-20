let timelines = []
let scenes = []
const controller = new ScrollMagic.Controller()

window.onresize = function() {
    document.getElementById("splash").style.height = (
        window.innerWidth*0.56255674596 - navbar.offsetHeight - 16
    ).toString() + "px"
}
document.getElementById("splash").style.height = (
    window.innerWidth*0.56255674596 - navbar.offsetHeight - 16
).toString() + "px"

if (!mobile()) {
    let timeline = new TimelineMax();
    timelines.push(timeline)
}