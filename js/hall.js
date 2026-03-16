/* TYPEWRITER TEXT */

const text = document.getElementById("typeText")

const message = `Welcome to the villa hall.

This interactive environment works like a small exploration game.

Each glowing point represents a room inside the villa.

About Me :
Discover the bedroom where you can learn more about me.

Projects :
Visit the library containing my creations and school projects.

Night Gallery :
Climb upstairs to explore the nocturnal gallery.

Secret Room :
Find the hidden chamber containing my contact information.

Move your cursor over the glowing points to reveal their names.
Click on a location to enter a room.`

let i = 0

function typeWriter(){

if(i < message.length){

text.innerHTML += message.charAt(i)

i++

setTimeout(typeWriter,25)

}

}

typeWriter()



/* HUD OPEN CLOSE */

const toggle = document.getElementById("toggleHud")
const hud = document.getElementById("hud")

toggle.addEventListener("click", () => {

hud.classList.toggle("open")

})



/* MOBILE MARKER LOOP */

if(window.innerWidth <= 600){

const markers = document.querySelectorAll(".marker")

let index = 0

function showMarker(){

markers.forEach(marker => marker.classList.remove("active"))

markers[index].classList.add("active")

index++

if(index >= markers.length){
index = 0
}

}

showMarker()

setInterval(showMarker,3000)

}