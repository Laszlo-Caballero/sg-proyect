import { useState } from "react";
import { Link } from "react-router-dom";
import "./cartatabla.css";

function Cartatabla(props) {
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
            src={require("./play.png")}
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

export default Cartatabla;
