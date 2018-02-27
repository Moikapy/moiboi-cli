const config = require('../config');

const tapsCommand = () => {
  const authors = config.get()['authors'] || [];

  console.log('### Authors ###');
  authors.forEach(item => {
    console.log(item);
  });
};

module.exports = tapsCommand;
