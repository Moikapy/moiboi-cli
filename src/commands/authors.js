const config = require('../config');

const authorsCommand = () => {
  const authors = config.get()['authors'] || [];

  console.log('📚  Authors 📚');
  authors.forEach(item => {
    console.log('🦑 ',item);
  });
};

module.exports = authorsCommand;
