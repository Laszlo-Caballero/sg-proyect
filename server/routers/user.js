const express = require("express");
const router = express.Router();

router.use("/register", require("./usuario/register"));

module.exports = router;
