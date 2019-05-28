const { fetchBoilerplates } = require("../helpers/githubRequest");
const { showItems } = require("../helpers/formattedConsole");

const listCommand = () => {
  fetchBoilerplates().then(boilerpates => {
    console.log("✔ Available Repositiries ✔");
    showItems(boilerpates);
  });
};

module.exports = listCommand;
