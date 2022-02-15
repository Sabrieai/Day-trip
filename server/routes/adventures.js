const express = require("express");
const router = express.Router();
const adventureQueries = require('../db/adventure_details_queries')
//get adventure queries & adventures page

//gets all adventures a user created
router.get("/", (req, res) => {
  adventureQueries.getAdventuresForUser()
    .then((details) => {
      res.json(details)
    })
    .catch((err) => {
      res.status(404).json({ error: err.message });
    });
})

//gets the details for an individual adventure page
router.get("/:id", (req, res) => {
  adventureQueries.getAdventureDetails()
    .then((details) => {
      res.json(details)
    })
    .catch((err) => {
      res.status(404).json({ error: err.message });
    });
})


