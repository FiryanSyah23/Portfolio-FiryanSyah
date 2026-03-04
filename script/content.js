const animation = document.querySelectorAll(".animation");

export function iconCodeAnimation() {
	const icons = document.querySelectorAll(".icon-skill");
	const icons2 = document.querySelectorAll(".experience-content img");
	const icons3 = document.querySelectorAll(".icon");
	const card = document.querySelectorAll(".card-project");
	const trigger = window.innerHeight;

	icons.forEach((icon, index) => {
		const rect = icon.getBoundingClientRect();
		const inView = rect.top < trigger;
		if (inView) {
			setTimeout(() => {
				icon.classList.add("animate-icon");
			}, index * 100);
		}
	});

	icons2.forEach((icon1, index1) => {
		const rect1 = icon1.getBoundingClientRect();
		const inView1 = rect1.top < trigger;
		if (inView1) {
			setTimeout(() => {
				icon1.classList.add("animate-icon-experience");
			}, index1 * 500);
		}
	});

	icons3.forEach((icon2, index2) => {
		const rect2 = icon2.getBoundingClientRect();
		const inView2 = rect2.top < trigger;
		if (inView2) {
			setTimeout(() => {
				icon2.classList.add("animate-icon-contact");
			}, index2 * 200);
		}
	});

	card.forEach((carditem, indexcart) => {
		const rect3 = carditem.getBoundingClientRect();
		const inView3 = rect3.top < trigger;
		if (inView3) {
			setTimeout(() => {
				carditem.classList.add("animate-card");
			}, indexcart * 300);
		}
	});
}

export function revealAni() {
	const trigger = window.innerHeight;

	animation.forEach((ani) => {
		const anitop = ani.getBoundingClientRect().top;

		if (anitop < trigger) {
			ani.classList.add("show");
		}
	});
}

