import React from "react";
import { Link } from "react-router-dom";
import "./cartatabla.css";
function cartatabla() {
  return (
    <div
      className="carta"
      style={{ backgroundColor: "rgba(253, 128, 208, 0.4)" }}>
      <img className="cover" alt="cover" src={require(`./mvv 2_after.jpg`)} />
      <div
        className="cartaRecursos"
        style={{ backgroundColor: "rgba(25, 0, 16, 0.7)" }}>
        <p className="tituloCover"> Gira Me Veras Volver #2</p>
        <div className="botonCoverContenedor">
          <Link to={"/tabs/mvv2"}>
            <button className="botonCover">Ver tabs -{">"} </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default cartatabla;
