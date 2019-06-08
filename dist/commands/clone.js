"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _githubRequest = require("../helpers/githubRequest");

var _readlineSync = _interopRequireDefault(require("readline-sync"));

var _rimraf = _interopRequireDefault(require("rimraf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var exec = require('child_process').exec;

var cloneCommand = function cloneCommand(repositoryName, projectDirectory, isGlobal) {
  var fetch = isGlobal ? _githubRequest.fetchRepoNames : _githubRequest.fetchRepositories;
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

      var answer = _readlineSync["default"].question("Your Project will be created by Moiboi. Is that ok? (Y/n)  ");

      console.log('\n');

      if (answer === 'y') {
        var firstGitCommand, cloneGitCommand;
        exec("git --version", function (err, stdout, stderr) {
          if (err) return console.log("You must install 'git' in advance \uD83E\uDD13.");
          exec("git clone https://github.com/".concat(targetRepository, " ").concat(targetDirectory), function (err, stdout, stderr) {
            if (err) return console.log("Moiboi \uD83E\uDD8A   has failed to clone the repository: ".concat(stderr, " \uD83D\uDE22"));
            (0, _rimraf["default"])("".concat(targetDirectory, "/.git"), function (err) {
              if (err) return console.log("Moiboi \uD83E\uDD8A   has failed to remove exsiting git files \uD83D\uDE22  : ".concat(stderr));
            });
            (0, _githubRequest.renameProjectJson)(targetDirectory, projectDirectory);
          });
        });
      }
    }
  });
};

var _default = cloneCommand;
exports["default"] = _default;