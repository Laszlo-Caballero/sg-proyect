require("dotenv").config();
const express = require("express");
const sqlC = require("./config/sqlC");
const cors = require("cors");
const app = express();
const bodyparser = require("body-parser");
const port = process.env.PORT;

console.clear();
app.use(cors());
app.use(bodyparser.json());
app.use("/api", require("./routers"));
app.use(express.static("storage"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
