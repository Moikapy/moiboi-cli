import {fetchRepositories}from'../helpers/githubRequest'
import showItems from '../helpers/formattedConsole'
const listCommand = () => {
  fetchRepositories().then(repositories => {
    console.log('✔ Available Repositiries ✔')
    showItems(repositories)
  })
}

export default listCommand
