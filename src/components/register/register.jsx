import VentanaModal from "../ModalWindow/ModalWindow";
import "./register.css";
import ceratiRegister from "./ceratiregister.webp";
import ClearIcon from "@mui/icons-material/Clear";
import { grey } from "@mui/material/colors";
import { useForm } from "react-hook-form";
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import axios from "axios";
function Register({ setEstadoRegister }) {
  const url = `http://localhost:3001/api/user/register`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post(url, data)
      .then((response) => {
        console.log("se registro");
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };
  return (
    <>
      <VentanaModal
        setestadoModal={setEstadoRegister}
        width="950px"
        height="700px"
        exit={false}>
        <div className="contenedorRegister">
          <div className="contenedorFormularioRegister">
            <div className="exitcontainerRegister">
              <button
                onClick={() => {
                  setEstadoRegister(false);
                }}
                className="exitbuttom">
                <ClearIcon sx={{ color: grey[50] }} />
              </button>
            </div>
            <form
              className="formularioRegister"
              onSubmit={handleSubmit(onSubmit)}>
              <label>Register</label>
              <div className="divInputRegister">
                <PersonIcon fontSize="large" />
                <input
                  type="text"
                  {...register("usuario", { required: "Se requiere Usuario" })}
                  className="inputRegister"
                />
                {errors.usuario && <p>{errors.usuario.message}</p>}
              </div>

              <div className="divInputRegister">
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
                  className="inputRegister"
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>

              <div className="divInputRegister">
                <PasswordIcon fontSize="large" />
                <input
                  {...register("contraseña", {
                    required: "Se requiere contraseña",
                  })}
                  type="password"
                  className="inputRegister"
                />
                {errors.contraseña && <p>{errors.contraseña.message}</p>}
              </div>
              <input
                type="submit"
                value="enviar"
                className="inputEnviarRegister"
              />
            </form>
          </div>
          <img src={ceratiRegister} />
        </div>
      </VentanaModal>
    </>
  );
}

export default Register;
