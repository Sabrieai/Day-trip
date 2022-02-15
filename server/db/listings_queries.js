const { pool } = require('./database');

const createListing = (title, description, prevPrice, currPrice, accessible, occupancy, street, city, provinceState, country, thumbnailPhoto, coverPhoto, season) => {
  return pool.query(`INSERT INTO adventures (title, description, prev_price, curr_price, accessible, max_occupancy, street, city, province_state, country, thumbnail_photo_url, cover_photo_url, season)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);
`, [title, description, prevPrice, currPrice, accessible, occupancy, street, city, provinceState, country, thumbnailPhoto, coverPhoto, season])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message
    });
}

const updateListing = (title, description, prevPrice, occupancy, street, city, provinceState, country, thumbnailPhoto, coverPhoto, season, currPrice, accessible, id) => {
  return pool.query(`UPDATE adventures 
SET title = $1, description= $2, prev_price= $3, max_occupancy = $4, street = $5, city =$6, province_state= $7, country =$8, thumbnail_photo_url = $9, cover_photo_url =$10, season = $11, curr_price = $12, accessible = $13
WHERE id = $14
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);
`, [title, description, prevPrice, occupancy, street, city, provinceState, country, thumbnailPhoto, coverPhoto, season, currPrice, accessible, id])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message
    });
}

const deleteListing = (id) => {
  return pool.query(`DELETE * from adventures WHERE id = $1`, [id])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message
    });
}


module.exports = { createListing, updateListing, deleteListing }
