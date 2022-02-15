const { pool } = require('./database');


const getAdventureDetails = (id) => {
  return pool.query(`SELECT adventures.*, adventure_availibilties.*, users.pic, users.first_name, users.last_name
  FROM adventures
  JOIN users ON users.id = owner_id
  JOIN adventure_availibilties
   ON adventure_id = adventures.id 
  WHERE adventures.id = $1;
  `, [id])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
};


module.exports = { getAdventureDetails};