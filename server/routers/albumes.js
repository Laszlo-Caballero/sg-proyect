const express = require("express");
const router = express.Router();
const {
  pedirDatos,
  eliminarDatos,
  actualizarDatos,
} = require("../controllers/albumes");
const subirArchivo = require("../utils/subirArchivo");

router.get("/", pedirDatos);

router.delete("/:id/:nombre", eliminarDatos);

router.put(
  "/:id/:idu/:nombre?/:tipo?/:titulo/:descripcion/:enlace",
  subirArchivo.single("file"),
  actualizarDatos
);

module.exports = router;
