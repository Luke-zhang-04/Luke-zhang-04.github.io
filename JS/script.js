window.onscroll = function() {scroll()} //when scrolling call function scroll()

let counter = 0 //kinda like a loop variable
let quoteCounter = 0

let elements = document.getElementsByClassName("text") //elements w/ class text
objects = Array.prototype.slice.call(elements) //turn HTML collection into arrya
let positions = objects.map(i => i.offsetTop) //get positions of the elements

let quoteElements = document.getElementsByClassName("quoteText")
objects = Array.prototype.slice.call(quoteElements)
let quotePositions = objects.map(i => i.offsetTop)

let navbar = document.getElementById("navbar") //get position of the navbar

function scroll() {
  if (window.pageYOffset >= 400) { //if scrolled more than 400 unit s
      document.getElementById("navbar").classList.remove("preload")
      //remove preload class (preload removes all animations so the animation isn't triggered on page load)
      navbar.classList.add("appear") //make navbar background appear
      navbar.classList.remove("trans") //remove transparent class
  } else {
      navbar.classList.remove("appear") //remove appear class
      navbar.classList.add("trans") //make navbar background transparent
  }

  if (window.pageYOffset+window.screen.height*0.8 >= positions[counter]) { //if bottom of screen*0.8 is below elements[counter]
    elements[counter].classList.add("textappear") //make text appear
    elements[counter].classList.remove("texttrans") //remove transparent class
    counter ++ //increment counter to next element
    if (positions[counter] <= window.pageYOffset+window.screen.height*0.8) scroll() //if scrolled through more than one element recurse to load multiple elements at once
  }
  if (window.pageYOffset+window.screen.height*0.1 >= quotePositions[quoteCounter]) { //if bottom of screen*0.8 is below elements[counter]
    quoteElements[quoteCounter].classList.add("textappear") //make text appear
    quoteElements[quoteCounter].classList.remove("texttrans") //remove transparent class
    quoteCounter ++ //increment counter to next element
    if (positions[quoteCounter] <= window.pageYOffset+window.screen.height*0.8) scroll() //if scrolled through more than one element recurse to load multiple elements at once
  }
}