const { filmServices } = require('../services');

async function getFilm(req, res) {
    try {
      const result = await filmServices.getFilm();
      res.status(200).json(result.rows)
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

async function getFilmById(req, res) {
  const id = req.params.id;
    try {
      const result = await filmServices.getFilmById(id);
      res.status(200).json(result.rows)
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async function getFilmByCategoryId(req, res) {
    const catId = req.params.catId;
      try {
        const result = await filmServices.getFilmByCategoryId(catId);
        res.status(200).json(result.rows)
      } catch (err) {
        res.status(500).send(err.message);
      }
    }

  module.exports = {
    getFilm,
    getFilmById,
    getFilmByCategoryId
  }