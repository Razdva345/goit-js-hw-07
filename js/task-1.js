const categoriesList = document.getElementById("categories");

const categories = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
	const categoryName = category.querySelector("h2").textContent.trim();
	console.log(`Category: ${categoryName}`);
	const categoryItems = category.querySelectorAll("li");
	console.log(`Elements: ${categoryItems.length}`);
});
