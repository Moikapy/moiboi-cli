"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../config"));

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DEFAULT_JSON = {
  authors: ['moikapy', 'nodegg']
};

var resetCommand = function resetCommand() {
  var answer = _readlineSync["default"].question('Moiboi will reset all Configurations. Is it ok? (Y/n) ');

  console.log(answer);

  if (answer === 'y') {
    _config["default"].update(DEFAULT_JSON);

    console.log('Moiboi 🦊   has reset all Configurations  🐱‍🐉  🔥');
  }
};

var _default = resetCommand;
exports["default"] = _default;