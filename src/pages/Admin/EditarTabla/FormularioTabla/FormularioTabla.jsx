import { useState } from "react";
import "./FormularioTabla.css";
import VentanaModal from "../../../../components/ModalWindow/ModalWindow";
import FormElement from "../../FormularioEnvio/LabelInput/LabelInput";
import axios from "axios";
function FormularioTabla({
  setestadoEditar,
  id,
  titulo,
  descripcion,
  enlace,
  imagennombre,
  imagentipo,
}) {
  const [valorId, setvalorId] = useState(id);
  const [valoridOriginal] = useState(id);
  const [valorTitulo, setvalorTitulo] = useState(titulo);
  const [valorDescripcion, setvalorDescripcion] = useState(descripcion);
  const [valorEnlace, setvalorEnlace] = useState(enlace);
  const [selecionarImagen, setImagen] = useState({
    nombre: imagennombre,
    tipo: imagentipo,
  });
  const enviar = (e) => {
    e.preventDefault();
    let url;
    if (selecionarImagen.name) {
      const formdata = new FormData();
      formdata.append("file", selecionarImagen);
      url = `http://localhost:3001/api/albumes/${valoridOriginal}/${valorId}/${valorTitulo}/${valorDescripcion}/${valorEnlace}`;
      axios
        .put(url, formdata)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      url = `http://localhost:3001/api/albumes/${valoridOriginal}/${valorId}/${selecionarImagen.nombre}/${selecionarImagen.tipo}/${valorTitulo}/${valorDescripcion}/${valorEnlace}`;
      axios
        .put(url)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <VentanaModal setestadoModal={setestadoEditar} width="500px" height="600px">
      <form className="containerFormulario" onSubmit={enviar}>
        <FormElement
          tipo="text"
          titulo="id"
          id="id"
          setestado={setvalorId}
          value={valorId}
        />
        <FormElement
          tipo="text"
          titulo="Titulo"
          id="titulo"
          setestado={setvalorTitulo}
          value={valorTitulo}
        />
        <FormElement
          tipo="text"
          titulo="Descripcion"
          id="descripcion"
          setestado={setvalorDescripcion}
          value={valorDescripcion}
        />
        <FormElement
          tipo="text"
          titulo="Enlace"
          id="enlace"
          setestado={setvalorEnlace}
          value={valorEnlace}
        />
        <div className="continerColumnaImagen">
          <label className="textFormulario">Selecione el Archivo</label>
          {!selecionarImagen && (
            <input
              type="file"
              onChange={(event) => {
                const file = event.target.files[0];
                console.log(file);
                setImagen(file);
              }}
              name="imagen"
              className="inputImagen"
            />
          )}
          {selecionarImagen && (
            <div className="containerEliminar">
              <p>
                {selecionarImagen.nombre
                  ? selecionarImagen.nombre + "." + selecionarImagen.tipo
                  : selecionarImagen.name}
              </p>
              <button
                onClick={() => {
                  setImagen(null);
                }}
                className="botonEliminar">
                Eliminar Selecion
              </button>
            </div>
          )}
        </div>
        <div className="containerBotonActualizar">
          <button type="submit" className="botonActualizarFormulario">
            Enviar Datos
          </button>
        </div>
      </form>
    </VentanaModal>
  );
}

export default FormularioTabla;
