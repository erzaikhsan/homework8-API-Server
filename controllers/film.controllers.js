const { filmServices } = require('../services');

async function getFilms(req, res) {
    try {
      const result = await filmServices.getFilms();
      res.status(200).json(result.rows)
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

async function getFilmById(req, res) {
  const id = req.params.id;
    try {
      const result = await filmServices.getFilmById(id);
      if (result.rows.length === 0) {
        res.status(404).send({ message: `Film dengan Id: ${id} tidak ditemukan`});
      } else {
        res.status(200).json(result.rows);
      }
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async function getFilmByCategoryId(req, res) {
    const catId = req.params.catId;
      try {
        const result = await filmServices.getFilmByCategoryId(catId);
        if (result.rows.length === 0) {
          res.status(404).send({ message: `Film dengan Id Category: ${catId} tidak ditemukan`});
        } else {
          res.status(200).json(result.rows);
        }
      } catch (err) {
        res.status(500).send(err.message);
      }
    }

  module.exports = {
    getFilms,
    getFilmById,
    getFilmByCategoryId
  }