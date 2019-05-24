const config = require('../config');
const { isExistingUser } = require('../helpers/githubRequest');

const tapCommand = author => {
  isExistingUser(author).then(isExisted => {
    if (isExisted) {
      let newConfig = config.get();
      if (!newConfig['authors']) {
        newConfig['authors'] = [author];
      } else {
        if (!config.isExistingAuthor(author)) {
          newConfig['authors'].push(author);
        }
      }
      config.update(newConfig);
      console.log(`Added ${author} 🎉`);
    } else {
      console.log(`The author doesn't exist 😅: ${author}`);
    }
  });
};

module.exports = tapCommand;
