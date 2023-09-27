console.log("Hello there");

var menuButton = document.querySelector("header button");
var deNav = document.querySelector("header nav");


menuButton.onclick = toggleMenu;

function toggleMenu() {
	deNav.classList.toggle("open");
}