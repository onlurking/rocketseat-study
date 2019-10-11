const exerciseButton = document.querySelector('.exercise__button');
const resultWrapper = document.querySelector('.result');

function getRandomColor() {
  var letters = "0123456789ABCDEF", color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

exerciseButton.onclick = () => {
  const exerciseBox = document.createElement('div');
  exerciseBox.className = 'result__box';
  
  exerciseBox.onmouseover = () => {
    exerciseBox.style.backgroundColor = getRandomColor();
  }

  resultWrapper.appendChild(exerciseBox);
}

// ----------------------------------------------------------------

const listWrapper = document.querySelector('.list');
const nomes = ["Diego", "Gabriel", "Lucas"];

function createListItem(name) {
  const listItem = document.createElement('li');
  listItem.textContent = name;

  listWrapper.appendChild(listItem);
}

for(nome of nomes){
  createListItem(nome);
}

// ----------------------------------------------------------------

const inputName = document.querySelector('input[name=nome]');
const submitName = document.querySelector('.submit__name');

submitName.onclick = function adicionar() {
    const listItem = document.createElement('li');
    listItem.textContent = inputName.value;
    inputName.value = "";

    listWrapper.appendChild(listItem);
}
