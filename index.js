const yargs = require('yargs');
const commands = require('./commands');

const argv = yargs
  .command('list', 'show all boilerpates')
  .command(
    'home [author_and_bilerpate]',
    'go to a github repository',
    yargs => {
      yargs.positional('author_and_bilerpate', {
        describe: 'boilerpate to go',
        default: 'keidrun/boilerplate-cli'
      });
    }
  )
  .command('search [keyword]', 'search a boilerplate', yargs => {
    yargs.positional('keyword', {
      describe: 'keyword to search'
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
  commands.home(argv.author_and_bilerpate);
} else if (command === 'search' || command === 's') {
  commands.search(argv.keyword);
} else if (command === 'create' || command === 'c') {
  commands.create(argv.boilerplate, argv.project);
} else if (command === 'taps' || command === 'ts') {
  commands.taps();
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
