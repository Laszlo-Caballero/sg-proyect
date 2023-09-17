const agruparTitulo = require("../utils/agruparTitulo");
const ConvertirWebp = require("../utils/ConvertirWebp");
const { subirDBAlbumes } = require("../utils/subirDB");
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
  subirDBAlbumes(id, nombreFoto, "webp", subirTitulo, subriDescripcion, enlace);
  res.send("se envio");
};

module.exports = { subirFotos };
