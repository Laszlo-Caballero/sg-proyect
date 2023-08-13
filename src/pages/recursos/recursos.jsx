import Albumcard from "../../components/AlbumCard/Albumcard";
import useDataFeach from "../../custom/useDataFeach/useDataFeach";
import { Route, Routes } from "react-router-dom";
import AlbumMusic from "./AlbumMusic/AlbumMusic";
import "./recursos.css";
function Recursos() {
  const url = "http://localhost:3001/api/albumes";
  const estadodata = useDataFeach(url, "get");
  return (
    <div className="main">
      <Routes>
        <Route
          path="/"
          element={estadodata.map((datos) => {
            return (
              <Albumcard
                key={datos.id}
                urlimagen={`http://localhost:3001/${datos.nombre}.${datos.tipo}`}
                titulo={datos.titulo}
                descripcion={datos.descripcion}
                enlace={datos.enlace}
              />
            );
          })}
        />
        <Route path=":album" element={<AlbumMusic />} />
      </Routes>
    </div>
  );
}

export default Recursos;
