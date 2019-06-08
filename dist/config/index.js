"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CONFIG_PATH = "".concat(__dirname, "/config.json");

var get = function get() {
  try {
    var json = _fs["default"].readFileSync(CONFIG_PATH);

    return JSON.parse(json);
  } catch (err) {
    return {};
  }
};

var update = function update(updatedConfig) {
  _fs["default"].writeFileSync(CONFIG_PATH, JSON.stringify(updatedConfig));
};

var isExistingAuthor = function isExistingAuthor(author) {
  var authors = get()['authors'] || [];
  var sameAuthors = authors.filter(function (thisAuthor) {
    return thisAuthor === author;
  });

  if (sameAuthors.length === 0) {
    return false;
  } else {
    return true;
  }
};

var _default = {
  get: get,
  update: update,
  isExistingAuthor: isExistingAuthor
};
exports["default"] = _default;