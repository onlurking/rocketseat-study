function checaIdade(idade) {
  return new Promise((resolve, reject) => {
    const maior = idade >= 18;
    setTimeout(() => {
      if (maior === true) {
        resolve();
      } else {
        reject();
      }
    }, 2000)
  })
}

checaIdade(20)
  .then(function() {
    console.log("Maior que 18");
  })
  .catch(function() {
    console.log("Menor que 18");
  });

//------------------------------

const axios = require('axios').default;

const userInput = document.querySelector('input[name="user"]')
const submitButton = document.querySelector('button')
const resultList = document.querySelector('ul')

function createListItem(name) {
  const listItem = document.createElement('li');
  listItem.textContent = name;

  resultList.appendChild(listItem);
}

function getRepos() {
  resultList.innerHTML = 'Carregando...';

  axios.get(`https://api.github.com/users/${user}/repos`)
    .then(function (response) {
      const repos = response.data;

      resultList.innerHTML = '';

      for(repo of repos){
        createListItem(repo.name);
      }
    })
    .catch(function (error) {
      resultList.innerHTML = 'Usuário não encontrado';
      console.log(error);
    })
}

submitButton.onclick = function() {
  user = userInput.value;
  getRepos();
}
