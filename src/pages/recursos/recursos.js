import Cartatabla from "../../components/cartatabla/cartatabla";
import axios from "axios";
import { useState, useEffect } from "react";
import "./recursos.css";
function Recursos() {
  let url = "https://localhost:3001";
  let peticion = "/api/albumes";
  const [estadodata, setEstadoData] = useState([]);
  const [estado, setEstado] = useState(false);
  useEffect(() => {
    axios
      .get(url + peticion)
      .then((response) => setEstadoData(response.data), setEstado(true))
      .catch((error) => console.log(error));
  }, [peticion, url]);
  return (
    <div className="main">
      {estado === true &&
        estadodata.map((datos) => {
          console.log(datos);
          return (
            <Cartatabla
              urlimagen={`https://localhost:3001/${datos.imagen}.${datos.tipo}`}
              titulo={datos.titulo}
              descripcion={datos.descripcion}
              enlace={datos.enlace}
            />
          );
        })}
    </div>
  );
}

export default Recursos;
