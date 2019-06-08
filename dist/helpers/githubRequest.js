"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isExistingRepo = exports.isExistingUser = exports.fetchRepoNames = exports.fetchRepositories = exports.renameProjectJson = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _fs = _interopRequireDefault(require("fs"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var APP_NAME = 'moiboi-cli';
var DEFAULT_AUTHOR = 'moikapy';
var PAGE_LIMIT = 100;

var _getFetchURLs = function _getFetchURLs() {
  var authors = _config["default"].get().authors || [DEFAULT_AUTHOR];
  return authors.map(function (author) {
    return "https://api.github.com/users/".concat(author, "/repos?per_page=").concat(PAGE_LIMIT);
  });
};

var fetchRepositories = function fetchRepositories() {
  var urls = _getFetchURLs();

  return Promise.all(urls.map(function (url) {
    return _axios["default"].get(url).then(function (res) {
      return res.data.filter(function (item) {
        return !item.name.includes(APP_NAME);
      }).map(function (item) {
        return item.full_name;
      });
    });
  })).then(function (arrayList) {
    return Promise.resolve(arrayList.reduce(function (preArray, array) {
      return preArray.concat(array);
    }));
  });
};

exports.fetchRepositories = fetchRepositories;

var fetchRepoNames = function fetchRepoNames(keyword) {
  var keywordParam = keyword ? "+".concat(keyword) : '';
  return _axios["default"].get("https://api.github.com/search/repositories?q=".concat(keywordParam, "&sort=stars")).then(function (res) {
    return res.data.items.map(function (item) {
      return item.full_name;
    });
  });
};

exports.fetchRepoNames = fetchRepoNames;

var isExistingUser = function isExistingUser(user) {
  return _axios["default"].get("https://api.github.com/users/".concat(user)).then(function (res) {
    return true;
  })["catch"](function (err) {
    return false;
  });
};

exports.isExistingUser = isExistingUser;

var isExistingRepo = function isExistingRepo(user, repo) {
  return _axios["default"].get("https://github.com/".concat(user, "/").concat(repo)).then(function (res) {
    return true;
  })["catch"](function (err) {
    return false;
  });
};

exports.isExistingRepo = isExistingRepo;

var renameProjectJson =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(targetDirectory, projectDirectory) {
    var fileName, file, folder;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              fileName = "".concat(targetDirectory, "/package.json");
              file = require(fileName);

              if (fileName !== null || fileName !== undefined) {
                if ('../' == projectDirectory.substr(0, 3)) {
                  folder = projectDirectory.substr(3);
                  file.name = "".concat(folder);

                  _fs["default"].writeFile(fileName, JSON.stringify(file, null, 2), function (err) {
                    if (err) return console.log(err);
                    JSON.stringify(file);
                    console.log('\n');
                  });
                } else {
                  file.name = "".concat(projectDirectory);

                  _fs["default"].writeFile(fileName, JSON.stringify(file, null, 2), function (err) {
                    if (err) return console.log(err);
                    JSON.stringify(file);
                    console.log('\n');
                  });
                }

                console.log('The Project was created by 🦊   Moiboi!! 🔥  🎉');
              }
            } catch (error) {
              console.log('\n');
              console.log('The Project was created by 🦊   Moiboi!! 🔥  🎉');
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function renameProjectJson(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.renameProjectJson = renameProjectJson;