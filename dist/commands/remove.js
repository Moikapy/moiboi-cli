"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var removeCommand = function removeCommand(author) {
  if (_config["default"].isExistingAuthor(author)) {
    var newConfig = _config["default"].get();

    var newAuthors = newConfig['authors'].filter(function (thisAuthor) {
      return thisAuthor !== author;
    });
    newConfig['authors'] = newAuthors;

    _config["default"].update(newConfig);

    console.log("Removed ".concat(author, " \uD83D\uDC94"));
  }
};

var _default = removeCommand;
exports["default"] = _default;