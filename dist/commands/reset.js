"use strict";

var config = require('../config');

var readlineSync = require('readline-sync');

var DEFAULT_JSON = {
  authors: ['moikapy', 'nodegg']
};

var resetCommand = function resetCommand() {
  var answer = readlineSync.question('Moiboi will reset all Configurations. Is it ok? (Y/n) ');
  console.log(answer);

  if (answer === 'y') {
    config.update(DEFAULT_JSON);
    console.log('Moiboi 🦊   reset all Configurations  🐱‍🐉  🔥');
  }
};

module.exports = resetCommand;