const express = require("express");
const router = express.Router();
const favouriteQueries = require('../db/favourites_queries')

//get favourites
router.get('/', (req, res) => {
  const userId = req.session.id;
  favouriteQueries.getFavourites(userId)
    .then((favourites) => {
      res.json(favourites);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//delete a favourite
router.post('/delete/:adventureId', (req, res)=>{
  const userId = req.session.id;
  favouriteQueries.deleteAFavourite(userId, req.params.adventureId)
  .then((favourites) => {
    res.send('SUCCESS');
  })
  .catch((err) => {
    res.status(500).json({ error: err.message });
  });
})

module.exports = router;