import { useState } from "react";
import { Link } from "react-router-dom";
import "./cartatabla.css";

function Cartatabla() {
  const [hovered, sethover] = useState(false);

  const onhover = () => {
    sethover(true);
    console.log(hovered);
  };
  const leavehover = () => {
    sethover(false);
    console.log(hovered);
  };
  return (
    <div
      onMouseEnter={onhover}
      onMouseLeave={leavehover}
      className="carta"
      style={{ backgroundColor: "#252525" }}>
      <div className="imagenesCover">
        <img className="cover" alt="cover" src={require(`./mvv 2_after.jpg`)} />
        <Link to={"mvv2"}>
          <img
            className="iconoCover"
            alt="play"
            src={require("./play.png")}
            style={{ display: hovered ? "" : "none" }}
          />
        </Link>
      </div>
      <div className="cartaRecursos">
        <p className="tituloCover"> Gira Me Veras Volver #2</p>
        <p className="descripcionCover">2008 - Soda Stereo</p>
      </div>
    </div>
  );
}

export default Cartatabla;
