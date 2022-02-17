const { pool } = require('./database');

const getFavourites = (id) => {
  return pool.query(`SELECT title, city, thumbnail_photo_url, accessible, adventure_id 
  FROM favourites 
  JOIN adventures 
  ON adventure_id = adventures.id
  WHERE guest_id = $1;
  `, [id])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
};

const deleteAFavourite = (user, adventure) => {

  return pool.query(`DELETE FROM favourites where guest_id = $1 
  AND adventure_id = $2;`, [user, adventure])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
};

const addFavourite = (user, adventure) => {
  return pool.query(`INSERT INTO favourites (guest_id, adventure_id)
  VALUES($1, $2)`
  , [user, adventure])
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.message;
    });
};

module.exports = { getFavourites, deleteAFavourite, addFavourite };