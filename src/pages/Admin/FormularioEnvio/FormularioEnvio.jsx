import React from "react";
import "./FormularioEnvio.css";
import { useState } from "react";
import axios from "axios";
import VentanaModal from "../../../components/ModalWindow/ModalWindow";
import FormElement from "../FormularioEnvio/LabelInput/LabelInput";
function FormularioEnvio({ setestadoEnviar }) {
  const [valorId, setvalorId] = useState("");
  const [valorTitulo, setvalorTitulo] = useState("");
  const [valorDescripcion, setvalorDescripcion] = useState("");
  const [valorEnlace, setvalorEnlace] = useState("");
  const [selecionarImagen, setImagen] = useState(null);
  const enviarDatos = (event) => {
    event.preventDefault();
    const url = `http://localhost:3001/api/fotos/`;
    const formdata = new FormData();
    formdata.append("id", valorId);
    formdata.append("titulo", valorTitulo);
    formdata.append("descripcion", valorDescripcion);
    formdata.append("enlace", valorEnlace);
    formdata.append("file", selecionarImagen);
    axios
      .post(url, formdata)
      .then((Response) => {
        console.log(Response.data);
        setvalorId("");
        setvalorTitulo("");
        setvalorDescripcion("");
        setvalorEnlace("");
        setImagen(null);
      })
      .catch((Error) => {
        console.error(Error);
      });
  };
  return (
    <>
      <VentanaModal
        setestadoModal={setestadoEnviar}
        width="500px"
        height="600px">
        <form className="containerFormulario" onSubmit={enviarDatos}>
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
                  setImagen(file);
                }}
                name="imagen"
                className="inputImagen"
              />
            )}
            {selecionarImagen && (
              <div className="containerEliminar">
                <p>{selecionarImagen.name}</p>
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
          <div className="containerBotonEnviar">
            <button type="submit" className="botonEnviarFormulario">
              Enviar Datos
            </button>
          </div>
        </form>
      </VentanaModal>
    </>
  );
}
export default FormularioEnvio;
