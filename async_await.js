// Async/await

const input = document.querySelector("input");
const button = document.querySelector("button");

const getAPI = async () => {
  inputValue = input.value;

  try {
    const repos = await fetch(`https://api.github.com/users/${inputValue}`);
    const dados = await repos.json();
    const { login, name, avatar_url } = dados;

    const userDados = {
      login,
      name,
      avatar_url,
    };
    console.log(userDados);
    createDiv(name, login, avatar_url);
  } catch (erro) {
    console.log(erro);
  }
};

button.addEventListener("click", getAPI);

function createDiv(name, login, avatar) {
  const h3 = document.querySelector("h3");
  const img = document.createElement("img");

  img.src = avatar;
  h3.innerHTML = `Olá, ${name}! Seu usuário é ${login}`;
  console.log(h3);

  h3.appendChild(img);
}

// api.get('/users/diego3g').then(function(user) {
//   api.get('/repos/' + user.id).then(function(repos) => {
//     repos.forEach(function(item, index) {
//       console.log('Posição: ' + index + ': ' + item);
//     }),
//   });
// });
