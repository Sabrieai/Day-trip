const express = require("express");
const router = express.Router();
const listingQueries = require('../db/listings_queries')
//create, update, delete adventure form

//create an adventure
router.post("/create", (req, res) => {
  userId = req.session.id
  listingQueries.createListing(userId)
    .then((data) => {
     res.redirect('/')
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
})

router.post("/update/:id", (req, res) => {
  userId = req.session.id
  listingQueries.updateListing(userId, req.params.adventureId)
    .then((data) => {
    res.redirect('/')
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
})

//delete an adventure
router.post("/delete/:id", (req, res) => {
  listingQueries.deleteListing(req.params.adventureId)
  .then((data) => {
    res.redirect('/')
   })
   .catch((err) => {
     res.status(500).json({ error: err.message });
   });
})