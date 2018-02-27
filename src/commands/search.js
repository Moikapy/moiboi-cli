const { fetchBoilerplates } = require('../helpers/githubRequest');
const { showItems } = require('../helpers/formattedConsole');

const searchCommand = keyword => {
  fetchBoilerplates().then(boilerpates => {
    const items = boilerpates.filter(boilerpate =>
      boilerpate.includes(keyword)
    );
    console.log('### Search Results ###');
    showItems(items);
  });
};

module.exports = searchCommand;
