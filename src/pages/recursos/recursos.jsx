import Albumcard from "../../components/AlbumCard/Albumcard";
import useDataFeach from "../../custom/useDataFeach/useDataFeach";
import "./recursos.css";
function Recursos() {
  const url = "http://localhost:3001/api/albumes";
  const estadodata = useDataFeach(url, "get");
  return (
    <div className="main">
      {estadodata.map((datos) => {
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
    </div>
  );
}

export default Recursos;
