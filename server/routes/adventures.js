const express = require("express");
const router = express.Router();
const adventureQueries = require('../db/adventure_details_queries');
const listingQueries = require('../db/listings_queries');
//get adventure queries & adventures page

//gets all adventures a user created
router.get("/user/:id", (req, res) => {
  const id = req.params.id;
  adventureQueries.getAdventuresForUser(id)
    .then((details) => {
      res.json(details);
    })
    .catch((err) => {
      res.status(404).json({ error: err.message });
    });
});

//gets the details for an individual adventure page
router.get("/:id", (req, res) => {
  const id = req.params.id;
  adventureQueries.getAdventureDetails(id)
    .then((adventure) => {
      adventureQueries.getAvailibilty(id)
        .then((details) => {
          res.json({ details, adventure });
        });

    })
    .catch((err) => {
      res.status(404).json({ error: err.message });
    });
});

//delete adventure
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  listingQueries.deleteListing(id)
    .then(() => {
      res.status(200).json({ status: 'DELETED' });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;