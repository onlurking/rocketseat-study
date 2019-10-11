var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

const message = `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}.`

console.log(message);

//----------------------------------

function pares(x, y) {
  var even = [];
  for (x; x <= y; x++) {
      if (x%2 === 0){
        even.push(x);
      }
  }

  return even;
}

console.log(pares(32, 321);

//----------------------------------

function temHabilidade(skills) {
  return skills.includes('Javascript');
}

var skills = ["Javascript", "ReactJS", "React Native"];

console.log(temHabilidade(skills));

//----------------------------------

var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];


for(user of usuarios){
  console.log(`O ${user.nome} possui as habilidades: ${user.habilidades.join(', ')}`)
}
