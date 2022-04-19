// ! Интродакшн

alert('Готові до швидкої JS подорожі?');

// ! Имя

let userName = prompt('Як тебе звуть, незнайомцю?', "Введи своє ім'я");

alert(`Привіт та раді вітати, ${userName}!`);

// ! Дата рождения - работает правильно
while (true) {
  let userBirthYear = prompt(
    'У якому році ти народився?',
    'Введи свій рік народження'
  );
  const CURRENT_YEAR = 2022;
  userBirthYear = parseInt(userBirthYear); // ? Тут условно происходит преобразование в число без символов после точки

  if (
    // ? Условие IF, потом открывается группа проверок:
    !isNaN(userBirthYear) && // ? Чтобы перемення userBirthYear была number ("!" обратило проверку isNaN в проверку "не NaN", то есть number)
    isFinite(userBirthYear) && // ? Чтобы вводилось скончаемое userBirthYear
    userBirthYear > 1900 && // ? Чтобы перемення  userBirthYear была больше 1990
    userBirthYear <= CURRENT_YEAR // ? Чтобы перемення  userBirthYear была меньше или равна CURRENT_YEAR
  ) {
    alert(`Тобі ${CURRENT_YEAR - userBirthYear} років!`); // ? Тут в скобках ${} происходит вычисление, повернутые кавычки нужны, чтобы можно было вписать вычесление в ${}. А также минус еще раз приображает второй элемент в number, если он совпадает с number.
    break; // ? break остановит тут работу кода и выкинет нас за скобки вниз, не будет трогать код else
  }
  // ? Условие else, какую часть кода выполнить, если все проверки в if не пройдут.
  else {
    alert(
      'Можна вводити тільки числові значення: більше 1990 року народження та не менше 2022 року. Спробуй знову!'
    );
  }
}

// ! Периметр - работает правильно

while (true) {
  let squareSide = prompt(
    'Введи довижу сторони квадрату, а я порахую тобі периметр :)',
    'наприклад 7'
  );

  if (
    !isNaN(parseFloat(squareSide)) &&
    isFinite(squareSide) &&
    squareSide > 0
  ) {
    alert(+squareSide * 4);
    break;
  } else {
    alert(
      'Периметр можна рахувати тільки з цілих чисел, а не літер.Спробуй знову!'
    );
  }
}

// ! Радиус - работает правильно

while (true) {
  let circleRadius = prompt(
    'Введи радіус кола, а я порахую тобі площу :)',
    'наприклад 7'
  );

  if (!isNaN(circleRadius) && isFinite(circleRadius) && circleRadius > 0) {
    alert((Math.PI * Math.pow(circleRadius, 2)).toFixed(2));
    break;
  } else {
    alert('Площу можна рахувати тільки з чисел, а не літер. Спробуй знову!');
  }
}

// ! Конвертор валют
while (true) {
  let userDollars = prompt('Скільки доларів ти хочешь перевести в євро?', 'вш');
  const EURO_RATE = 0.93;
  userDollars = parseInt(userDollars);

  if (!isNaN(userDollars) && isFinite(userDollars) && userDollars > 0) {
    alert(
      `У вас ${
        EURO_RATE * userDollars
      } євро! Увага, конвертувалися тільки цілі долари. Ми не конвертуємо центи.`
    );
    break;
  } else {
    alert(
      'Увага: Не можна вводити значення літерами, тільки цифрами. Спробуйте знову!'
    );
  }
}
