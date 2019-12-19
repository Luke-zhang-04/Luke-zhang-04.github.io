window.onscroll = function() {scroll()};

let navbar = document.getElementById("navbar");

let sticky = 0;

function scroll() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }

    if (window.pageYOffset >= sticky+100) {
        document.getElementById("navbar").classList.remove("preload")
        navbar.classList.add("appear")
        navbar.classList.remove("trans")
    } else {
        navbar.classList.remove("appear")
        navbar.classList.add("trans")
    }
  }