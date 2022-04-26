// ! Shopping list

function calculateTotalPrice() {
  return this.price * this.quantity;
}

let product1 = {
  price: 10,
  name: 'Milk',
  isBought: false,
  quantity: 0,
  totalPrice: calculateTotalPrice,
};

let product2 = {
  price: 5,
  name: 'Apples',
  isBought: true,
  quantity: 0,
  totalPrice: calculateTotalPrice,
};

let product3 = {
  price: 9,
  name: 'Eggs',
  isBought: false,
  quantity: 0,
  totalPrice: calculateTotalPrice,
};

let SHOPPINGLIST = [product1, product2, product3];

// ! Готовая сортировка купленных

// Создаем функцию, которая будет сортировать, в параместр передаем условный "список", при вызове функции мы передадим настоящий массив вместо условного списка
function sortByBought(list) {
  // Эта строка не будет работать сама без следующей, потому что мы не передаем то, что надо вывести,а передаем метод в котором находится то, что надо вывести. Return должен принимать значение, чтобы вывести его, а метод - это не значение. Метод содержит значение, которое нужно ретурну.
  return list.sort((product) => {
    // Верни какой-то айтем (продукт) отсортированный по флагу isBought, условие: если isBought true, то -1, иначе false и 1.
    return product.isBought ? -1 : 1;
  });
}
console.log(sortByBought(SHOPPINGLIST)); // ? Запуск функции сортировки происходи по параметру список/массив, у нас имя массива (SHOPPINGLIST)

// ! Поиск + покупка продукта

function buyProduct(productsArray, name) {
  let foundProduct = productsArray.find((product) => product.name === name); // * Тут происходит поиск обьекта
  // * В условии IF мы проверяем нашли ли вообще продукт, чтобы функция не работала дальше, если продукт не найдется, то все остановится + выведется ОШИБКА!!!
  if (foundProduct === undefined) {
    console.log('ОШИБКА!!!');
    return;
  }
  foundProduct.isBought = true; // * Тут мы обращемся к НАЙДЕННОМУ ВЫШЕ айтему, у которого ключ isBought и меняем его (присваеваемый ему) на тру = купленный, т.е. покупка;
}
// console.log(buyProduct(SHOPPINGLIST, 'Milk'));
buyProduct(SHOPPINGLIST, 'Eggs');
console.log(SHOPPINGLIST);

// ! Вывести некупленные

function showUnbought(list) {
  return list.filter((product) => product.isBought === false);
}
console.log(showUnbought(SHOPPINGLIST));

// https://stackoverflow.com/questions/17387435/javascript-sort-array-of-objects-by-a-boolean-property
