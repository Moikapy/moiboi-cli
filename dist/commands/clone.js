"use strict";

var _require = require('../helpers/githubRequest'),
    renameProjectJson = _require.renameProjectJson,
    fetchRepositories = _require.fetchRepositories,
    fetchRepoNames = _require.fetchRepoNames;

var readlineSync = require('readline-sync');

var exec = require('child_process').exec;

var rimraf = require('rimraf');

var cloneCommand = function cloneCommand(repositoryName, projectDirectory, isGlobal) {
  var fetch = isGlobal ? fetchRepoNames : fetchRepositories;
  fetch().then(function (repositories) {
    var targetRepository = repositories.filter(function (repository) {
      return repository.includes(repositoryName);
    })[0];
    var targetDirectory = projectDirectory === '.' || !projectDirectory ? "".concat(process.cwd()) : "".concat(process.cwd(), "/").concat(projectDirectory);

    if (!targetRepository) {
      console.log("Moiboi \uD83E\uDD8A   couldn't find ".concat(repositoryName, " \uD83D\uDE05"));
    } else {
      console.log('Your Choice => ');
      console.log("Repository: ".concat(targetRepository));
      console.log("Directory: ".concat(targetDirectory));
      console.log('\n');
      var answer = readlineSync.question("Your Project will be created Moiboi. Is that ok? (Y/n)  ");
      console.log('\n');

      if (answer === 'y') {
        var firstGitCommand, cloneGitCommand;
        exec("git --version", function (err, stdout, stderr) {
          if (err) return console.log("You must install 'git' in advance \uD83E\uDD13.");
          exec("git clone https://github.com/".concat(targetRepository, " ").concat(targetDirectory), function (err, stdout, stderr) {
            if (err) return console.log("Moiboi \uD83E\uDD8A   has failed to clone the repository: ".concat(stderr, " \uD83D\uDE22"));
            rimraf("".concat(targetDirectory, "/.git"), function (err) {
              if (err) return console.log("Moiboi \uD83E\uDD8A   failed to remove exsiting git files \uD83D\uDE22  : ".concat(stderr));
            });
            renameProjectJson(targetDirectory, projectDirectory);
          });
        });
      }
    }
  });
};

module.exports = cloneCommand;