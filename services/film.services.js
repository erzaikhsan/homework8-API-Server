const { filmRepositories } = require("../repositories");

async function getFilms() {
  const response = await filmRepositories.getFilms();
  return response;
}

async function getFilmById(id) {
  const response = await filmRepositories.getFilmById(id);
  return response;
}

async function getFilmByCategoryId(catId) {
  const response = await filmRepositories.getFilmByCategoryId(catId);
  return response;
}

module.exports = {
  getFilms,
  getFilmById,
  getFilmByCategoryId
};