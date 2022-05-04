// ! Напиши клас, що описує маркер.! У класі повинні бути такі компоненти:

// ! - поле, яке зберігає колір маркера;
// ! - поле, яке зберігає кількість чорнил у маркері (у відсотках);
// ! - метод для вводу (приймає рядок і виводить текст відповідним кольором;
// ! текст виводиться до тих пір, поки в маркері є чорнило;
// ! один не пробільний символ — це 0,5% чорнил у маркері).

// ! Реалізуй клас, що описує маркер, який можна перезаправляти.
// ! Успадкуй цей клас від простого маркера і додай метод для заправки.

// ! Продемонструй роботу написаних методів.

const userInput = prompt(
  `Напишіть будь-яку фразу. Майте на увазі кількість чорнил.`
);

const BLACK = '#000';
const RED = '#FF0000';
const GREEN = '#00ff00';

// ! Рабочий вариант

class Marker {
  constructor(color, fullness) {
    this._color = color || BLACK;
    this._fullness = fullness || 100;
  }

  writeColouredPhrase(phrase) {
    const lettersArray = phrase.split('');
    const resultPhrase = [];

    for (const letter of lettersArray) {
      if (letter !== ' ') {
        this._fullness = this._fullness - 0.5;
      }

      resultPhrase.push(letter);

      if (this._fullness === 0) {
        break;
      }
    }
    console.log(`%c${resultPhrase.join('')}`, `color: ${this._color}`);
  }
}

const maxMarker = new Marker(GREEN, 100);
maxMarker.writeColouredPhrase(userInput);
console.log(maxMarker._fullness);

// ! superMarker

class SuperMarker extends Marker {
  constructor(color, fullness) {
    super(color, fullness);
  }
  // ! вместо сеттера и геттера, через метод-функцию
  // setFullness(newFullness) {
  //   this._fullness = newFullness;
  // }

  // getFullnesss() {
  //   return this._fullness;
  // }
  // ! вместо сеттера и геттера, через метод-функцию

  set fullness(newFullness) {
    if (newFullness <= 100 && newFullness > 0.5) {
      this._fullness = newFullness;
    }
  }

  get fullness() {
    return this._fullness;
  }
}

const superMaxMarker = new SuperMarker(RED, 50);

// superMaxMarker.fullness = 0; // ! засетить значение

// ! вместо сеттера и геттера, через метод-функцию
// superMaxMarker.setFullness(30);
// console.log(superMaxMarker.getFullnesss());
