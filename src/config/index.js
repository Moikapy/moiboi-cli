const fs = require("fs");
const CONFIG_PATH = `${__dirname}/config.json`;

const get = () => {
  try {
    const json = fs.readFileSync(CONFIG_PATH);
    return JSON.parse(json);
  } catch (err) {
    return {};
  }
};

const update = updatedConfig => {
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(updatedConfig));
};

const isExistingAuthor = author => {
  const authors = get()["authors"] || [];
  const sameAuthors = authors.filter(thisAuthor => thisAuthor === author);
  if (sameAuthors.length === 0) {
    return false;
  } else {
    return true;
  }
};

module.exports = {
  get,
  update,
  isExistingAuthor
};
