const express = require("express");
const router = express.Router();
const subirArchivo = require("../utils/subirArchivo");
const { subirFotos } = require("../controllers/fotos");

//:id/:titulo/:descripcion/:enlace
router.post("/", subirArchivo.single("file"), subirFotos);

module.exports = router;
