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
    alert('Периметр можна рахувати тільки з цілих чисел, а не літер. Бувай!');
  }
}
