const categoriesList = document.getElementById("categories");

const categories = categoriesList.querySelectorAll(".item");

console.log(`NUmber of categories: ${categories.length}`);

categories.forEach(category => {
	const categoryName = category.querySelector("h2").textContent.trim();
	console.log(`Category: ${categoryName}`);
	const categoryItems = category.querySelectorAll("ul > li");
	console.log(`Èlements: ${categoryItems.length}`);
});
