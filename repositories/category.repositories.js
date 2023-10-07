const pool = require('../utils/pool')

function getCategories() {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM category order by category_id ASC`,
      (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      },
    )
  });
}

module.exports = {
  getCategories
};