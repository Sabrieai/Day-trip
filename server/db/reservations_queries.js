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

const addReservation = (date, totalPrice, guestId, paymentId, totalGuests, adventureId) => {
  return pool.query(`
  INSERT INTO reservations(date, total_price, guest_id, payment_id, total_guests, adventure_id)
  VALUES($1, $2, $3, $4, $5, $6)
  `, [date, totalPrice, guestId, paymentId, totalGuests, adventureId])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
};

const updateAvailibilty = (adventure, day) => {
  return pool.query(`
 UPDATE adventure_availibilties 
 SET available = false 
 WHERE adventure_id = $1
 AND day = $2
  `, [adventure, day])
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err.message;
    });
};

module.exports = { getReservations, addReservation, updateAvailibilty };