const config = require('../config')
const readlineSync = require('readline-sync')

const DEFAULT_JSON = {
  authors: ['moikapy', 'nodegg'],
}

const resetCommand = () => {
  const answer = readlineSync.question(
    'Moiboi will reset all Configurations. Is it ok? (Y/n) ',
  )
  console.log(answer)
  if (answer === 'y') {
    config.update(DEFAULT_JSON)
    console.log('Moiboi 🦊   reset all Configurations  🐱‍🐉  🔥')
  }
}

export default resetCommand
