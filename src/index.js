#! /usr/bin/env node
const yargs = require('yargs');
const commands = require('./commands');

const argv = yargs
  .command({
    command: "list",
    aliases: ["L"],
    desc: "show all repositories"
  })
  .command({
    command: "home [author/repo]",
    aliases: ["H"],
    desc: "go to the github repository",
    builder: yargs => {
      yargs.positional("author/repo", {
        describe: "goes to the repository",
        default: "moikapy/moiboi-cli"
      });
    }
  })
  .command({
    command: "search [keyword]",
    aliases: ["S"],
    desc: "search the repository",
    builder: yargs => {
      yargs.positional("keyword", {
        describe: "keyword to search"
      });
    }
  })
  .command({
    command: "create [repo] [project]",
    aliases: ["C"],
    desc: "install the repository as boilerplate into the project directory",
    builder: yargs => {
      yargs.positional("repo", {
        describe: "repository to use"
      });
      yargs.positional("project", {
        describe: "project directory name to install"
      });
    }
  })
  .command({
    command: "authors",
    aliases: ["A"],
    desc: "show all authors of repository"
  })
  .command({
    command: "add [author]",
    aliases: ["ad"],
    desc: "add new author",
    builder: yargs => {
      yargs.positional("author", {
        describe: "author to add"
      });
    }
  })
  .command({
    command: "remove [author]",
    aliases: ["rm"],
    desc: "remove author",
    builder: yargs => {
      yargs.positional("author", {
        describe: "author to remove"
      });
    }
  })
  .command({
    command: "reset",
    aliases: ["R"],
    desc: "reset all configuration to default"
  })
  .option("global", {
    describe: "expand the range to search and create",
    alias: "g",
    default: false
  })
  .help()
  .alias("help", "h")
  .alias("version", "v").argv;

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
} else if (command === 'add' || command === 'ad') {
  commands.add(argv.author);
} else if (command === 'remove' || command === 'rm') {
  commands.remove(argv.author);
} else if (command === 'reset' || command === 'R') {
  commands.reset();
} else if (!command) {
  yargs.showHelp();
} else {
  console.log(`Not such a command : ❌ '${command}' ❌`);
  yargs.showHelp();
}
