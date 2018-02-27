const { fetchBoilerplates } = require('../helpers/githubRequest');
const { showItems } = require('../helpers/formattedConsole');

const listCommand = () => {
  fetchBoilerplates().then(boilerpates => {
    showItems(boilerpates);
  });
};

module.exports = listCommand;
