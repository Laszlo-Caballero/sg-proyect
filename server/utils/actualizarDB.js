const sqlC = require("../config/sqlC");
const connection = sqlC();

const actualizarDB = (id, idu, nombre, tipo, titulo, descripcion, enlace) => {
  const comando = `UPDATE albumes SET id="${idu}", nombre="${nombre}", tipo="${tipo}", titulo="${titulo}", descripcion="${descripcion}", enlace="${enlace}"  WHERE id = "${id}";`;
  connection.query(comando, (error, result) => {
    if (error) throw error;
    console.log("se actulizo");
    console.log(result);
  });
};
module.exports = actualizarDB;
