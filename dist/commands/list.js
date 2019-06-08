"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _githubRequest = require("../helpers/githubRequest");

var _formattedConsole = _interopRequireDefault(require("../helpers/formattedConsole"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var listCommand = function listCommand() {
  (0, _githubRequest.fetchRepositories)().then(function (repositories) {
    console.log('✔ Available Repositiries ✔');
    (0, _formattedConsole["default"])(repositories);
  });
};

var _default = listCommand;
exports["default"] = _default;