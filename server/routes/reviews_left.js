const express = require("express");
const router = express.Router();
const reviews = require('../db/reviews_queries');

//get reviews left by you
router.get('/:id', (req, res) => {
  const id = req.params.id;
  reviews.getMyAdventureReviews(id)
    .then((reviews) => {
      res.json(reviews);
    });
});

//get reviews users left for you
router.get('/view/:id', (req, res) => {
  const id = req.params.id;
  reviews.getReviewsViews(id)
    .then((reviews) => {
      res.json(reviews);
    });
});

module.exports = router;