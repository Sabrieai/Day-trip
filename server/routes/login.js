const express = require("express");
const router = express.Router();

router.get("/login/:id", (req, res) => {
  const userId = req.session.id;
  res.session("userId", userId);
  res.redirect("/");
});

module.exports = router;