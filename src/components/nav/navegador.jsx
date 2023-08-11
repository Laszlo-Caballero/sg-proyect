import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import "./nav.css";
function navegador(props) {
  return (
    <>
      <ul className="nav">
        <li>
          <img className="logo" alt="logo" src={logo} />
        </li>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/nosotros">Nosotros</NavLink>
        </li>
        <li>
          <NavLink to="/tabs">Recursos</NavLink>
        </li>

        <li>
          <p onClick={props.funcionLogin}>Login</p>
        </li>
        <li>
          <p onClick={props.funcionRegister}>Registrarme</p>
        </li>
      </ul>
    </>
  );
}

export default navegador;
