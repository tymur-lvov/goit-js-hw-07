const сategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${сategories.length}`);

сategories.forEach((category) => {
  const categoryTitle = category.querySelector("h2");
  console.log(`Category: ${categoryTitle.textContent}`);
  const categoryItems = category.querySelectorAll("li");
  console.log(`Elements: ${categoryItems.length}`);
});
