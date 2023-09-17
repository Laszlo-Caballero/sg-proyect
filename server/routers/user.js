const express = require("express");
const router = express.Router();

router.use("/register", require("./usuario/register"));
router.use("/login", require("./usuario/login"));
module.exports = router;
