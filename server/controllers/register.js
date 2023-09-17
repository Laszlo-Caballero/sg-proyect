const { registrarDB } = require("../utils/subirDB");

const register = (req, res) => {
  const { usuario, email, contraseña } = req.body;
  if (usuario != undefined && email != undefined && contraseña != undefined) {
    registrarDB(usuario, email, contraseña, res);
  } else {
    res.send(404);
  }
};

module.exports = register;
