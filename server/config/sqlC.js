const mysql = require("mysql");

const sqlC = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "jade2314",
    database: "nodepgs",
  });

  connection.connect((err) => {
    if (err) {
      console.error(`ERROR AL CONECTARSE: ${err}`);
      return;
    } else {
      console.log("SE CONECTO CORRECTAMENTE");
    }
  });
  return connection;
};
module.exports = sqlC;
