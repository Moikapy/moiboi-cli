const { fetchRepositories } = require('../helpers/githubRequest')
const { showItems } = require('../helpers/formattedConsole')

const listCommand = () => {
  fetchRepositories().then(repositories => {
    console.log('✔ Available Repositiries ✔')
    showItems(repositories)
  })
}

export default listCommand
