const navArea = document.querySelector(".nav__area");
const imgWrapper = document.querySelector(".img__wrapper");
const checkVoyage = document.querySelector(".check__voyage");

window.addEventListener("scroll", () => {
	let y = window.scrollY;
	if (y > 513) navArea.classList.add("sticky");
	else navArea.classList.remove("sticky");
});

imgWrapper.addEventListener("mouseover", (e) => {
	checkVoyage.style.display = "block";
});
