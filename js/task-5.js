function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

document.addEventListener("DOMContentLoaded", () => {
	const body = document.body;
	const colorSpan = document.querySelector("span.color");
	const changeColorBtn = document.querySelector("button.change-color");

	changeColorBtn.addEventListener("click", () => {
		const randomColor = getRandomHexColor();

		body.style.backgroundColor = randomColor;
		colorSpan.textContent = randomColor;
	});
});
