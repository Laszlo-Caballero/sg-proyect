import { useState } from "react";
import FormularioEnvio from "./FormularioEnvio/FormularioEnvio";
import "./AdminPanel.css";
import CartaPrueba from "./cartaPruebas/cartaPrueba";
import EditarTabla from "./EditarTabla/EditarTabla";
import icono1out from "./cartaPruebas/icons/icono1out.png"; // Ruta relativa a la imagen
import icono2out from "./cartaPruebas/icons/icono2out.png";
function Adminpanel() {
  const [estadoenviar, setestadoenviar] = useState(false);
  const [estadoeditar, setestadoeditar] = useState(false);
  const functionEnviar = () => {
    setestadoenviar(!estadoenviar);
  };
  const funcionEditar = () => {
    setestadoeditar(!estadoeditar);
  };
  return (
    <>
      <div className="mainPruebas">
        <CartaPrueba
          url={icono1out}
          titulo="Enviar Archivos"
          descripcion="Envia Archivos desde el forntend"
          funcion={functionEnviar}
        />
        <CartaPrueba
          url={icono2out}
          titulo="Editar Database"
          descripcion="Edita la base de datos"
          funcion={funcionEditar}
        />
        {estadoenviar && <FormularioEnvio setestadoEnviar={setestadoenviar} />}
        {estadoeditar && <EditarTabla setestadoeditar={setestadoeditar} />}
      </div>
    </>
  );
}

export default Adminpanel;
