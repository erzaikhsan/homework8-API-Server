const { categoryRepositories } = require("../repositories");

async function getCategories() {
  const response = await categoryRepositories.getCategories();
  if (response.Response === "False") {
    return Promise.reject(new Error(response.Error));
  }
  return response;
}

module.exports = {
  getCategories
};