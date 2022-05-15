const navArea = document.querySelector(".nav__area");
const imgWrapper = document.querySelector(".img__wrapper");
const checkVoyage = document.querySelector(".check__voyage");

const headerImage = document.querySelector(".header__ship");
const HEADER_IMAGES_NUMBER = 4;
let a = 0;

window.addEventListener("scroll", () => {
	let y = window.scrollY;
	if (y > 513) navArea.classList.add("sticky");
	else navArea.classList.remove("sticky");
});

window.addEventListener("mouseover", (e) => {
	checkVoyageEvent(e);
});

function checkVoyageEvent(e) {
	if (e.target.className == "header__ship") checkVoyage.style.display = "block";
	else checkVoyage.style.display = "none";
}

function changeHeaderImage() {
	if (a == 4) a = 0;

	a++;
	console.log(a);
	headerImage.src = `images/ship-header-image-${a}.jpg`;
}

setInterval(() => {
	changeHeaderImage();
}, 3000);
