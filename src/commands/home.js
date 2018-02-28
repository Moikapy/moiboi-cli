const opener = require('opener');
const {
  fetchBoilerplates,
  isExistingRepo
} = require('../helpers/githubRequest');

const homeCommand = authorAndBoilerpate => {
  if (authorAndBoilerpate === 'keidrun/boilerplate-cli') {
    const url = `https://github.com/${authorAndBoilerpate}`;
    return opener(url, (err, stdout, stderr) => {
      if (err) return console.log(`Failed to open the repository: ${url}`);
    });
  }

  const args = authorAndBoilerpate.split('/');
  if (args.length !== 2) {
    return console.log(`Argument is wrong: ${authorAndBoilerpate}`);
  }

  isExistingRepo(args[0], args[1]).then(isExisted => {
    if (isExisted) {
      const url = `https://github.com/${authorAndBoilerpate}`;
      opener(url, (err, stdout, stderr) => {
        if (err) return console.log(`Failed to open the repository: ${url}`);
      });
    } else {
      return console.log(
        `The repository was not found: ${authorAndBoilerpate}`
      );
    }
  });
};

module.exports = homeCommand;
