const express = require("express");
const router = express.Router();
const reviews = require('../db/reviews_queries');


router.get('/', (req, res) => {
  const id = req.session;
  res.redirect(`/${id}`);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  reviews.getMyAdventureReviews(id)
    .then((reviews) => {
      res.json(reviews);
    });
});