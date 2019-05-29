const {
  fetchRepositories,
  fetchRepoNames
} = require("../helpers/githubRequest");
const { showItems } = require("../helpers/formattedConsole");

const searchCommand = (keyword, isGlobal) => {
  if (!keyword) return console.log("A keyword is missing... 😅");

  console.log("🔎 Search Results 🔍");

  if (isGlobal) {
    fetchRepoNames(keyword).then(repos => {
      showItems(repos);
    });
  } else {
    fetchRepositories().then(repositories => {
      const items = repositories.filter(repository =>
        repository.includes(keyword)
      );
      showItems(items);
    });
  }
};

module.exports = searchCommand;
