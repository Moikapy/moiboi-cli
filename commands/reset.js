const config = require('../config');

const DEFAULT_JSON = {
  authors: ['keidrun']
};

const resetCommand = () => {
  config.update(DEFAULT_JSON);
};

module.exports = resetCommand;
