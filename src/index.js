#! /usr/bin/env node
const yargs = require('yargs');
const commands = require('./commands');

const argv = yargs
  .command({
    command: 'list',
    aliases: ['L'],
    desc: 'show all repos'
  })
  .command({
    command: 'home [author/repo]',
    aliases: ['H'],
    desc: 'go to the github repository',
    builder: yargs => {
      yargs.positional('author/repo', {
        describe: 'goes to repo',
        default: 'moikapy/moiboi-cli'
      });
    }
  })
  .command({
    command: 'search [keyword]',
    aliases: ['S'],
    desc: 'search repo',
    builder: yargs => {
      yargs.positional('keyword', {
        describe: 'keyword to search'
      });
    }
  })
  .command({
    command: 'create [repo] [project]',
    aliases: ['C'],
    desc: 'install the repo as boilerplate into the project directory',
    builder: yargs => {
      yargs.positional('repo', {
        describe: 'repo to use'
      });
      yargs.positional('project', {
        describe: 'project directory name to install'
      });
    }
  })
  .command({
    command: 'authors',
    aliases: ['A'],
    desc: 'show all authors of boilerplates'
  })
  .command({
    command: 'tap [author]',
    aliases: ['T'],
    desc: 'add the new author of boilerplates',
    builder: yargs => {
      yargs.positional('author', {
        describe: 'author to add'
      });
    }
  })
  .command({
    command: 'untap [author]',
    aliases: ['ut'],
    desc: 'remove the author of boilerplates',
    builder: yargs => {
      yargs.positional('author', {
        describe: 'author to remove'
      });
    }
  })
  .command({
    command: 'reset',
    aliases: ['R'],
    desc: 'reset all configuration to default'
  })
  .option('global', {
    describe: 'expand the range to search and create',
    alias: 'g',
    default: false
  })
  .help()
  .alias('help', 'h')
  .alias('version', 'v').argv;

const command = argv._[0];

if (command === 'list' || command === 'L') {
  commands.list();
} else if (command === 'home' || command === 'H') {
  commands.home(argv['author/repo']);
} else if (command === 'search' || command === 'S') {
  commands.search(argv.keyword, argv.global);
} else if (command === 'create' || command === 'C') {
  commands.create(argv.repo, argv.project, argv.global);
} else if (command === 'authors' || command === 'A') {
  commands.authors();
} else if (command === 'tap' || command === 'T') {
  commands.tap(argv.author);
} else if (command === 'untap' || command === 'ut') {
  commands.untap(argv.author);
} else if (command === 'reset' || command === 'R') {
  commands.reset();
} else if (!command) {
  yargs.showHelp();
} else {
  console.log(`Not such a command : '${command}'`);
  yargs.showHelp();
}
