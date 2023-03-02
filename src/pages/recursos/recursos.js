import Cartatabla from "../../components/cartatabla/cartatabla";
import "./recursos.css";
function recursos() {
  const datosBD = [
    {
      titulo: "Gira Me Veras Volver #2",
      descripcion: "",
    },
  ];

  return (
    <div className="main">
      <Cartatabla />
      <Cartatabla />
      <Cartatabla />
      <Cartatabla />
      <Cartatabla />
      <Cartatabla />
      <Cartatabla />
    </div>
  );
}

export default recursos;
