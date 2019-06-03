"use strict";

var opener = require('opener');

var _require = require('../helpers/githubRequest'),
    fetchRepositories = _require.fetchRepositories,
    isExistingRepo = _require.isExistingRepo;

var homeCommand = function homeCommand(authorAndRepository) {
  if (authorAndRepository === 'moikapy/moiboi-cli') {
    var url = "https://github.com/".concat(authorAndRepository);
    return opener(url, function (err, stdout, stderr) {
      if (err) return console.log("Moiboi \uD83E\uDD8A   failed to open the repository \uD83D\uDE22: ".concat(url));
    });
  }

  var args = authorAndRepository.split('/');

  if (args.length !== 2) {
    return console.log("Argument is wrong \uD83D\uDC4E: ".concat(authorAndRepository));
  }

  isExistingRepo(args[0], args[1]).then(function (isExisted) {
    if (isExisted) {
      var _url = "https://github.com/".concat(authorAndRepository);

      opener(_url, function (err, stdout, stderr) {
        if (err) return console.log("Moiboi \uD83E\uDD8A   failed to open the repository \uD83D\uDE22: ".concat(_url));
      });
    } else {
      return console.log("Moiboi \uD83E\uDD8A   couldn't find the repository \uD83D\uDE05: ".concat(authorAndRepository));
    }
  });
};

module.exports = homeCommand;