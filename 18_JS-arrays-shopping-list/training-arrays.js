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
let NUMBERS = [3, 4, 6, 197, 36, 482, 49, 261, 1, 83];

// ! Список для тренировки методов в массвах:
// * Array.prototype.forEach()
// * Array.prototype.map()
// * Array.prototype.includes()

// * Array.isArray() - training
console.log(Array.isArray(SHOPPINGLIST)); // true
// console.log(Array.isArray(NUMBDERS)); // ошибка, это значение not defined, нет такого массива

// * Array.prototype.indexOf()
// ? console.log(SHOPPINGLIST.indexOf(product6, 0)); Почему не выводит -1, а выводит ошибку?
// console.log(SHOPPINGLIST.indexOf(product1)); // 0
// console.log(SHOPPINGLIST.indexOf(product2)); // 1
// console.log(SHOPPINGLIST.indexOf(product2, 0)); // 1 (нумерация с нуля)
// console.log(SHOPPINGLIST.indexOf(product2, [, (fromIndex = 0)])); // 1. Как и предыдущее, только длиннее запись. Нужно ли писать вот это фром-индекс?
// console.log(SHOPPINGLIST.indexOf(product3, [2])); // 2, потому что такой индекс есть
// console.log(SHOPPINGLIST.indexOf(product3, [3])); // -1, потому что такого нет
// console.log(SHOPPINGLIST.indexOf(product2, product3));

// * Array.prototype.sort()
// console.log(NUMBERS.sort()); // Отсортировало сначала цифры начинающиеся на 1, потом на 2 и тд

// ! Сортировка чисел из введенных параметров
// function sortParameterNumbers(a, b) {
//   if (a < b) {
//     return 'worked';
//   } else {
//     return 'not worked';
//   }
// }
// console.log(sortParameterNumbers(5, 6));

// ! Сортировка чисел из массива, где прямо лежат цифры
// NUMBERS.sort(function (a, b) {
//   return a - b;
// });
// console.log(NUMBERS);

// ! Сортировка чисел из массива чисел через функцию
// function sortNumbers(array) {
//   return array.sort((a, b) => {
//     return a - b;
//   });
// }
// console.log(sortNumbers(NUMBERS));

// ! Сортировка по имени
// SHOPPINGLIST.sort(function (a, b) {
//   if (a.name < b.name) return -1; // от а до я
//   // if (a.name > b.name) return -1; // от я до а
// });
// console.log(SHOPPINGLIST);

// ! Сортировка по цене
// SHOPPINGLIST.sort(function (a, b) {
//   return a.price - b.price;
// });
// console.log(SHOPPINGLIST);

// * Array.prototype.concat()
// ! Соединение массивов
// const newConcatArray = NUMBERS.concat(SHOPPINGLIST);
// console.log(newConcatArray);

// * Array.prototype.slice()
