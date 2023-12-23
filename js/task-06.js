function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

// js/task-06.js

document.addEventListener("DOMContentLoaded", () => {
	const input = document.querySelector("#controls input");
	const createBtn = document.querySelector("[data-create]");
	const destroyBtn = document.querySelector("[data-destroy]");
	const boxesDiv = document.querySelector("#boxes");
	let size = 30;

	createBtn.addEventListener("click", () => {
		const amount = input.value;

		if (amount < 1 || amount > 100) {
			alert("Please enter a number between 1 and 100.");
			return;
		}

		destroyBoxes();
		createBoxes(amount);
		input.value = "";
	});

	destroyBtn.addEventListener("click", destroyBoxes);

	function createBoxes(amount) {
		if (amount <= 0) return;

		const box = document.createElement("div");
		box.style.width = `${size}px`;
		box.style.height = `${size}px`;
		box.style.backgroundColor = getRandomHexColor();
		boxesDiv.appendChild(box);

		size += 10;
		createBoxes(amount - 1);
	}

	function destroyBoxes() {
		boxesDiv.innerHTML = "";
		size = 30;
	}
});
