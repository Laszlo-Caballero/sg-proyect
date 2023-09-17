const sqlC = require("../config/sqlC");
const connection = sqlC();

const login = (req, res) => {
  const { email, contraseña } = req.body;
  const comando = `select usuario, correo, contraseña, token from usuarios inner join token on usuarios.id = token.user_id where correo = "${email}" and contraseña = "${contraseña}"`;
  connection.query(comando, (error, result) => {
    if (result.length) {
      res.send(result);
    } else {
      res
        .status(404)
        .json({ error: "no se pudo encontrar el usuario o correo" });
    }
  });
};

module.exports = login;
