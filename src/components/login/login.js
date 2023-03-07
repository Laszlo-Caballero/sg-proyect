import React from "react";
import "./login.css";
import { ReactComponent as Exit } from "./exit.svg";
function login({ setestadoLogin }) {
  return (
    <>
      <div className="overlayLogin">
        <div className="contenedorLogin">
          <img
            className="imagenLogin"
            alt="login"
            src={require("./imagenfondo.jpg")}
          />
          <div className="contenedorFormulario">
            <Exit
              className="exitLogin"
              onClick={() => {
                setestadoLogin(false);
              }}
            />
            <h1>login</h1>
            <form>
              <label>usuario</label>
              <input name="asd" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
