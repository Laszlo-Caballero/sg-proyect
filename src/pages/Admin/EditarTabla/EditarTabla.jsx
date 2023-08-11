import "./EditarTabla.css";
import { useMemo, useState } from "react";
import { useTable } from "react-table";
import useDataFeach from "../../../custom/useDataFeach/useDataFeach";
import EliminarTabla from "./EliminarTabla/EliminarTabla";
import VentanaModal from "../../../components/ModalWindow/ModalWindow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FormularioTabla from "./FormularioTabla/FormularioTabla";
function EditarTabla({ setestadoeditar }) {
  const [estadoEliminar, setestadoEliminar] = useState(false);
  const [estadoEditar, setestadoEditar] = useState(false);
  const [numeroId, setnumeroId] = useState(0);
  const [nombreImagen, setNombreImagen] = useState("");
  const [objetoFormulario, setobjetoFormulario] = useState({
    id: "",
    nombre: "",
    tipo: "",
    titulo: "",
    descripcion: "",
    enlace: "",
  });
  const url = "http://localhost:3001/api/albumes";
  const datostabla = useDataFeach(url, "get", estadoEliminar, estadoEditar);
  const columns = useMemo(
    () => [
      { Header: "Id", accessor: "id" },
      { Header: "Titulo", accessor: "titulo" },
      { Header: "Descipcion", accessor: "descripcion" },
      { Header: "Enlace", accessor: "enlace" },
      {
        Header: "Editar",
        accessor: "editar",
        Cell: ({ row }) => (
          <div className="continerBotonesEditar">
            <button
              className="botonesEditar"
              onClick={() => {
                setestadoEditar(!estadoEditar);
                const actualizarObjeto = {
                  id: datostabla[parseInt(row.id)].id,
                  nombre: datostabla[parseInt(row.id)].nombre,
                  tipo: datostabla[parseInt(row.id)].tipo,
                  titulo: datostabla[parseInt(row.id)].titulo,
                  descripcion: datostabla[parseInt(row.id)].descripcion,
                  enlace: datostabla[parseInt(row.id)].enlace,
                };
                setobjetoFormulario(actualizarObjeto);
              }}>
              <EditIcon />
            </button>
            <button
              className="botonesEditar"
              onClick={() => {
                setnumeroId(datostabla[parseInt(row.id)].id);
                setNombreImagen(datostabla[parseInt(row.id)].nombre);
                setestadoEliminar(!estadoEliminar);
              }}>
              <DeleteIcon />
            </button>
          </div>
        ),
      },
    ],
    [datostabla, estadoEliminar, estadoEditar]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: datostabla });
  return (
    <VentanaModal
      setestadoModal={setestadoeditar}
      width="1400px"
      height="600px">
      <div className="containerTabla">
        <table {...getTableProps()} className="tabla">
          <thead>
            {headerGroups.map((grupoCabecera) => (
              <tr
                {...grupoCabecera.getHeaderGroupProps()}
                className="cabezeraFila">
                {grupoCabecera.headers.map((columna) => (
                  <th {...columna.getHeaderProps()} className="cabezeraColumna">
                    {columna.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="cuerpoTabla">
            {rows.map((fila) => {
              prepareRow(fila);
              return (
                <tr {...fila.getRowProps()} className="cuerpoFila">
                  {fila.cells.map((celda) => (
                    <td {...celda.getCellProps()} className="cuerpoCelda">
                      {celda.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {estadoEliminar && (
        <EliminarTabla
          setestadoEliminar={setestadoEliminar}
          id={numeroId}
          nombreImagen={nombreImagen}
        />
      )}
      {estadoEditar && (
        <FormularioTabla
          setestadoEditar={setestadoEditar}
          id={objetoFormulario.id}
          titulo={objetoFormulario.titulo}
          descripcion={objetoFormulario.descripcion}
          enlace={objetoFormulario.enlace}
          imagennombre={objetoFormulario.nombre}
          imagentipo={objetoFormulario.tipo}
        />
      )}
    </VentanaModal>
  );
}

export default EditarTabla;
