const text = `Welcome to the Villa Experience.

You are now standing inside the main hall of this interactive environment.

This place works like a small digital world.

Each glowing point around you represents a room that contains a different part of the experience.

Move your cursor around the hall and explore the different spaces.

When a location interests you, click on its glowing marker to continue your journey.`


let i = 0
const speed = 28

function typeWriter(){

const element = document.getElementById("typeText")

if(i < text.length){

element.innerHTML += text.charAt(i)

element.scrollTop = element.scrollHeight

i++

setTimeout(typeWriter,speed)

}

}

typeWriter()


/* NAVIGATION */

document.querySelector(".about").onclick = () => {

window.location.href="about.html"

}

document.querySelector(".projects").onclick = () => {

window.location.href="projects.html"

}

document.querySelector(".gallery").onclick = () => {

window.location.href="gallery.html"

}

document.querySelector(".secret").onclick = () => {

window.location.href="secret.html"

}