import { useState } from "react";
import playIcon from "./play.png";
import "./cartaPrueba.css";

function CartaPrueba(props) {
  const [hovered, sethover] = useState(false);

  const onhover = () => {
    sethover(true);
  };
  const leavehover = () => {
    sethover(false);
  };
  const url = props.url;
  return (
    <div
      onMouseEnter={onhover}
      onMouseLeave={leavehover}
      className="carta"
      style={{ backgroundColor: "#252525" }}>
      <div className="imagenesCover">
        <img className="coverPruebas" alt="cover" src={url} />
        <img
          className="iconoCoverPruebas"
          alt="play"
          src={playIcon}
          style={{ display: hovered ? "" : "none" }}
          onClick={props.funcion}
        />
      </div>
      <div className="cartaRecursos">
        <p className="tituloCover"> {props.titulo}</p>
        <p className="descripcionCover">{props.descripcion}</p>
      </div>
    </div>
  );
}

export default CartaPrueba;
