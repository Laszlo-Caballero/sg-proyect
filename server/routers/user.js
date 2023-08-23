const express = require("express");
const router = express.Router();
const { userDb } = require("../controllers/user");

router.post("/", userDb);

module.exports = router;
