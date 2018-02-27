const { fetchBoilerplates } = require('../helpers/githubRequest');
const { showItems } = require('../helpers/formattedConsole');

const listCommand = () => {
  fetchBoilerplates().then(boilerpates => {
    console.log('### Available Boilerplates ###');
    showItems(boilerpates);
  });
};

module.exports = listCommand;
