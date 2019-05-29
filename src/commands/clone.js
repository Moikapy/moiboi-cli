const {
  renameProjectJson,
  fetchRepositories,
  fetchRepoNames
} = require("../helpers/githubRequest");
const readlineSync = require("readline-sync");
const exec = require("child_process").exec;
const rimraf = require("rimraf");

const cloneCommand = (repositoryName, projectDirectory, isGlobal) => {
  const fetch = isGlobal ? fetchRepoNames : fetchRepositories;

  fetch().then(repositories => {
    const targetRepository = repositories.filter(repository =>
      repository.includes(repositoryName)
    )[0];
    const targetDirectory =
      projectDirectory === "." || !projectDirectory
        ? `${process.cwd()}`
        : `${process.cwd()}/${projectDirectory}`;

    if (!targetRepository) {
      console.log(`Moiboi 🦊   couldn't find ${repositoryName} 😅`);
    } else {
      console.log("Your Choice => ");
      console.log(`Repository: ${targetRepository}`);
      console.log(`Directory: ${targetDirectory}`);
      console.log('\n')
      const answer = readlineSync.question(
        `Your Project will be created Moiboi. Is that ok? (Y/n)  `
      );
      console.log("\n");
      if (answer === "y") {
        let firstGitCommand, cloneGitCommand;
        exec(`git --version`, (err, stdout, stderr) => {
          if (err) return console.log(`You must install 'git' in advance 🤓.`);

          exec(
            `git clone https://github.com/${targetRepository} ${targetDirectory}`,
            (err, stdout, stderr) => {
              if (err)
                return console.log(
                  `Moiboi 🦊   has failed to clone the repository: ${stderr} 😢`
                );

              rimraf(`${targetDirectory}/.git`, err => {
                if (err)
                  return console.log(
                    `Moiboi 🦊   failed to remove exsiting git files 😢  : ${stderr}`
                  );
              });

              renameProjectJson(targetDirectory, projectDirectory);
            }
          );
        });
      }
    }
  });
};

module.exports = cloneCommand;
