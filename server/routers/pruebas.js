const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const id = req.body.id;
  const { nombre } = req.body;
  res.json({ id: id, nombre: nombre });
});

module.exports = router;
