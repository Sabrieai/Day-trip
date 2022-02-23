const { pool } = require('./database');

const getAdventureDetails = (id) => {
  return pool.query(`SELECT adventures.*, users.pic, users.first_name, users.last_name
  FROM adventures
  JOIN users ON users.id = owner_id
  WHERE adventures.id = $1
  `, [id])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
};

const getAdventuresForUser = (id) => {
  return pool.query(`SELECT title, city, thumbnail_photo_url, id , curr_price, prev_price
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
  WHERE adventure_id = $1
  ORDER BY id;
  `, [id])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
};



module.exports = { getAdventureDetails, getAvailibilty, getAdventuresForUser };
