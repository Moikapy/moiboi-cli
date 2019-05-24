const {
  fetchBoilerplates,
  fetchRepoNames
} = require('../helpers/githubRequest');
const { showItems } = require('../helpers/formattedConsole');

const searchCommand = (keyword, isGlobal) => {
  if (!keyword) return console.log('A keyword is missing... 😅');

  console.log('🔎 Search Results 🔍');

  if (isGlobal) {
    fetchRepoNames(keyword).then(repos => {
      showItems(repos);
    });
  } else {
    fetchBoilerplates().then(boilerpates => {
      const items = boilerpates.filter(boilerpate =>
        boilerpate.includes(keyword)
      );
      showItems(items);
    });
  }
};

module.exports = searchCommand;
