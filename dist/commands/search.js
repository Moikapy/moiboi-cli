"use strict";

var _require = require('../helpers/githubRequest'),
    fetchRepositories = _require.fetchRepositories,
    fetchRepoNames = _require.fetchRepoNames;

var _require2 = require('../helpers/formattedConsole'),
    showItems = _require2.showItems;

var searchCommand = function searchCommand(keyword, isGlobal) {
  if (!keyword) return console.log('A keyword is missing... 😅');
  console.log('🔎 Search Results 🔍');

  if (isGlobal) {
    fetchRepoNames(keyword).then(function (repos) {
      showItems(repos);
    });
  } else {
    fetchRepositories().then(function (repositories) {
      var items = repositories.filter(function (repository) {
        return repository.includes(keyword);
      });
      showItems(items);
    });
  }
};

module.exports = searchCommand;