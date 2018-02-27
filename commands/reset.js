const config = require('../config');
const readlineSync = require('readline-sync');

const DEFAULT_JSON = {
  authors: ['keidrun']
};

const resetCommand = () => {
  const answer = readlineSync.question(
    'All configurations will be resetted. Is it ok? (y/n) > '
  );
  console.log(answer);
  if (answer === 'y') {
    config.update(DEFAULT_JSON);
    console.log('All configurations were resetted.');
  }
};

module.exports = resetCommand;
