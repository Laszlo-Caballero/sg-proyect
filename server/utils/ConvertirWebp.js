const sharp = require("sharp");
const fs = require("fs");
function ConvertirWebp(file) {
  sharp(file.path)
    .webp()
    .toFile(
      `${__dirname}/../storage/${file.filename.split(".").shift()}.webp`,
      (err) => {
        if (err) {
          throw err;
        }
        fs.unlinkSync(file.path);
      }
    );
}

module.exports = ConvertirWebp;
