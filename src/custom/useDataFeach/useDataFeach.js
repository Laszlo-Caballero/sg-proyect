import { useEffect, useState } from "react";
import axios from "axios";

function useDataFeach(url, metodo, estado = null, estadoDos = null) {
  const [estadodata, setEstadoData] = useState([]);
  useEffect(() => {
    axios[metodo](url)
      .then((response) => setEstadoData(response.data))
      .catch((error) => console.log(error));
  }, [estado, estadoDos, url, metodo]);

  return estadodata;
}

export default useDataFeach;
