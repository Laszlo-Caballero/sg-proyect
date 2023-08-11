const sqlC = require("../config/sqlC");
const connection = sqlC();

const subirDB = (id, nombre, tipo, titulo, descripcion, enlace) => {
  const comando = `INSERT INTO albumes (id, nombre, tipo, titulo, descripcion, enlace) values (${id}, "${nombre}", "${tipo}", "${titulo}", "${descripcion}", "${enlace}")`;
  connection.query(comando, (error, result) => {
    if (error) throw error;
    console.log("Se subio el Archivo y la data a la base de datos");
    console.log(result);
  });
};

module.exports = subirDB;
