import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navegador from "./components/nav/navegador";
import Login from "./components/login/login";
import Inicio from "./pages/inicio/inicio";
import Nosotros from "./pages/nosotros/nosotros";
import Recursos from "./pages/recursos/recursos";
import Final from "./components/footer/final";
import Pruebas from "./pages/pruebas/pruebas";
import { useState } from "react";
function App() {
  const [estadoModalogin, setEstadoLogin] = useState(false);
  const [estadoModaRegister, setEstadoRegister] = useState(false);

  return (
    <>
      <header>
        <Navegador
          funcionLogin={() => {
            setEstadoLogin(!estadoModalogin);
          }}
          funcionRegister={() => {
            setEstadoRegister(!estadoModaRegister);
          }}
        />
      </header>
      <section>
        {estadoModalogin && (
          <Login
            setestadoLogin={setEstadoLogin}
            estadoLogin={estadoModalogin}
          />
        )}

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/tabs" element={<Recursos />} />
          <Route path="/pruebas" element={<Pruebas />} />
        </Routes>
      </section>
      <footer>
        <Final />
      </footer>
    </>
  );
}

export default App;
