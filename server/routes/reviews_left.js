const express = require("express");
const router = express.Router();
const reviews = require('../db/reviews_queries');

//VALID
// router.get('/', (req, res) => {
//   const id = req.session.user_id;
//   res.redirect(`reviews/${id}`);
// });

//VALID
router.get('/:id', (req, res) => {
  const id = req.params.id;
  reviews.getMyAdventureReviews(id)
    .then((reviews) => {
      res.json(reviews);
    });
});

router.get('/view/:id', (req, res) => {
  const id = req.params.id;
  reviews.getReviewsViews(id)
    .then((reviews) => {
      res.json(reviews);
    });
});

module.exports = router;