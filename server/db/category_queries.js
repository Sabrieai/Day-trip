const { pool } = require('./database');

const getCategory = (category) => {
  return pool.query(`SELECT * FROM adventures 
  WHERE lower(category) LIKE ('%${category}%');
  `)
  .then((response) => {
    return response.rows;
  })
  .catch((err) => {
    return err.message;
  });
}

module.exports = { getCategory };