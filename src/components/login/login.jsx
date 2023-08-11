import React from "react";
import "./login.css";
import Exit from "./exit.svg";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import ImagenFondo from "./imagenfondo.jpg";
function Login({ setestadoLogin }) {
  const [usuario, setUsuario] = useState("");
  const setvalorusuario = (event) => {
    setUsuario(event.target.value);
  };
  return (
    <>
      <div className="overlayLogin">
        <div className="contenedorLogin">
          <img className="imagenLogin" alt="login" src={ImagenFondo} />
          <div className="contenedorFormulario">
            <img
              className="exitLogin"
              onClick={() => {
                setestadoLogin(false);
              }}
              src={Exit}
            />
            <h1>login</h1>
            <form className="formularioLogin">
              <div className="continerColumnaLogin">
                <div className="divUsuario">
                  <AccountCircleIcon sx={{ fontSize: 30 }} />
                  <input type="text" id="usuario" onChange={setvalorusuario} />
                </div>
              </div>
              <div className="continerColumna">
                <label>Contraseña</label>
                <PasswordIcon sx={{ fontSize: 30 }} />

                <input type="text" id="usuario" onChange={setvalorusuario} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
