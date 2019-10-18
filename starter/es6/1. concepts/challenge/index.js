class Usuario {
  constructor(email, psswd) {
    this.email = email;
    this.psswd = psswd;
    this.admin = false;
  }

  isAdmin() {
    return this.admin;
  }
}

class Admin extends Usuario {
  constructor() {
    super();
    this.admin = true;
  }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin())
console.log(Adm1.isAdmin())

//------------------------------

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map((user) => user.idade)

const rocketseatEmployees = usuarios.filter((user) => user.empresa === 'Rocketseat' && user.idade >= 18);

const googleEmployee = usuarios.find((user) => user.empresa === 'Google')

const multipleOperation = usuarios.reduce((acc, user) => {
  user.idade *= 2;

  if (user.idade <= 50) {
    acc.push(user);
  }

  return acc;
}, [])

//------------------------------

var arr = [1, 2, 3, 4, 5];

arr.map(item => item + 10) 

// ----

var usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => usuario.idade; 

mostraIdade(usuario);

// ----

var nome = "Diego";
var idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade }) 

mostraUsuario(nome, idade);
mostraUsuario(nome);

// ----

const promise = function() {
  return new Promise((resolve, reject) => resolve())
}

//------------------------------

const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
};

var { nome, endereco: { cidade, estado }} = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

// ------------------------------

function mostraInfo({ nome, idade}) {
  return `${nome} tem ${idade} anos.`;
}

mostraInfo({ nome: 'Diego', idade: 23 })

// ------------------------------

var arr = [1, 2, 3, 4, 5, 6]
const [x, ...y] = arr

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

const soma = (...numbers) => {
  return numbers.reduce((acc, num) => {
    return acc + num;
  }, 0)
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

// ------------------------------

var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};

const usuario2 = {...usuario, nome: 'Gabriel'}
const usuario3 = {...usuario, endereco: { ...usuario.endereco, cidade: 'Lontras' }}

// ------------------------------

var usuario = 'Diego';
var idade = 23;

console.log(`O usuário ${usuario} possui ${idade} anos`);

// -------------------------------

var nome = 'Diego';
var idade = 23;

var usuario = {
  nome,
  idade,
  cidade: 'Rio do Sul',
};
