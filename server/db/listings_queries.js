/* eslint-disable camelcase */
const { pool } = require('./database');

const createListing = (owner_id, title, description, thumbnail_photo_url, cover_photo_url, prev_price, curr_price, accessible, street, city, province_state, post_code_zip, country, active, is_full, max_occupancy, season, category) => {
  return pool.query(`INSERT INTO adventures(owner_id, title, description, thumbnail_photo_url, cover_photo_url, prev_price, curr_price, accessible, street, city, province_state, post_code_zip, country, active, is_full, max_occupancy, season, category)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
RETURNING id;
`, [owner_id, title, description, thumbnail_photo_url, cover_photo_url, prev_price, curr_price, accessible, street, city, province_state, post_code_zip, country, active, is_full, max_occupancy, season, category])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
};

const updateListing = (adventure_id, title, description, thumbnail_photo_url, cover_photo_url, prev_price, curr_price, accessible, street, city, province_state, post_code_zip, country, active, is_full, max_occupancy, season, category) => {
  return pool.query(`UPDATE adventures 
SET title = $2, description = $3, thumbnail_photo_url = $4, cover_photo_url = $5, prev_price = $6, curr_price = $7, accessible = $8, street = $9, city = $10, province_state = $11, post_code_zip = $12, country = $13, active = $14, is_full = $15, max_occupancy = $16, season = $17, category = $18
WHERE id = $1
`, [adventure_id, title, description, thumbnail_photo_url, cover_photo_url, prev_price, curr_price, accessible, street, city, province_state, post_code_zip, country, active, is_full, max_occupancy, season, category])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
};

const deleteListing = (id) => {
  return pool.query(`DELETE FROM adventures WHERE id = $1`, [id])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
};

const createAvailability = (id) => {
  return pool.query(`INSERT INTO adventure_availibilties(adventure_id, day, available)
VALUES ($1,'Monday',true),
($1,'Tuesday',true),
($1,'Wednesday',true),
($1,'Thursday',true),
($1,'Friday',true),
($1,'Saturday',true),
($1,'Sunday',true)`, [id]);
};

module.exports = { createListing, updateListing, deleteListing, createAvailability };
