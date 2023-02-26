let count = 0; // рахунок
let counter = 0; // натискання
let score = document.getElementById("count");
let color = document.getElementById("color");
let colors = document.querySelectorAll(".guess");
let backgrounds = [  "forestgreen",  "olivedrab",  "turquoise",  "steelblue",  "darkviolet",  "indigo",  "slategray",  "goldenrod",  "maroon",  "tomato",  "crimson",  "khaki",];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function newRound() {
  shuffle(backgrounds); 
  color.innerText = backgrounds[0]; 
  setColors(); 
}

function setColors() {
  for (let i = 0; i < colors.length; i++) {
    colors[i].style.background = backgrounds[i];
  }
}

newRound(); 

for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", check);
}

function check() {
  counter++;
  console.log(counter);

  if (this.style.background === color.innerText) {
    count++;
    score.innerText = count;
  } else {
    console.log("Wrong guess");
  }

  if (counter === 12) {
    alert(count);
    location.reload(); 
  } else {
    newRound(); 
  }
}
