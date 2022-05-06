// ! TODO: сделать так, чтобы корзину не уносило :-(

// ! Consts

const DOM = document;
const input = DOM.getElementsByClassName('js-todo-input')[0];
const todoList = DOM.getElementsByClassName('js-todo-list')[0];
const todoItem = DOM.getElementsByClassName('js-todo-item')[0];
const inputButton = DOM.getElementsByClassName('js-todo-button')[0];
const deleteIcon = DOM.getElementsByClassName('material-symbols-outlined')[0];
// const inputButton = DOM.getElementById('js-todo-button'); // ? достать по айди, но элемент будет статичным, не живым

// ! Styles

// ? (вариант 1) забрать ul стили через класс списка
document.getElementById('js-todo-list').style.listStyleType = 'none';

// ? (вариант 2) забрать каждой li стили через селектор li или ul
// const liItems = document.querySelectorAll('li');
// for (const item of liItems) {
//   item.style.listStyleType = 'none';
// }

// ! Functions

const сheckSpaces = (str) => str.trim() !== ''; // ? проверка на ввод нескольких пробелов

const addNewTask = () => {
  inputValue = input.value;

  if (inputValue && сheckSpaces(inputValue)) {
    if (inputValue.length < 100) {
      const newItem = DOM.createElement('li');
      const newDeleteIcon = DOM.createElement('deleteIcon');

      newItem.classList.add(
        'todo__item',
        'animate__animated',
        'animate__fadeInDown'
      );
      newDeleteIcon.classList.add('material-symbols-outlined');

      newItem.innerText = inputValue;
      newDeleteIcon.innerHTML =
        '<span class="material-symbols-outlined"> delete </span>';

      // newItem.addEventListener('click', () => newItem.remove()); // ? удаление через нажатие на всю строку
      newDeleteIcon.addEventListener('click', () => newItem.remove()); // ? удаление через нажатие на корзину

      todoList.appendChild(newItem);
      newItem.appendChild(newDeleteIcon);

      input.value = ''; // ! РАБОТАЕТ
      // inputValue = '';  // ! НЕ РАБОТАЕТ
    } else {
      alert('Try to make the task shorter :)');
    }
  }
};

// ! Work start

inputButton.addEventListener('click', addNewTask); // ? Cannot access 'addnewItem' before initialization

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    addNewTask();
  }
});
