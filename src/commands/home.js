import opener from 'opener'
import { isExistingRepo } from '../helpers/githubRequest'

const homeCommand = authorAndRepository => {
  if (authorAndRepository === 'moikapy/moiboi-cli') {
    const url = `https://github.com/${authorAndRepository}`
    return opener(url, (err, stdout, stderr) => {
      if (err)
        return console.log(
          `Moiboi 🦊   failed to open the repository 😢: ${url}`,
        )
    })
  }

  const args = authorAndRepository.split('/')
  if (args.length !== 2) {
    return console.log(`Argument is wrong 👎: ${authorAndRepository}`)
  }

  isExistingRepo(args[0], args[1]).then(isExisted => {
    if (isExisted) {
      const url = `https://github.com/${authorAndRepository}`
      opener(url, (err, stdout, stderr) => {
        if (err)
          return console.log(
            `Moiboi 🦊   failed to open the repository 😢: ${url}`,
          )
      })
    } else {
      return console.log(
        `Moiboi 🦊   couldn't find the repository 😅: ${authorAndRepository}`,
      )
    }
  })
}

export default homeCommand
