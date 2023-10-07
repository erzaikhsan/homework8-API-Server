const { filmRepositories } = require("../repositories");

async function getFilm() {
  const response = await filmRepositories.getFilm();
  if (response.Response === "False") {
    return Promise.reject(new Error(response.Error));
  }
  return response;
}

async function getFilmById(id) {
  const response = await filmRepositories.getFilmById(id);
  if (response.Response === "False") {
    return Promise.reject(new Error(response.Error));
  }
  return response;
}

async function getFilmByCategoryId(catId) {
  const response = await filmRepositories.getFilmByCategoryId(catId);
  if (response.Response === "False") {
    return Promise.reject(new Error(response.Error));
  }
  return response;
}

module.exports = {
  getFilm,
  getFilmById,
  getFilmByCategoryId
};