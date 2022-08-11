// Desestruturação

const user = {
  nome: "Diego Fernandes",
  empresa: "RocketSeat",
  endereco: {
    rua: "Al. Bela Aliança",
    num: "775",
    cidade: "Rio do Sul",
  },
};

// Com Destruturação
const { nome, empresa } = user;
console.log(nome, empresa);
const {
  endereco: { rua, num, cidade },
} = user;
console.log(rua, num, cidade);

// Sem Destruturação
// const nome = user.nome;
// const empresa = user.empresa;
// const rua = user.endereco.rua;
// const num = user.endereco.num;
