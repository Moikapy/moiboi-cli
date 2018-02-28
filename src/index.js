#! /usr/bin/env node
const yargs = require('yargs');
const commands = require('./commands');

const argv = yargs
  .command({
    command: 'list',
    aliases: ['l'],
    desc: 'show all boilerpates'
  })
  .command({
    command: 'home [author/bilerpate]',
    aliases: ['H'],
    desc: 'go to the github repository',
    builder: yargs => {
      yargs.positional('author/bilerpate', {
        describe: 'boilerpate to go',
        default: 'keidrun/boilerplate-cli'
      });
    }
  })
  .command({
    command: 'search [keyword]',
    aliases: ['s'],
    desc: 'search boilerplates',
    builder: yargs => {
      yargs.positional('keyword', {
        describe: 'keyword to search'
      });
    }
  })
  .command({
    command: 'create [boilerplate] [project]',
    aliases: ['c'],
    desc: 'install the boilerplate into the project directory',
    builder: yargs => {
      yargs.positional('boilerplate', {
        describe: 'boilerplate to use'
      });
      yargs.positional('project', {
        describe: 'project directory name to install'
      });
    }
  })
  .command({
    command: 'authors',
    aliases: ['a'],
    desc: 'show all authors of boilerplates'
  })
  .command({
    command: 'tap [author]',
    aliases: ['t'],
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
    aliases: ['r'],
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

if (command === 'list' || command === 'l') {
  commands.list();
} else if (command === 'home' || command === 'H') {
  commands.home(argv['author/bilerpate']);
} else if (command === 'search' || command === 's') {
  commands.search(argv.keyword, argv.global);
} else if (command === 'create' || command === 'c') {
  commands.create(argv.boilerplate, argv.project, argv.global);
} else if (command === 'authors' || command === 'a') {
  commands.authors();
} else if (command === 'tap' || command === 't') {
  commands.tap(argv.author);
} else if (command === 'untap' || command === 'ut') {
  commands.untap(argv.author);
} else if (command === 'reset' || command === 'r') {
  commands.reset();
} else if (!command) {
  yargs.showHelp();
} else {
  console.log(`Not such a command : '${command}'`);
  yargs.showHelp();
}
