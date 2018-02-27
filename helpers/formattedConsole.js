const showItems = items => {
  items.forEach(item => {
    console.log(item);
  });
  console.log(`Total: ${items.length}`);
};

module.exports = {
  showItems
};
