// ! Переменные
const DOM = document;
let colIndex = -1; // ? wtf

// ! Переменные для кликов
let table = DOM.getElementById('js-table');

// ! Функция сортировки
function sortTable(index, type, isSorted) {
  const tbody = DOM.querySelector('tbody');

  function compare(a, b) {
    const dataA = a.cells[index].innerHTML; // ? как именно происходит обращение?
    const dataB = b.cells[index].innerHTML;

    switch (type) {
      case 'integer':
        return dataA - dataB;
      // ? почему просто не сортирует по методу сорт?
      case 'text':
        if (dataA < dataB) {
          return -1;
        } else {
          return 1;
        }
    }
  }

  let rows = [].slice.call(tbody.rows);

  rows.sort(compare); // ? мы передаем функцию в функцию?

  if (isSorted) rows.reverse(); // ? wtf

  // ! LocalStorage - чтобы р-тат сортировки сохранялся после перезагрузки - НЕ РАБОТАЕТ - to ask
  // const sortedTable = JSON.stringify(rows); // ? превращаем в строку
  // localStorage.setItem('sortedColumn', sortedTable); // ? записываем строку в LS
  // table = localStorage.getItem(JSON.parse(sortedTable)); // ? распарсили данные из LS и записали их

  // ! Продолжение f
  table.removeChild(tbody); // ? Cannot read properties of null (т.е. на 38 строке я записываю пустоту7)

  for (let i = 0; i < rows.length; i++) {
    tbody.appendChild(rows[i]);
  }

  table.appendChild(tbody);
}

// ! Запуск сортировки по клику
table.addEventListener('click', (e) => {
  const el = e.target;

  if (el.nodeName === 'TH') {
  } else {
    return;
  }

  const index = el.cellIndex;
  const type = el.getAttribute('data-type');

  sortTable(index, type, colIndex === index);
  colIndex = colIndex === index ? -1 : index; // ? wtf
});
