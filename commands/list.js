const axios = require('axios');
const config = require('../config');

const APP_NAME = 'boilerplate-cli';
const DEFAULT_AUTHOR = 'keidurn';
const PAGE_LIMIT = 100;

const author = 'keidrun';

const showConsole = results => {
  results.forEach(item => {
    console.log(`${item.fullName}`);
  });
};

const getTargetURLs = () => {
  const authors = config.get().authors || [DEFAULT_AUTHOR];
  return authors.map(author => {
    return `https://api.github.com/users/${author}/repos?per_page=${PAGE_LIMIT}`;
  });
};

const listCommand = () => {
  const urls = getTargetURLs();

  urls.forEach(url => {
    axios.get(url).then(res => {
      const results = res.data
        .filter(
          item =>
            item.name.includes('boilerplate') && !item.name.includes(APP_NAME)
        )
        .map(item => {
          return {
            fullName: item.full_name
          };
        });
      showConsole(results);
    });
  });
};

module.exports = listCommand;
