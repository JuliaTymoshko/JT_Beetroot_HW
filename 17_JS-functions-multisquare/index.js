// ! Мульриквадрат: подсчет периметра, добавление значения в конец, найти самое большое значение
const MULTIRECTANGLE = {
  name: 'Крейзи квадрат',
  sides: [2, 6, 3, 9],
  addItem: function (x) {
    this.sides.push(x);
    return this.sides;
  },
  calculate: function () {
    let sidesSum = 0;
    for (let i = 0; i < this.sides.length; i++) {
      sidesSum += this.sides[i];
    }
    return sidesSum;
  },
  findSenior: () => Math.max(...MULTIRECTANGLE.sides),
};
console.log(MULTIRECTANGLE.addItem(5));
console.log(MULTIRECTANGLE.calculate());
console.log(MULTIRECTANGLE.findSenior());
