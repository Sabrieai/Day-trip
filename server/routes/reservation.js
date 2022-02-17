const express = require("express");
const router = express.Router();
const reservations = require('../db/reservations_queries');
const { getReservationDate } = require('./helpers/reservation_function');


// redirects if no id specified VALID
router.get('/', (req, res) => {
  const id = req.session.user_id;
  res.redirect(`reservation/${id}`);
});

//gets reservations for a user VALID
router.get('/:id', (req, res) => {
  const id = req.session.user_id;
  reservations.getReservations(id)
    .then((reservation) => {
      res.json(reservation);
    });
});

//posts reservation into reservations table and updates availibiltiy
router.post('/', (req, res) => {
  const adventure = req.body.adventure;
  const guest = req.body.guest;
  const totalPrice = req.body.totalPrice;
  const totalGuests = req.body.totalGuests;
  const day = req.body.day;
  const date = getReservationDate(day);
  const paymentId = req.body.payment;

  reservations.addReservation(date, totalPrice, guest, paymentId, totalGuests, adventure)
    .then(() => {
      reservations.updateAvailibilty(adventure, day)
        .then(() => {
          res.json('SUCCESS');
        });
    })
    .catch((err) => {
      res.json(err.message);
    });


});

module.exports = router;