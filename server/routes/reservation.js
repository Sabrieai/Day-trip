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
  const id = req.params.id;
  const date = new Date();
  const today = date.toISOString().slice(0, 10);

  reservations.getPastReservations(id, today)
    .then((past) => {
      reservations.getFutureReservations(id, today)
        .then((future) => {
          reservations.getTodaysReservations(id, today)
            .then((todays) => {
              res.json({ future, past, todays });
            });
        });
    });
});


//posts reservation into reservations table and updates availibiltiy
router.post('/', (req, res) => {
  const adventure = req.body.adventure;
  const guest = req.body.guest;
  const totalPrice = req.body.totalPrice;
  const totalGuests = Number(req.body.totalGuests);
  const day = req.body.day;
  const date = getReservationDate(day);
  const paymentId = req.body.paymentId;

  console.log(date, `DATE`);
  console.log(req.body, `REQ.BODY`);
  console.log(totalGuests);

  reservations.addReservation(date, totalPrice, guest, paymentId, totalGuests, adventure)
    .then((data) => {
      reservations.updateAvailibilty(adventure, day)
        .then(() => {
          res.json(data);
        });
    })
    .catch((err) => {
      res.json(err.message);
    });


});


module.exports = router;