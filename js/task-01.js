const categoriesList = document.querySelector("#categories");
const categoriesItems = Array.from(categoriesList.children);

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
   
   const categoryName = item.querySelector("h2").textContent;
   const categoryElements = item.querySelectorAll("li").length;
   console.log(`Category: ${categoryName}`);
   console.log(`Elements: ${categoryElements}`);
});