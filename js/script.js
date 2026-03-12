const btn = document.getElementById("enterBtn");
const hero = document.querySelector(".hero");

btn.addEventListener("click", () => {

hero.classList.add("zoom");

setTimeout(() => {

window.location.href = "hall.html";

}, 1200);

});