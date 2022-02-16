const express = require("express");
const router = express.Router();
const reservations = require('../db/reservations_queries');
const dateGetter = require('./helpers/reservation_function');


// redirects if no id specified
router.get('/', (req, res) => {
  const id = req.session;
  res.redirect(`/${id}`);
});

//gets reservations for a user
router.get('/:id', (req, res) => {
  const id = req.session;
  reservations.getReservations(id)
    .then((reservation) => {
      res.json(reservation);
    });
});

//posts reservation into reservations table and updates availibiltiy
router.post('/:id/:day', (req, res) => {
  const adventure = req.params.id;
  const guest = req.session;
  const reservation = req.params.resId;
  const totalPrice = req.params.total;
  const totalGuests = req.params.guest;
  const day = req.params.day;
  const date = dateGetter(day);
  const paymentId = req.params.payment;

  reservation.addReservation(date, totalPrice, guest, paymentId, totalGuests, adventure)
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