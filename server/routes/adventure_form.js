/* eslint-disable camelcase */
const express = require("express");
const router = express.Router();
const listingQueries = require('../db/listings_queries');
//create, update, delete adventure form

//create an adventure
router.post("/", (req, res) => {
  // userId = req.session.user_id;
  const owner_id = req.body.owner_id;
  const title = req.body.title;
  const description = req.body.description;
  const thumbnail_photo_url = req.body.thumbnail_photo_url;
  const cover_photo_url = req.body.cover_photo_url;
  const prev_price = req.body.prev_price;
  const curr_price = req.body.curr_price;
  const accessible = req.body.accessible;
  const street = req.body.street;
  const city = req.body.city;
  const province_state = req.body.province_state;
  const post_code_zip = req.body.post_code_zip;
  const country = req.body.country;
  const active = req.body.active;
  const is_full = req.body.is_full;
  const max_occupancy = req.body.max_occupancy;
  const season = req.body.season;
  const category = req.body.category;
  listingQueries.createListing(owner_id, title, description, thumbnail_photo_url, cover_photo_url, prev_price, curr_price, accessible, street, city, province_state, post_code_zip, country, active, is_full, max_occupancy, season, category)
    .then((data) => {
      listingQueries.createAvailability(data[0].id)
        .then((data) => {
          console.log(data);
          res.send('YOU MADE AN ADVENTURE');
        });
      
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.put("/", (req, res) => {
  // userId = req.session.user_id
  const adventure = req.body.adventure;
  const title = req.body.title;
  const description = req.body.description;
  const thumbnail_photo_url = req.body.thumbnail_photo_url;
  const cover_photo_url = req.body.cover_photo_url;
  const prev_price = req.body.prev_price;
  const curr_price = req.body.curr_price;
  const accessible = req.body.accessible;
  const street = req.body.street;
  const city = req.body.city;
  const province_state = req.body.province_state;
  const post_code_zip = req.body.post_code_zip;
  const country = req.body.country;
  const active = req.body.active;
  const is_full = req.body.is_full;
  const max_occupancy = req.body.max_occupancy;
  const season = req.body.season;
  const category = req.body.category;
  listingQueries.updateListing(adventure, title, description, thumbnail_photo_url, cover_photo_url, prev_price, curr_price, accessible, street, city, province_state, post_code_zip, country, active, is_full, max_occupancy, season, category)
    .then((data) => {
      //res.send(data);
      console.log(`DATA`, data);
      res.status(200).json({ status: 'SAVED'});
     
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;