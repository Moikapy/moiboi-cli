"use strict";

var config = require('../config');

var _require = require('../helpers/githubRequest'),
    isExistingUser = _require.isExistingUser;

var addCommand = function addCommand(author) {
  isExistingUser(author).then(function (isExisted) {
    if (isExisted) {
      var newConfig = config.get();

      if (!newConfig['authors']) {
        newConfig['authors'] = [author];
      } else {
        if (!config.isExistingAuthor(author)) {
          newConfig['authors'].push(author);
        }
      }

      config.update(newConfig);
      console.log("Added ".concat(author, " \uD83C\uDF89"));
    } else {
      console.log("This User doesn't exist \uD83D\uDE05: ".concat(author));
      console.log("Please Try another User \uD83D\uDC31\u200D\uD83D\uDCBB");
    }
  });
};

module.exports = addCommand;