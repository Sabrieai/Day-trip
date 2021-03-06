const { pool } = require('./database');

const getReviewForm = (id) => {
  return pool.query(`SELECT thumbnail_photo_url, cover_photo_url, users.pic, users.first_name, users.last_name, adventures.id  FROM adventures
  JOIN users ON users.id = owner_id  
   WHERE adventures.id = $1;
  `, [id])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
};

const getMyAdventureReviews = (id) => {
  return pool.query(`SELECT * 
  FROM
  (SELECT adventure_reviews.*
   FROM adventures 
  JOIN users 
  ON users.id = owner_id 
  JOIN adventure_reviews
  ON adventures.id = adventure_id
  WHERE users.id = $1) sub
  JOIN users as u 
  ON u.id = sub.guest_id 
  JOIN adventures ON adventures.id = sub.adventure_id
  ;`, [id])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
};

const addReview = (guest, adventure, reservation, rating, comment) => {
  return pool.query(`INSERT INTO adventure_reviews (guest_id, adventure_id, reservation_id, rating, comment)
  VALUES ($1, $2, $3, $4, $5);
  `, [guest, adventure, reservation, rating, comment])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
};

const getMyReviews = (id) => {
  return pool.query(`SELECT users.pic, first_name, last_name, rating, comment, title
  FROM users
  JOIN adventure_reviews on users.id = guest_id
  JOIN adventures ON adventures.id = adventure_id
  WHERE users.id = $1;
  `, [id])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
};

const getReviewsViews = (id) => {
  return pool.query(`SELECT thumbnail_photo_url, cover_photo_url, first_name, last_name, pic 
  FROM users 
  JOIN adventures 
  ON users.id = owner_id 
  WHERE adventures.id = $1`, [id])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
};

const getAdventureReviews = (id) => {
  return pool.query(`SELECT users.pic, first_name, last_name, rating, comment, title
    FROM adventure_reviews 
    JOIN adventures ON adventure_id = adventures.id
    JOIN users ON users.id = guest_id
    WHERE adventures.id = $1;`, [id])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });

};

const getReviewed = (id) => {
  return pool.query(`SELECT reservations.id
    FROM adventure_reviews 
    JOIN reservations ON reservations.id = reservation_id
    JOIN users ON users.id = reservations.guest_id
    WHERE users.id = $1;`, [id])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
};

module.exports = { getReviewForm, addReview, getMyAdventureReviews, getMyReviews, getReviewsViews, getAdventureReviews, getReviewed };