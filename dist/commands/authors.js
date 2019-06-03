"use strict";

var config = require('../config');

var authorsCommand = function authorsCommand() {
  var authors = config.get()['authors'] || [];
  console.log('📚  Authors 📚');
  authors.forEach(function (item) {
    console.log('🦑 ', item);
  });
};

module.exports = authorsCommand;