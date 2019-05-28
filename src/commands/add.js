const config = require("../config");
const { isExistingUser } = require("../helpers/githubRequest");

const addCommand = author => {
  isExistingUser(author).then(isExisted => {
    if (isExisted) {
      let newConfig = config.get();
      if (!newConfig["authors"]) {
        newConfig["authors"] = [author];
      } else {
        if (!config.isExistingAuthor(author)) {
          newConfig["authors"].push(author);
        }
      }
      config.update(newConfig);
      console.log(`Added ${author} 🎉`);
    } else {
      console.log(`This User doesn't exist 😅: ${author}`);
      console.log(`Please Try another User 🐱‍💻`);
    }
  });
};

module.exports = addCommand;
