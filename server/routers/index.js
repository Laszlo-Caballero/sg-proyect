const express = require("express");
const router = express.Router();
const fs = require("fs");

const DIRECTORIO_RUTAS = __dirname;

const eliminarExtencion = (fileName) => {
  return fileName.split(".").shift();
};

fs.readdirSync(DIRECTORIO_RUTAS).filter((file) => {
  const name = eliminarExtencion(file);
  if (name != "index" && name != "usuario") {
    router.use(`/${name}`, require(`./${file}`));
  }
});

module.exports = router;
