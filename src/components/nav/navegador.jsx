import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import "./nav.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteUsuer } from "../../features/users/userSlice";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function navegador(props) {
  const state = useSelector((state) => state.user);
  const [mostrarDiv, setMostrarDiv] = useState(false);
  const dispatch = useDispatch();

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
        {state.length === 0 ? (
          <>
            <li>
              <p onClick={props.funcionLogin}>Login</p>
            </li>
            <li>
              <p onClick={props.funcionRegister}>Registrarme</p>
            </li>
          </>
        ) : (
          <li>
            <div onClick={() => setMostrarDiv(!mostrarDiv)}>
              {state.map((datos) => {
                return (
                  <p key="192319734">
                    {datos.usuario}
                    <ArrowDropDownIcon />
                  </p>
                );
              })}
            </div>
            <div
              className="submenu"
              style={{ display: mostrarDiv ? "block" : "none" }}>
              <NavLink to="/usuario" onClick={() => setMostrarDiv(false)}>
                Usuario
              </NavLink>
              <p
                onClick={() => {
                  dispatch(deleteUsuer());
                }}>
                Cerrar Sesión
              </p>
            </div>
          </li>
        )}
      </ul>
    </>
  );
}

export default navegador;
