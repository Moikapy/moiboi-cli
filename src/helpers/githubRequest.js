const axios = require('axios')
var fs = require('fs')
const config = require('../config')

const APP_NAME = 'moiboi-cli'
const DEFAULT_AUTHOR = 'moikapy'
const PAGE_LIMIT = 100

const _getFetchURLs = () => {
  const authors = config.get().authors || [DEFAULT_AUTHOR]
  return authors.map(author => {
    return `https://api.github.com/users/${author}/repos?per_page=${PAGE_LIMIT}`
  })
}

const fetchRepositories = () => {
  const urls = _getFetchURLs()

  return Promise.all(
    urls.map(url => {
      return axios.get(url).then(res => {
        return res.data
          .filter(item => !item.name.includes(APP_NAME))
          .map(item => item.full_name)
      })
    }),
  ).then(arrayList => {
    return Promise.resolve(
      arrayList.reduce((preArray, array) => {
        return preArray.concat(array)
      }),
    )
  })
}

const fetchRepoNames = keyword => {
  const keywordParam = keyword ? `+${keyword}` : ''

  return axios
    .get(
      `https://api.github.com/search/repositories?q=${keywordParam}&sort=stars`,
    )
    .then(res => {
      return res.data.items.map(item => item.full_name)
    })
}

const isExistingUser = user => {
  return axios
    .get(`https://api.github.com/users/${user}`)
    .then(res => {
      return true
    })
    .catch(err => {
      return false
    })
}

const isExistingRepo = (user, repo) => {
  return axios
    .get(`https://github.com/${user}/${repo}`)
    .then(res => {
      return true
    })
    .catch(err => {
      return false
    })
}

const renameProjectJson = async (targetDirectory, projectDirectory) => {
  try {
    var fileName = `${targetDirectory}/package.json`
    var file = require(fileName)

    if (fileName !== null || fileName !== undefined) {
      if ('../' == projectDirectory.substr(0, 3)) {
        const folder = projectDirectory.substr(3)
        file.name = `${folder}`
        fs.writeFile(fileName, JSON.stringify(file, null, 2), function(err) {
          if (err) return console.log(err)
          JSON.stringify(file)
          console.log('\n')
        })
      } else {
        file.name = `${projectDirectory}`
        fs.writeFile(fileName, JSON.stringify(file, null, 2), function(err) {
          if (err) return console.log(err)
          JSON.stringify(file)
          console.log('\n')
        })
      }
      console.log('The Project was created by 🦊   Moiboi!! 🔥  🎉')
    }
  } catch (error) {
    console.log('\n')
    console.log('The Project was created by 🦊   Moiboi!! 🔥  🎉')
  }
}

module.exports = {
  renameProjectJson,
  fetchRepositories,
  fetchRepoNames,
  isExistingUser,
  isExistingRepo,
}
