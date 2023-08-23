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
  const formdata = new FormData();
  const url = "http://localhost:3001/api/albumes";
  const enviar = (e) => {
    e.preventDefault();
    if (selecionarImagen.name) {
      formdata.append("file", selecionarImagen);
      formdata.append("id", valoridOriginal);
      formdata.append("idu", valorId);
      formdata.append("titulo", valorTitulo);
      formdata.append("descripcion", valorDescripcion);
      formdata.append("enlace", valorEnlace);
      axios
        .put(url, formdata)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      formdata.append("id", valoridOriginal);
      formdata.append("idu", valorId);
      formdata.append("nombre", selecionarImagen.nombre);
      formdata.append("tipo", selecionarImagen.tipo);
      formdata.append("titulo", valorTitulo);
      formdata.append("descripcion", valorDescripcion);
      formdata.append("enlace", valorEnlace);
      axios
        .put(url, formdata)
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
