const express = require("express");
const router = express.Router();
const reviews = require('../db/reviews_queries');

// //redirect to get reviews for user VAILD
// router.get('/', (req, res) => {
//   const id = req.params.user_id;
//   res.redirect(`myreviews/${id}`);
// });

// get reviews for a user VALID
router.get('/:id', (req, res) => {
  const id = req.params.id;
  reviews.getMyReviews(id)
    .then((reviews) => {
      res.json(reviews);
    });
});

// posts after writing my review
router.post('/', (req, res) => {
  const adventure = req.body.adventure;
  const guest = req.body.guest;
  const reservation = req.body.reservation;
  const rating = req.body.rating;
  const comment = req.body.comment;
  console.log(req.body);
  reviews.addReview(guest, adventure, reservation, rating, comment)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

//get reviews for an activity
router.get('/adventure/:id', (req, res) => {
  const id = req.params.id;
  reviews.getAdventureReviews(id)
    .then((reviews) => {
      res.json(reviews);
    });
});


module.exports = router;