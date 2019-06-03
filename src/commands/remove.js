const config = require('../config')

const removeCommand = author => {
  if (config.isExistingAuthor(author)) {
    let newConfig = config.get()
    const newAuthors = newConfig['authors'].filter(
      thisAuthor => thisAuthor !== author,
    )
    newConfig['authors'] = newAuthors
    config.update(newConfig)
    console.log(`Removed ${author} 💔`)
  }
}

module.exports = removeCommand
