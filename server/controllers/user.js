const jwt = require("jsonwebtoken");

const userDb = (req, res) => {
  const { user, password } = req.body;
  const secretkey = "laszlo";
  const token = jwt.sign({ user, password }, secretkey);
  res.json({ token: token });
};

module.exports = { userDb };
