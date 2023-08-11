import "./LabelInput.css";
import Agrupar from "./agrupar";
import { useEffect } from "react";

function FormElement({ titulo, tipo, id, setestado, value = "" }) {
  useEffect(() => {
    if (value !== "" && isNaN(value)) {
      setestado(Agrupar(value));
    }
  }, [value, setestado]);
  const Setvalor = (event) => {
    setestado(Agrupar(event.target.value));
  };

  return (
    <div className="continerColumna">
      <label className="textFormulario">{titulo}</label>
      <input
        type={tipo}
        id={id}
        onChange={Setvalor}
        className="inputParte"
        value={value}
      />
    </div>
  );
}
export default FormElement;
