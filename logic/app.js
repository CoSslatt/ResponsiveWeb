const navArea = document.querySelector(".nav__area");

window.addEventListener("scroll", () => {
	let y = window.scrollY;
	if (y > 512) navArea.classList.add("sticky");
	else navArea.classList.remove("sticky");
});
