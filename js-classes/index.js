const currentYear = new Date().getFullYear();

class iPhone {
  static OS = 'iOS';

  constructor(color, model, year, country) {
    this.color = color || 'not found';
    this.model = model || 'not found';
    this.year = year || 'not found';
    this.country = country || 'not found';
  }

  howOld() {
    console.log(`This IPhone is ${currentYear - this.year} years old`);
    console.log(`This IPhone has ${iPhone.OS} operational system`);
  }
}

const myIPhone = new iPhone('white', '12 Pro', '2020', 'USA');
const annaIPhone = new iPhone('black', '8', '2017', 'China');

console.log(myIPhone);
console.log(annaIPhone);

myIPhone.howOld();
annaIPhone.howOld();

// ! чайлд-айфон
class isNewIPhone extends iPhone {
  constructor(color, model, year, country, isNew) {
    // * тут передать ВСЕ параметры нового элемента
    super(color, model, year, country); // * тут передать параметры из родителя (какие нужны)
    this.isNew = isNew || true;
  }
}

const somePhone = new isNewIPhone('pink', '10 Pro', '2019', 'Korea', false);
const someOtherPhone = new isNewIPhone('pink', '10 Pro', '2019', 'Korea');

console.log(somePhone);
