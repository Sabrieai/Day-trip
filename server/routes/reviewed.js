const express = require("express");
const router = express.Router();
const reviews = require('../db/reviews_queries');

//test reviewed route
router.get('/:id', (req, res) => {
  const id = req.params.id;
  reviews.getReviewed(id)
    .then((reviewed) => {
      res.json(reviewed);
    });
});


module.exports = router;