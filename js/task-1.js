// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const listItems = document.querySelectorAll(".item");
console.log(listItems);
console.log(`Number of categories: ${listItems.length}`);

for (const el of listItems) {
  const heading = el.querySelector("h2").textContent;
  const amount = el.querySelectorAll(" li").length;
  console.log(`Category: ${heading}`);
  console.log(`Elements ${amount}`);
}
