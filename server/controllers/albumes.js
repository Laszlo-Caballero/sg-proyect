const sqlC = require("../config/sqlC");
const connection = sqlC();
const actualizarDB = require("../utils/actualizarDB");
const agruparTitulo = require("../utils/agruparTitulo");
const ConvertirWebp = require("../utils/ConvertirWebp");
const fs = require("fs");

const pedirDatos = (req, res) => {
  connection.query("SELECT * FROM albumes", (error, result) => {
    if (error) throw error;
    res.send(result);
  });
};

const eliminarDatos = (req, res) => {
  const { id, nombre } = req.params;
  try {
    fs.unlinkSync(`${__dirname}/../storage/${nombre}.webp`);
  } catch (err) {
    console.error("error al tratar de eliminar el archivo");
  }
  connection.query(`DELETE FROM Albumes WHERE id=${id}`, (error, result) => {
    if (error) throw error;
    res.send(result);
    console.log(result);
  });
};

const actualizarDatos = (req, res) => {
  const { file } = req;
  const { id, idu, titulo, descripcion, enlace } = req.body;
  const nombre = req.body.nombre || file.filename.split(".").shift();
  if (file != null) {
    ConvertirWebp(file);
  }
  const actualizarTitulo = agruparTitulo(titulo);
  const actualizarDescripcion = agruparTitulo(descripcion);
  const actualizarEnlace = agruparTitulo(enlace);
  actualizarDB(
    id,
    idu,
    nombre,
    "webp",
    actualizarTitulo,
    actualizarDescripcion,
    actualizarEnlace
  );
  res.send("se actualizo");
};

module.exports = { pedirDatos, eliminarDatos, actualizarDatos };
