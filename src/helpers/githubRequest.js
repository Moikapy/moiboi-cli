const axios = require('axios');
const config = require('../config');

const APP_NAME = 'boilerplate-cli';
const DEFAULT_AUTHOR = 'keidurn';
const PAGE_LIMIT = 100;

const getFetchURLs = () => {
  const authors = config.get().authors || [DEFAULT_AUTHOR];
  return authors.map(author => {
    return `https://api.github.com/users/${author}/repos?per_page=${PAGE_LIMIT}`;
  });
};

const fetchBoilerplates = () => {
  const urls = getFetchURLs();

  return Promise.all(
    urls.map(url => {
      return axios.get(url).then(res => {
        return res.data
          .filter(
            item =>
              item.name.includes('boilerplate') && !item.name.includes(APP_NAME)
          )
          .map(item => item.full_name);
      });
    })
  ).then(arrayList => {
    return Promise.resolve(
      arrayList.reduce((preArray, array) => {
        return preArray.concat(array);
      })
    );
  });
};

const isExistingUser = user => {
  return axios
    .get(`https://api.github.com/users/${user}`)
    .then(res => {
      return true;
    })
    .catch(err => {
      return false;
    });
};

module.exports = { fetchBoilerplates, isExistingUser };
