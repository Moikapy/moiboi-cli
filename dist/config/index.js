"use strict";

var fs = require('fs');

var CONFIG_PATH = "".concat(__dirname, "/config.json");

var get = function get() {
  try {
    var json = fs.readFileSync(CONFIG_PATH);
    return JSON.parse(json);
  } catch (err) {
    return {};
  }
};

var update = function update(updatedConfig) {
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(updatedConfig));
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

module.exports = {
  get: get,
  update: update,
  isExistingAuthor: isExistingAuthor
};