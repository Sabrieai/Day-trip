const express = require("express");
const router = express.Router();
const homepage = require('../db/home_queries.js')
const categoryQueries = require('../db/category_queries.js')



// VALID
router.get('/login/:id', (req, res) => {
  const userId = req.params.id;
  req.session.user_id = userId;

  res.redirect('/');
});

//post to search form VALID
router.get('/search/:input', (req, res) => {
  homepage.searchDestination(req.params.input)
    .then((results) => {
      res.json(results);
      // console.log(results)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
})

//get for placeholder VALID
router.get('/', (req, res) => {
  homepage.placeholder()
    .then((destination) => {
      homepage.getCategories(req.params.input)
        .then((categories) => {
          res.json({ categories, placeholder: destination });
        })
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
})


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
module.exports = router;