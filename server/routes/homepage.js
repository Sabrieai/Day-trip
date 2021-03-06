const express = require("express");
const router = express.Router();
const homepage = require('../db/home_queries.js');
const categoryQueries = require('../db/category_queries.js');
const seasonQueries = require('../db/season_queries');

//get login page 
router.get('/login/:id', (req, res) => {
  const user = req.params.id;
  homepage.getUser(user)
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });

});

//post to search form
router.get('/search/:input', (req, res) => {
  homepage.searchDestination(req.params.input)
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//get for placeholder text
router.get('/', (req, res) => {
  homepage.placeholder()
    .then((destination) => {
      homepage.getCategories(req.params.input)
        .then((categories) => {
          res.json({ categories, placeholder: destination });
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});


//get favourites VALID
router.get('/:category', (req, res) => {
  const category = req.params.category;
  categoryQueries.getCategory(category)
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//get adventures by season
router.get('/api/:season', (req, res) => {
  const season = req.params.season;
  seasonQueries.getSeason(season)
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
module.exports = router;