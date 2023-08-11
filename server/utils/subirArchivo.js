const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const pahtRoute = `${__dirname}/../storage`;
    cb(null, pahtRoute);
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop();
    const filename = `file-${Date.now()}.${ext}`;
    cb(null, filename);
  },
});

const subirArchivo = multer({ storage });

module.exports = subirArchivo;
