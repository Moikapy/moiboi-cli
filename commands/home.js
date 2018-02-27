const opener = require('opener');
const { fetchBoilerplates } = require('../helpers/githubRequest');

const homeCommand = authorAndBoilerpate => {
  if (authorAndBoilerpate === 'keidrun/boilerplate-cli') {
    const url = `https://github.com/${authorAndBoilerpate}`;
    opener(url, (err, stdout, stderr) => {
      if (err) return console.log(`Failed to open the repository: ${url}`);
    });
  }

  fetchBoilerplates().then(boilerplates => {
    const items = boilerplates.filter(boilerpate =>
      boilerpate.includes(authorAndBoilerpate)
    );
    if (!items[0])
      return console.log(
        `The repository was not found: ${authorAndBoilerpate}`
      );

    const url = `https://github.com/${items[0]}`;
    opener(url, (err, stdout, stderr) => {
      if (err) return console.log(`Failed to open the repository: ${url}`);
    });
  });
};

module.exports = homeCommand;
