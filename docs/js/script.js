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

const print = console.log

let toggled = false

window.onscroll = () => {scroll()};

// Get the navbar
const navbar = document.querySelector(".navbar")


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scroll() {
    if (window.pageYOffset >= 130) {
        navbar.classList.add("navbar-background")
        navbar.classList.add("navbar-text-light")
        navbar.classList.remove("navbar-text-dark")
        navbar.classList.remove("navbar-transparent")
        navbar.classList.remove("navbar-default")
        navbar.classList.remove("navbar-light")
        toggled = true
    } else if (toggled) {
        navbar.classList.remove("navbar-background")
        navbar.classList.add("navbar-transparent")
        navbar.classList.add("navbar-text-dark")
        navbar.classList.remove("navbar-text-light")
    }
}