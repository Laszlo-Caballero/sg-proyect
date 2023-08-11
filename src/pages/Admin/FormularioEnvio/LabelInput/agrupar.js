const Agrupar = (texto) => {
  let textoArray = texto.split(" ");
  let textoAux = "";
  for (let i = 0; i < textoArray.length; i++) {
    textoAux += "_" + textoArray[i];
    if (i === 0) {
      textoAux = textoArray[i];
    }
  }
  return textoAux;
};

export default Agrupar;
