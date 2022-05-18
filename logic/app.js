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

window.addEventListener("click", (e) => {
	if (e.target.className === "header__ship") {
		gotoVoyages();
	}

	switch (e.target.textContent) {
		case "Rejsy":
			gotoVoyages();
			break;
		case "Oferowane klasy":
			gotoOfferedClasses();
			break;
	}
});

const gotoVoyages = () => {
	const target = document.querySelector(".content__wrapper");
	target.scrollIntoView();
};

const gotoOfferedClasses = () => {
	const target = document.querySelector(".offered__classes");
	target.scrollIntoView();
};
