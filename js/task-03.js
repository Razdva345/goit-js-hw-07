const inputElement = document.getElementById("name-input");
const outputElement = document.getElementById("name-output");

inputElement.addEventListener("input", event => {
	const inputValue = event.target.value.trim();

	if (inputValue === "") {
		outputElement.textContent = "Anonymous";
	} else {
		outputElement.textContent = inputValue;
	}
});
