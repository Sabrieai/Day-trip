const express = require("express");
const router = express.Router();
const homepage = require('../db/home_queries.js')

router.get('/login/:id', (req, res) => {
  const userId = req.params.id;
  req.session.user_id = userId;

  res.redirect('/');
});

//post to search form 
router.post('/search/:input', (req, res) => {
  homepage.searchDestination(req.params.input)
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
})

//get for placeholder 
router.get('/', (req, res) => {
  homepage.placeholder()
    .then((destination) => {
      homepage.getCategories(req.params.input)
        .then((categories) => {
          res.json({categories, placeholder:destination[0]});
        })
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
})

module.exports = router;