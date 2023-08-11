const agruparTitulo = require("../utils/agruparTitulo");
const subirDB = require("../utils/subirDB");
const ConvertirWebp = require("../utils/ConvertirWebp");
/**
 *
 * @param {*} req
 * @param {*} res
 */

const subirFotos = (req, res) => {
  const { file } = req;
  const nombreFoto = file.filename.split(".").shift();
  ConvertirWebp(file);
  const { id, titulo, descripcion, enlace } = req.body;
  const subirTitulo = agruparTitulo(titulo);
  const subriDescripcion = agruparTitulo(descripcion);
  subirDB(id, nombreFoto, "webp", subirTitulo, subriDescripcion, enlace);
  res.send("se envio");
};

module.exports = { subirFotos };
