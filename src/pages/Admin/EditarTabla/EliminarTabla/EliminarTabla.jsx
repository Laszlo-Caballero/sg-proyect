import { green } from "@mui/material/colors";
import VentanaModal from "../../../../components/ModalWindow/ModalWindow";
import "./EliminarTabla.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import axios from "axios";

function EliminarTabla({ setestadoEliminar, id, nombreImagen }) {
  const eliminardb = (ideliminar) => {
    const url = `http://localhost:3001/api/albumes/${ideliminar}/${nombreImagen}`;
    axios
      .delete(url)
      .then((response) => {
        console.log(response.data);
        setestadoEliminar(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <VentanaModal
      setestadoModal={setestadoEliminar}
      width="400px"
      height="600px">
      <div className="containerBotonEliminar">
        <CheckCircleOutlineIcon sx={{ fontSize: 400, color: green[200] }} />
        <p>Seguro deseas eliminar el elemento?</p>
        <button
          onClick={() => {
            eliminardb(id);
          }}
          className="botonEliminar">
          Eliminar
        </button>
      </div>
    </VentanaModal>
  );
}

export default EliminarTabla;
