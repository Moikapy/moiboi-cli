"use strict";

var showItems = function showItems(items) {
  items.forEach(function (item) {
    console.log(item);
  });
  console.log("Total: ".concat(items.length, " \uD83D\uDE0E"));
};

module.exports = {
  showItems: showItems
};