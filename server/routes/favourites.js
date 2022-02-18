const express = require("express");
const router = express.Router();
const favouriteQueries = require('../db/favourites_queries')

//get favourites VALID
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  favouriteQueries.getFavourites(userId)
    .then((favourites) => {
      res.json(favourites);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//delete a favourite
router.delete('/:id/:adventure', (req, res) => {
  const user = req.params.id;
  const adventure = req.params.adventure;
  favouriteQueries.deleteAFavourite(user, adventure)
    .then((favourites) => {
      res.send(favourites);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//add adventure to favourite
router.post('/', (req, res) => {
  const user = req.body.user;
  const adventure = req.body.adventure;
  favouriteQueries.addFavourite(user, adventure)
    .then((favourites) => {
      res.json(favourites);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;