"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _opener = _interopRequireDefault(require("opener"));

var _githubRequest = require("../helpers/githubRequest");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var homeCommand = function homeCommand(authorAndRepository) {
  if (authorAndRepository === 'moikapy/moiboi-cli') {
    var url = "https://github.com/".concat(authorAndRepository);
    return (0, _opener["default"])(url, function (err, stdout, stderr) {
      if (err) return console.log("Moiboi \uD83E\uDD8A   has failed to open the repository \uD83D\uDE22: ".concat(url));
    });
  }

  var args = authorAndRepository.split('/');

  if (args.length !== 2) {
    return console.log("Argument is wrong \uD83D\uDC4E: ".concat(authorAndRepository));
  }

  (0, _githubRequest.isExistingRepo)(args[0], args[1]).then(function (isExisted) {
    if (isExisted) {
      var _url = "https://github.com/".concat(authorAndRepository);

      (0, _opener["default"])(_url, function (err, stdout, stderr) {
        if (err) return console.log("Moiboi \uD83E\uDD8A   has failed to open the repository \uD83D\uDE22: ".concat(_url));
      });
    } else {
      return console.log("Moiboi \uD83E\uDD8A   couldn't find the repository \uD83D\uDE05: ".concat(authorAndRepository));
    }
  });
};

var _default = homeCommand;
exports["default"] = _default;