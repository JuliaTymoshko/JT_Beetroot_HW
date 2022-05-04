// ! чтобы не передавать все параметры в чайлд заново, можно их передать обьектом

const currentYear = new Date().getFullYear();

class iPhone {
  constructor(baseParams = {}) {
    // * передаем пустой обьект по умолчанию
    this.color = baseParams.color || 'transparent'; // * добавляем к значению имя обьекта, который собирает все параметры вверху
    this.model = baseParams.model;
    this.year = baseParams.year || currentYear;
    this.country = baseParams.country;
  }

  howOld() {
    console.log(`This IPhone is ${currentYear - this.year} years old`);
  }
}

// * передаем обьект с ключами и значениями
const myIPhone = new iPhone({
  color: 'white',
  model: '12 Pro',
  year: '2020',
  country: 'USA',
});

console.log(myIPhone);

// ! чайлд-айфон
class isNewIPhone extends iPhone {
  constructor(baseParams = {}) {
    super(baseParams);
    this.isNew = baseParams.isNew;
  }
}

const somePhone = new isNewIPhone({
  model: '10 Pro',
  year: '2019',
  country: 'Korea',
  isNew: false,
});

console.log(somePhone);
