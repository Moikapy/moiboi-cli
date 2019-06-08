"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../config"));

var _githubRequest = require("../helpers/githubRequest");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addCommand = function addCommand(author) {
  (0, _githubRequest.isExistingUser)(author).then(function (isExisted) {
    if (isExisted) {
      var newConfig = _config["default"].get();

      if (!newConfig['authors']) {
        newConfig['authors'] = [author];
      } else {
        if (!_config["default"].isExistingAuthor(author)) {
          newConfig['authors'].push(author);
        }
      }

      _config["default"].update(newConfig);

      console.log("Added ".concat(author, " \uD83C\uDF89"));
    } else {
      console.log("This User doesn't exist \uD83D\uDE05: ".concat(author));
      console.log("Please Try another User \uD83D\uDC31\u200D\uD83D\uDCBB");
    }
  });
};

var _default = addCommand;
exports["default"] = _default;