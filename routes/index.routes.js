const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All bad in here");
});

module.exports = router;
