let count = 0; // рахунок
let counter = 0; // натискання
let score = document.getElementById("count");
let color = document.getElementById("color");
let colors = document.querySelectorAll(".guess");
let backgrounds = [  "forestgreen",  "olivedrab",  "turquoise",  "steelblue",  "darkviolet",  "indigo",  "slategray",  "goldenrod",  "maroon",  "tomato",  "crimson",  "khaki",];

function shuffle(array) {
  // Функция перемешивает элементы массива в случайном порядке
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function newRound() {
  // Запускаем новый раунд
  shuffle(backgrounds); // Перемешиваем массив backgrounds
  color.innerText = backgrounds[0]; // Выбираем первый элемент массива как цвет, который нужно угадать
  setColors(); // Обновляем цвета кнопок
}

function setColors() {
  // Задаем цвета кнопкам из массива backgrounds
  for (let i = 0; i < colors.length; i++) {
    colors[i].style.background = backgrounds[i];
  }
}

newRound(); // Запускаем первый раунд

for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", check);
}

function check() {
  counter++;
  console.log(counter);

  if (this.style.background === color.innerText) {
    // Если правильно угадали цвет
    count++;
    score.innerText = count;
  } else {
    // Если неправильно угадали цвет
    console.log("Wrong guess");
  }

  if (counter === 12) {
    // Если закончились все раунды
    alert(count);
    location.reload(); // Перезагружаем страницу, чтобы начать заново
  } else {
    newRound(); // Запускаем новый раунд
  }
}