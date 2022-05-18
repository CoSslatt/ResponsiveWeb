const imgWrapper = document.querySelector(".img__wrapper");
const checkVoyage = document.querySelector(".check__voyage");

const headerImage = document.querySelector(".header__ship");
const HEADER_IMAGES_NUMBER = 4;

const menuIcon = document.querySelector(".hamburger__menu");
const navArea = document.querySelector(".nav__area");
const navItem = document.querySelectorAll(".nav__item");

window.addEventListener("mouseover", (e) => {
	checkVoyageEvent(e);
});

function checkVoyageEvent(e) {
	if (e.target.className == "header__ship") checkVoyage.style.display = "block";
	else checkVoyage.style.display = "none";
}

let temp = 1;
function changeHeaderImage() {
	if (temp == 4) temp = 0;

	temp++;
	headerImage.src = `images/ship-header-image-${temp}.jpg`;
}

setInterval(() => {
	changeHeaderImage();
}, 3000);

const contentWrapper = document.querySelector(".content__wrapper");
window.addEventListener("click", (e) => {
	if (
		e.target.textContent === "Rejsy" ||
		e.target.className === "header__ship"
	) {
		const target = document.querySelector(".content__wrapper");
		target.scrollIntoView();
	}
});
