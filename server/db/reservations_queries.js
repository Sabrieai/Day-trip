const { pool } = require('./database');


const getReservations = (id) => {
  // const guest = req.session.user_id
  return pool.query(`SELECT title, city, thumbnail_photo_url, reservations.date FROM adventures 
  JOIN reservations 
  ON adventures.id = adventure_id
  WHERE guest_id = $1
  `, [id])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
};



module.exports = { getReservations };