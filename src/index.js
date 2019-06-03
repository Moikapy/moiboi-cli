#! /usr/bin/env node
const yargs = require('yargs')
const commands = require('./commands')

const argv = yargs
  .command({
    command: 'list',
    aliases: ['L'],
    desc: 'shows all repositories',
  })
  .command({
    command: 'home [author/repository]',
    aliases: ['H'],
    desc: 'goes to the repository on github',
    builder: yargs => {
      yargs.positional('author/repository', {
        describe: 'goes to the repository on github',
        default: 'moikapy/moiboi-cli',
      })
    },
  })
  .command({
    command: 'search [keyword]',
    aliases: ['S'],
    desc: 'search for the repository',
    builder: yargs => {
      yargs.positional('keyword', {
        describe: 'keyword to search',
      })
    },
  })
  .command({
    command: 'clone [repository] [project]',
    aliases: ['C'],
    desc: 'clones repository as new project into target directory',
    builder: yargs => {
      yargs.positional('repository', {
        describe: 'repository to use',
      })
      yargs.positional('project', {
        describe: 'project directory name to install',
      })
    },
  })
  .command({
    command: 'authors',
    aliases: ['A'],
    desc: 'show all authors of repository',
  })
  .command({
    command: 'add [author]',
    aliases: ['ad'],
    desc: 'add new author',
    builder: yargs => {
      yargs.positional('author', {
        describe: 'author to add',
      })
    },
  })
  .command({
    command: 'remove [author]',
    aliases: ['rm'],
    desc: 'remove author',
    builder: yargs => {
      yargs.positional('author', {
        describe: 'author to remove',
      })
    },
  })
  .command({
    command: 'reset',
    aliases: ['R'],
    desc: 'reset all configuration to default',
  })
  .option('global', {
    describe: 'expand the range to search and create',
    alias: 'g',
    default: false,
  })
  .scriptName('moiboi')
  .help()
  .alias('help', 'h')
  .alias('version', 'v').argv

const command = argv._[0]

if (command === 'list' || command === 'L') {
  commands.list()
} else if (command === 'home' || command === 'H') {
  commands.home(argv['author/repository'])
} else if (command === 'search' || command === 'S') {
  commands.search(argv.keyword, argv.global)
} else if (command === 'clone' || command === 'C') {
  commands.clone(argv.repository, argv.project, argv.global)
} else if (command === 'authors' || command === 'A') {
  commands.authors()
} else if (command === 'add' || command === 'ad') {
  commands.add(argv.author)
} else if (command === 'remove' || command === 'rm') {
  commands.remove(argv.author)
} else if (command === 'reset' || command === 'R') {
  commands.reset()
} else if (!command) {
  yargs.showHelp()
  console.log('\n')
  console.log(
    'Run moiboi <command> --help for detailed usage of given command.',
  )
  console.log('\n')
} else {
  console.log(`Not such a command : ❌  "${command}" ❌`)
  console.log('\n')
  yargs.showHelp()
  console.log('\n')
  console.log(
    'Run moiboi <command> --help for detailed usage of given command.',
  )
  console.log('\n')
}
