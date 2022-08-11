// Spread

const dados = {
  empresa: "rocketseat",
  endereco: {
    rua: "Al. Bela Aliança",
    num: "775",
  },
};

// Com spread
const user1 = { nome: "Renata", ...dados };
const user2 = { nome: "Maria", ...dados };

// Sem spread
// const user1 = {
//   nome: "Diego",
//   empresa: dados.empresa,
//   endereco: dados.endereco,
// };

// const user2 = {
//   nome: "Robson",
//   empresa: dados.empresa,
//   endereco: dados.endereco,
// };
