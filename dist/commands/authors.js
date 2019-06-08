"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var authorsCommand = function authorsCommand() {
  var authors = _config["default"].get()['authors'] || [];
  console.log('📚  Authors 📚');
  authors.forEach(function (item) {
    console.log('🦑 ', item);
  });
};

var _default = authorsCommand;
exports["default"] = _default;