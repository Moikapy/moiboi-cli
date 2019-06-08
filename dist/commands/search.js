"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _githubRequest = require("../helpers/githubRequest");

var _formattedConsole = _interopRequireDefault(require("../helpers/formattedConsole"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var searchCommand = function searchCommand(keyword, isGlobal) {
  if (!keyword) return console.log('A keyword is missing... 😅');
  console.log('🔎 Search Results 🔍');

  if (isGlobal) {
    (0, _githubRequest.fetchRepoNames)(keyword).then(function (repos) {
      (0, _formattedConsole["default"])(repos);
    });
  } else {
    (0, _githubRequest.fetchRepositories)().then(function (repositories) {
      var items = repositories.filter(function (repository) {
        return repository.includes(keyword);
      });
      (0, _formattedConsole["default"])(items);
    });
  }
};

var _default = searchCommand;
exports["default"] = _default;