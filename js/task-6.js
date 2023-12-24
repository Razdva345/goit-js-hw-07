function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
document.addEventListener("DOMContentLoaded", () => {
	const input = document.querySelector("#controls input");
	const createBtn = document.querySelector("[data-create]");
	const destroyBtn = document.querySelector("[data-destroy]");
	const boxesDiv = document.querySelector("#boxes");
	let sizeIncrement = 30;

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
		let size = sizeIncrement;

		for (let i = 0; i < amount; i += 1) {
			const box = document.createElement("div");
			box.style.width = `${size}px`;
			box.style.height = `${size}px`;
			box.style.backgroundColor = getRandomHexColor();
			boxesDiv.appendChild(box);

			size += sizeIncrement;
		}
	}
	function destroyBoxes() {
		boxesDiv.innerHTML = "";
		sizeIncrement = 30;
	}
});
