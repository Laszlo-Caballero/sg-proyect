import React from "react";
import { Link } from "react-router-dom";
import Main from "./images/main.png";
import "./nosotros.css";

function nosotros() {
  return (
    <div className="container">
      <div className="texto">
        <h1 className="titulo">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem,
          amet.
        </h1>
        <p className="descripcion">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          enim totam pariatur ipsum alias non hic, quam expedita accusantium
          voluptatum vitae veritatis natus quisquam nesciunt eos, aliquam
          placeat eligendi sint.
        </p>
        <Link to="recursos">
          <button className="boton"> Lorem, ipsum.</button>
        </Link>
      </div>
      <div className="contenedor-img">
        <img className="portada" alt="portada" src={Main} />
      </div>
    </div>
  );
}

export default nosotros;
