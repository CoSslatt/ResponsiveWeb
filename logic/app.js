const imgWrapper = document.querySelector(".img__wrapper");
const checkVoyage = document.querySelector(".check__voyage");

const headerImage = document.querySelector(".header__ship");
const HEADER_IMAGES_NUMBER = 4;

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

const voyagesSection = document.querySelector(".voyages__section");
const contentWrapper = document.querySelector(".content__wrapper");
window.addEventListener("click", (e) => {
	if (e.target.textContent === "Rejsy") {
		let targetVoyages =
			window.innerHeight +
			contentWrapper.clientHeight -
			voyagesSection.clientHeight;
		scrollTo(0, targetVoyages, "smooth");
	}
});
