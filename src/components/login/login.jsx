import React from "react";
import "./login.css";
import VentanaModal from "../ModalWindow/ModalWindow";
import ceratiLogin from "./ceratiLogin.webp";
import ClearIcon from "@mui/icons-material/Clear";
import { grey } from "@mui/material/colors";
import { useForm } from "react-hook-form";
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/users/userSlice";
import Cookies from "js-cookie";
function Login({ setestadoLogin }) {
  const dispatch = useDispatch();
  const url = `http://localhost:3001/api/user/login`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post(url, data)
      .then((response) => {
        const datosJson = JSON.stringify(response.data);
        Cookies.set("userData", datosJson);
        dispatch(addUser(response.data));
        console.log(response.data);
        setestadoLogin(false);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };
  return (
    <>
      <VentanaModal
        setestadoModal={setestadoLogin}
        width="950px"
        height="700px"
        exit={false}>
        <div className="contenedorLogin">
          <img src={ceratiLogin} />
          <div className="contenedorFomurlarioLogin">
            <div className="exitcontainerLogin">
              <button
                onClick={() => {
                  setestadoLogin(false);
                }}
                className="exitLogin">
                <ClearIcon sx={{ color: grey[50] }} />
              </button>
            </div>
            <form className="formularioLogin" onSubmit={handleSubmit(onSubmit)}>
              <label>Login</label>
              <div className="divInputLogin">
                <EmailIcon fontSize="large" />
                <input
                  type="email"
                  {...register("email", {
                    required: "Se requiere correo",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Ingresa un correo electrónico válido",
                    },
                  })}
                  className="inputLogin"
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>

              <div className="divInputLogin">
                <PasswordIcon fontSize="large" />
                <input
                  {...register("contraseña", {
                    required: "Se requiere contraseña",
                  })}
                  type="password"
                  className="inputLogin"
                />
                {errors.contraseña && <p>{errors.contraseña.message}</p>}
              </div>
              <input
                type="submit"
                value="enviar"
                className="inputEnviarLogin"
              />
            </form>
          </div>
        </div>
      </VentanaModal>
    </>
  );
}

export default Login;
