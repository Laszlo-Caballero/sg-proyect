const express = require("express");
const router = express.Router();
const sqlC = require("../config/sqlC");
const connection = sqlC();

router.post("/", (req, res) => {
  const id = req.body.id;
  const { nombre } = req.body;
  res.json({ id: id, nombre: nombre });
});
router.use("/otraprueba", require("../controllers/otraprueba"));

router.get("/", (req, res) => {
  const correo = req.body;
  const verificar = `SELECT id FROM usuarios where correo="${correo}"`;
  connection.query(verificar, (error, result) => {
    if (error) {
      res.send("se puede registrar");
    } else {
      res.send("no se pudo registrar");
    }
  });
});

module.exports = router;
