const { categoryServices } = require('../services');

async function getCategories(req, res) {
    try {
      const result = await categoryServices.getCategories();
      res.status(200).json(result.rows)
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  module.exports = {
    getCategories
  }