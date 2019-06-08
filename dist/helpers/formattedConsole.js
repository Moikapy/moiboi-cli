"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var showItems = function showItems(items) {
  items.forEach(function (item) {
    console.log(item);
  });
  console.log("Total: ".concat(items.length, " \uD83D\uDE0E"));
};

var _default = showItems;
exports["default"] = _default;