const navArea = document.querySelector(".nav__area");
const imgWrapper = document.querySelector(".img__wrapper");
const checkVoyage = document.querySelector(".check__voyage");

window.addEventListener("scroll", () => {
	let y = window.scrollY;
	if (y > 513) navArea.classList.add("sticky");
	else navArea.classList.remove("sticky");
});

imgWrapper.addEventListener("mouseover", (e) => {
	checkVoyageEvent(e);
});

function checkVoyageEvent(e) {
	if (e.target.className == "img__wrapper") checkVoyage.style.display = "block";
	else checkVoyage.style.display = "none";
}
