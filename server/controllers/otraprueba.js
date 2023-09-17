const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("holas");
});

module.exports = router;
