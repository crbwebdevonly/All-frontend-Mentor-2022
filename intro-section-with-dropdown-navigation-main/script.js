const breakPopint1 = 700;

const mobileBars = document.getElementById("bars");
const menu_UL = document.getElementById("menu-ul");
mobileBars.addEventListener("click", () => {
	// menu_UL.style.display = "flex";
	menu_UL.classList.add("show");
});

const close = document.getElementById("close");
close.addEventListener("click", () => {
	// menu_UL.style.display = "none";
	menu_UL.classList.remove("show");
});

if (window.innerWidth > breakPopint1) {
	menu_UL.classList.remove("menu-ul-mobile");
	menu_UL.classList.add("menu-ul-desktop");
}
if (window.innerWidth < breakPopint1) {
	menu_UL.classList.add("menu-ul-mobile");
	menu_UL.classList.remove("menu-ul-desktop");
}
window.addEventListener("resize", (e) => {
	// console.log(e.target.innerWidth);
	if (e.target.innerWidth > breakPopint1) {
		menu_UL.classList.remove("menu-ul-mobile");
		menu_UL.classList.add("menu-ul-desktop");
	}
	if (e.target.innerWidth < breakPopint1) {
		menu_UL.classList.add("menu-ul-mobile");
		menu_UL.classList.remove("menu-ul-desktop");
	}
});
