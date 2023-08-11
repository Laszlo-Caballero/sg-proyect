import { grey } from "@mui/material/colors";
import "./modal.css";
import ClearIcon from "@mui/icons-material/Clear";
function VentanaModal({ setestadoModal, width, height, children }) {
  const Estilos = { width, height };
  return (
    <div className="overlayModal">
      <div className="mainModal" style={Estilos}>
        <div className="exitcontainer">
          <button
            onClick={() => {
              setestadoModal(false);
            }}
            className="exitbuttom">
            {" "}
            <ClearIcon sx={{ color: grey[50] }} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default VentanaModal;
