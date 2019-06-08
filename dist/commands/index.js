"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _add = _interopRequireDefault(require("./add"));

var _authors = _interopRequireDefault(require("./authors"));

var _clone = _interopRequireDefault(require("./clone"));

var _home = _interopRequireDefault(require("./home"));

var _list = _interopRequireDefault(require("./list"));

var _remove = _interopRequireDefault(require("./remove"));

var _reset = _interopRequireDefault(require("./reset"));

var _search = _interopRequireDefault(require("./search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var _default = {
  add: _add["default"],
  authors: _authors["default"],
  clone: _clone["default"],
  home: _home["default"],
  list: _list["default"],
  remove: _remove["default"],
  reset: _reset["default"],
  search: _search["default"]
};
exports["default"] = _default;