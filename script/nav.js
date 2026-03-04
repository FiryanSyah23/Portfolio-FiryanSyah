const navIcon = document.querySelector(".nav-icon-menu");
const navMenu = document.querySelector(".nav-menu");
const clickLink = document.querySelectorAll(".group a");
let isLocked = false;

// toggle menu saat tombol diklik
navIcon.addEventListener("click", () => {
	if (isLocked) return;
	isLocked = true;

	navMenu.classList.toggle("side-bar");

	setTimeout(() => {
		isLocked = false;
	}, 500);
});

// klik di mana saja di luar menu → tutup menu
document.addEventListener("click", (e) => {
	if (!navMenu.contains(e.target) && e.target !== navIcon) {
		navMenu.classList.remove("side-bar");
	}
	clickLink.forEach((link) => {
		if (e.target === link) {
			navMenu.classList.remove("side-bar");
		}
	});
});
