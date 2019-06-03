"use strict";

var config = require('../config');

var removeCommand = function removeCommand(author) {
  if (config.isExistingAuthor(author)) {
    var newConfig = config.get();
    var newAuthors = newConfig['authors'].filter(function (thisAuthor) {
      return thisAuthor !== author;
    });
    newConfig['authors'] = newAuthors;
    config.update(newConfig);
    console.log("Removed ".concat(author, " \uD83D\uDC94"));
  }
};

module.exports = removeCommand;