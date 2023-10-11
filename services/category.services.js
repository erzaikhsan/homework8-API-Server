const { categoryRepositories } = require("../repositories");

async function getCategories() {
  const response = await categoryRepositories.getCategories();
  return response;
}

module.exports = {
  getCategories
};