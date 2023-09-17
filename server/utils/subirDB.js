const sqlC = require("../config/sqlC");
const connection = sqlC();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const subirDBAlbumes = (id, nombre, tipo, titulo, descripcion, enlace) => {
  const comando = `INSERT INTO albumes (id, nombre, tipo, titulo, descripcion, enlace) values (${id}, "${nombre}", "${tipo}", "${titulo}", "${descripcion}", "${enlace}")`;
  connection.query(comando, (error, result) => {
    if (error) throw error;
    console.log("Se subio el Archivo y la data a la base de datos");
    console.log(result);
  });
};

const registrarDB = (usuario, correo, contraseña, res) => {
  const comando = `INSERT INTO usuarios(usuario, correo, contraseña) VALUES  ("${usuario}", "${correo}", "${contraseña}")`;
  const verificar = `SELECT id FROM usuarios WHERE correo="${correo}" OR usuario= "${usuario}"`;
  connection.query(verificar, (error, result) => {
    if (result.length == 0) {
      connection.query(comando, (error, result) => {
        if (error) throw error;
        const id = result.insertId;
        const secretkey = process.env.Password;
        const token = jwt.sign({ id }, secretkey);
        const comando = `INSERT INTO token(user_id, token) VALUES (${id}, "${token}")`;
        connection.query(comando, (error, result) => {
          if (error) throw error;
          res.json({ mensaje: "se registro correctamente" });
        });
      });
    } else {
      res
        .status(401)
        .json({ error: "hay una persona con el correo o el usuario" });
    }
  });
};
module.exports = { subirDBAlbumes, registrarDB };
