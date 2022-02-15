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

const getAdventuresForUser = (id) => {
  return pool.query(`SELECT title, city, thumbnail_photo_url, adventure_id 
  FROM adventures
  WHERE owner_id = $1;
  `, [id])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
};

const getAvailibilty = (id) => {
  return pool.query(`SELECT adventure_availibilties.*
  FROM adventure_availibilties
  WHERE adventure_id = $1;
  `, [id])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
};



module.exports = { getAdventureDetails, getAvailibilty, getAdventuresForUser };
