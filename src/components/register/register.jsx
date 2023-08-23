import VentanaModal from "../ModalWindow/ModalWindow";
import "./register.css";
import ceratiRegister from "./ceratiregister.webp";
import ClearIcon from "@mui/icons-material/Clear";
import { grey } from "@mui/material/colors";
import { useForm } from "react-hook-form";
function Register({ setEstadoRegister }) {
  const {
    register,
    handleSubmit,
    formState: { errors, touched },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
              <input
                type="text"
                {...register("usuario", { required: "Se requiere Usuario" })}
              />
              {errors.usuario && <p>{errors.Usuario.message}</p>}
              <input
                type="email"
                {...register("email", {
                  required: "Se requiere correo",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Ingresa un correo electrónico válido",
                  },
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}
              <input
                {...register("contraseña", {
                  required: "Se requiere contraseña",
                })}
                type="password"
              />
              {errors.contraseña && <p>{errors.contraseña.message}</p>}
              <input type="submit" value="enviar" />
            </form>
          </div>
          <img src={ceratiRegister} />
        </div>
      </VentanaModal>
    </>
  );
}

export default Register;
