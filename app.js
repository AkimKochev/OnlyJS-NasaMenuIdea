const shuffle = document.querySelector(".shuffle");
const menuIcon = document.querySelector(".menu-icon");

document.addEventListener("mouseover", (e) => {
	if (!e.target.matches(".menu-link-text")) return;

	const menuLink = e.target.closest(".menu-link");
	const offset =
		getComputedStyle(menuLink).getPropertyValue("--shuffle-offset");
	shuffle.style.transform = `translateY(${offset})`;
});

menuIcon.addEventListener("click", () => {
	menuIcon.classList.toggle("active");
});
