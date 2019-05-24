const {
  fetchBoilerplates,
  fetchRepoNames
} = require('../helpers/githubRequest');
const readlineSync = require('readline-sync');
const exec = require('child_process').exec;
const rimraf = require('rimraf');

const createCommand = (boilerplateName, projectDirectory, isGlobal) => {
  const fetch = isGlobal ? fetchRepoNames : fetchBoilerplates;

  fetch().then(boilerpates => {
    const targetBoilerpate = boilerpates.filter(boilerpate =>
      boilerpate.includes(boilerplateName)
    )[0];
    const targetDirctory =
      projectDirectory === '.' || !projectDirectory
        ? `${process.cwd()}`
        : `${process.cwd()}/${projectDirectory}`;

    if (!targetBoilerpate) {
      console.log(`Moiboi couldn't find 😅: ${boilerplateName}`);
    } else {
      console.log('Your Choice => ');
      console.log(`Boilerpate: ${targetBoilerpate}`);
      console.log(`Directory: ${targetDirctory}`);
      const answer = readlineSync.question(
        'The above boilerplate will be created by Moiboi. Is that ok 🤔? (Y/n) '
      );
      console.log(answer);
      if (answer === 'y') {
        let firstGitCommand, cloneGitCommand;
        exec(`git --version`, (err, stdout, stderr) => {
          if (err) return console.log(`You must install 'git' in advance 🤓.`);

          exec(
            `git clone https://github.com/${targetBoilerpate} ${targetDirctory}`,
            (err, stdout, stderr) => {
              if (err)
                return console.log(`Moiboi has failed to clone the boilerpate: ${stderr} 😢`);

              rimraf(`${targetDirctory}/.git`, err => {
                if (err)
                  return console.log(
                    `Moiboi failed to remove exsiting git files 😢: ${stderr}`
                  );

                console.log('The boilerplate was created by Moiboi!! 🔥🎉');
              });
            }
          );
        });
      }
    }
  });
};

module.exports = createCommand;
