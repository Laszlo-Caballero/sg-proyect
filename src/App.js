import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navegador from "./components/nav/navegador";
import Inicio from "./pages/inicio/inicio";
import Nosotros from "./pages/nosotros/nosotros";
import Recursos from "./pages/recursos/recursos";
import Final from "./components/footer/final";
import Pruebas from "./pages/pruebas/pruebas";
function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <header>
          <Navegador />
        </header>
      )}
      <section>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/tabs" element={<Recursos />} />
          <Route path="/login" element={<div>sea</div>} />
          <Route path="/register" element={<div>sea1</div>} />
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
