import axios from 'axios'

class Api {
  static async getUserInfo(username) {
    try {
      const baseUrl = `https://api.github.com/users/${username}`
      const response = await axios.get(baseUrl)
      console.log(response.data)
    } catch (err) {
      console.warn(err)
    }
  }
}

Api.getUserInfo('olurking')

// ------------------------------

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
  await delay();
  console.log('1s');

  await delay();
  console.log('2s');

  await delay();
  console.log('3s');
}

umPorSegundo();

// ------------------------------


async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`)
    console.log(response.data);
  } catch(err) {
    console.log('Usuário não existe');
  }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

// ------------------------------

class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`)
      console.log(response.data);
    } catch (err) {
      console.log('Repositório não existe');
    }
  }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

// ------------------------------

const buscaUsuario = async usuario => {
  try {
    response = await axios.get(`https://api.github.com/users/${user}`)
    console.log(response.data);
  } catch (err) {
    console.log('Usuário não existe');
  }
}

buscaUsuario('diego3g');
