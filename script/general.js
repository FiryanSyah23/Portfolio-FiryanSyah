import { iconCodeAnimation, revealAni } from "../script/content.js";

let ticking = false;
window.addEventListener("scroll", () => {
	if (!ticking) {
		window.requestAnimationFrame(() => {
			iconCodeAnimation();
			revealAni();
			ticking = false;
		});
		ticking = true;
	}
});

revealAni();
iconCodeAnimation();
