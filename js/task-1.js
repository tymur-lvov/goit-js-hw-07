const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach((category) => {
  const categoryTitles = category.querySelector("h2");
  console.log(`Category: ${categoryTitles.textContent}`);
  const categoryElements = category.querySelectorAll("li");
  console.log(`Elements: ${categoryElements.length}`);
});

const inlineStyleSheet = document.createElement("style");
const documentTitle = document.querySelector("title");

documentTitle.after(inlineStyleSheet);
inlineStyleSheet.innerHTML = "body {background-color: teal} ";
