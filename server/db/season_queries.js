const { pool } = require('./database');

const getSeason = (season) => {
  return pool.query(`SELECT * FROM adventures 
  WHERE season = '${season}';
  `)
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
};

module.exports = {getSeason};