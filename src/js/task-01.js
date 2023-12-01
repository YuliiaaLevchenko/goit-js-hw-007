const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.children;
for (let item of categoriesItems) {
    const categoryName = item.querySelector("h2").textContent;
    const categoryElements = item.querySelectorAll("li").length;
}