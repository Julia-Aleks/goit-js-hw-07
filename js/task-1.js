const listCategories = document.querySelector(`#categories`);
const listItem = document.querySelectorAll(`#categories .item`);
console.log(listItem);
console.log(listCategories);
listItem.forEach((category) => {
  const title = category.querySelector(`h2`).textContent;
  const elementsCount = category.querySelectorAll(`ul li`).length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
  console.log(`Number of categories: ${listItem.length}`);
});
