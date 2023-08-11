import { useState } from "react";
import { Link } from "react-router-dom";
import Play from "./play.png";
import "./Albumcard.css";

function Albumcard(props) {
  const [hovered, sethover] = useState(false);

  const onhover = () => {
    sethover(true);
  };
  const leavehover = () => {
    sethover(false);
  };
  return (
    <div
      onMouseEnter={onhover}
      onMouseLeave={leavehover}
      className="carta"
      style={{ backgroundColor: "#252525" }}>
      <div className="imagenesCover">
        <img className="cover" alt="cover" src={props.urlimagen} />
        <Link to={props.enlace}>
          <img
            className="iconoCover"
            alt="play"
            src={Play}
            style={{ display: hovered ? "" : "none" }}
          />
        </Link>
      </div>
      <div className="cartaRecursos">
        <p className="tituloCover"> {props.titulo}</p>
        <p className="descripcionCover">{props.descripcion}</p>
      </div>
    </div>
  );
}

export default Albumcard;
