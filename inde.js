const yargs = require('yargs');
const readlineSync = require('readline-sync');
const commands = require('./commands');

const argv = yargs
  .command('list', 'show all boilerpates')
  .command('home [author/boilerpate]', 'go to a github repository', yargs => {
    yargs.positional('authorAndBoilerpate', {
      describe: 'boilerpate to go',
      default: 'keidrun/boilerplate-cli'
    });
  })
  .command('search [keyword]', 'search a boilerplate', yargs => {
    yargs.positional('keyword', {
      describe: 'keyword to search',
      default: 'https://github.com/keidrun/boilerplate-cli'
    });
  })
  .command(
    'create [boilerplate] [project]',
    'install a boilerplate into a project directory',
    yargs => {
      yargs.positional('boilerplate', {
        describe: 'boilerplate to use'
      });
      yargs.positional('project', {
        describe: 'project directory name to install'
      });
    }
  )
  .command('taps', 'show all authors of boilerplates')
  .command('tap [author]', 'add a new author of boilerplates', yargs => {
    yargs.positional('author', {
      describe: 'author to add'
    });
  })
  .command('untap [author]', 'remove a author of boilerplates', yargs => {
    yargs.positional('author', {
      describe: 'author to remove'
    });
  })
  .command('reset', 'reset all configuration to default')
  .help()
  .alias('help', 'h')
  .alias('version', 'v').argv;

const command = argv._[0];

console.log(command);
if (command === 'list' || command === 'l') {
  commands.list();
} else if (command === 'home' || command === 'H') {
  commands.home();
} else if (command === 'search' || command === 's') {
  commands.search(argv.keyword);
} else if (command === 'create' || command === 'c') {
  commands.create();
} else if (command === 'taps' || command === 'ts') {
  commands.taps();
} else if (command === 'tap' || command === 't') {
  commands.home();
} else if (command === 'untap' || command === 'ut') {
  commands.home();
} else if (command === 'reset' || command === 'r') {
  const answer = readlineSync.question(
    'All configurations will reset. Is it ok? (y/n) > '
  );
  console.log(answer);
  if (answer === 'y') {
    commands.reset();
    console.log('All configurations resetted.');
  }
} else if (!command) {
  yargs.showHelp();
} else {
  console.log(`Not such a command : '${command}'`);
  yargs.showHelp();
}
