"use strict";

var _require = require('../helpers/githubRequest'),
    fetchRepositories = _require.fetchRepositories;

var _require2 = require('../helpers/formattedConsole'),
    showItems = _require2.showItems;

var listCommand = function listCommand() {
  fetchRepositories().then(function (repositories) {
    console.log('✔ Available Repositiries ✔');
    showItems(repositories);
  });
};

module.exports = listCommand;