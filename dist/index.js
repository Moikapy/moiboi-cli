#! /usr/bin/env node
"use strict";

require("@babel/polyfill");

var _yargs = _interopRequireDefault(require("yargs"));

var _commands = _interopRequireDefault(require("./commands"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var argv = _yargs["default"].command({
  command: 'list',
  aliases: ['L'],
  desc: 'shows all repositories'
}).command({
  command: 'home [author/repository]',
  aliases: ['H'],
  desc: 'goes to the repository on github',
  builder: function builder(yargs) {
    yargs.positional('author/repository', {
      describe: 'goes to the repository on github',
      "default": 'moikapy/moiboi-cli'
    });
  }
}).command({
  command: 'search [keyword]',
  aliases: ['S'],
  desc: 'search for the repository',
  builder: function builder(yargs) {
    yargs.positional('keyword', {
      describe: 'keyword to search'
    });
  }
}).command({
  command: 'clone [repository] [project]',
  aliases: ['C'],
  desc: 'clones repository as new project into target directory',
  builder: function builder(yargs) {
    yargs.positional('repository', {
      describe: 'repository to use'
    });
    yargs.positional('project', {
      describe: 'project directory name to install'
    });
  }
}).command({
  command: 'authors',
  aliases: ['A'],
  desc: 'show all authors of repository'
}).command({
  command: 'add [author]',
  aliases: ['ad'],
  desc: 'add new author',
  builder: function builder(yargs) {
    yargs.positional('author', {
      describe: 'author to add'
    });
  }
}).command({
  command: 'remove [author]',
  aliases: ['rm'],
  desc: 'remove author',
  builder: function builder(yargs) {
    yargs.positional('author', {
      describe: 'author to remove'
    });
  }
}).command({
  command: 'reset',
  aliases: ['R'],
  desc: 'reset all configuration to default'
}).option('global', {
  describe: 'expand the range to search and create',
  alias: 'g',
  "default": false
}).scriptName('moiboi').help().alias('help', 'h').alias('version', 'v').argv;

var command = argv._[0];

if (command === 'list' || command === 'L') {
  _commands["default"].list();
} else if (command === 'home' || command === 'H') {
  _commands["default"].home(argv['author/repository']);
} else if (command === 'search' || command === 'S') {
  _commands["default"].search(argv.keyword, argv.global);
} else if (command === 'clone' || command === 'C') {
  _commands["default"].clone(argv.repository, argv.project, argv.global);
} else if (command === 'authors' || command === 'A') {
  _commands["default"].authors();
} else if (command === 'add' || command === 'ad') {
  _commands["default"].add(argv.author);
} else if (command === 'remove' || command === 'rm') {
  _commands["default"].remove(argv.author);
} else if (command === 'reset' || command === 'R') {
  _commands["default"].reset();
} else if (!command) {
  _yargs["default"].showHelp();

  console.log('\n');
  console.log('Run moiboi <command> --help for detailed usage of given command.');
  console.log('\n');
} else {
  console.log("Not such a command : \u274C  \"".concat(command, "\" \u274C"));
  console.log('\n');

  _yargs["default"].showHelp();

  console.log('\n');
  console.log('Run moiboi <command> --help for detailed usage of given command.');
  console.log('\n');
}