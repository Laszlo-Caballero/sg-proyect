import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
function navegador() {
  return (
    <ul className="nav">
      <li>
        <NavLink to="/">Inicio</NavLink>
      </li>
      <li>
        <NavLink to="/nosotros">Nosotros</NavLink>
      </li>
      <li>
        <NavLink to="/tabs">Recursos</NavLink>
      </li>
      <li></li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="register">Registrarme</NavLink>
      </li>
    </ul>
  );
}

export default navegador;
