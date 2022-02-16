const express = require("express");
const router = express.Router();
const listingQueries = require('../db/listings_queries')
//create, update, delete adventure form

//create an adventure
router.post("/create", (req, res) => {
  userId = req.session.user_id
  listingQueries.createListing(userId)
    .then((data) => {
     res.redirect('/')
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
})

router.put("/:id", (req, res) => {
  userId = req.session.user_id
  listingQueries.updateListing(userId, req.params.adventureId)
    .then((data) => {
    res.redirect('/')
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
})

//delete an adventure (will work when we work on front end)
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  listingQueries.deleteListing(id)
  .then((data) => {
    res.redirect('/')
   })
   .catch((err) => {
     res.status(500).json({ error: err.message });
   });
})

module.exports = router;