function agruparTitulo(titulo) {
  let tituloArray = titulo.split("_");
  let tituloAux = "";
  for (let i = 0; i < tituloArray.length; i++) {
    tituloAux += " " + tituloArray[i];
    if (i == 0) {
      tituloAux = tituloArray[i];
    }
  }
  return tituloAux;
}

module.exports = agruparTitulo;
