import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navegador from "./components/nav/navegador";
import Inicio from "./pages/inicio/inicio";
import Final from "./components/footer/final";
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
          <Route path="/login" element={<div>sea</div>} />
          <Route path="/register" element={<div>sea1</div>} />
        </Routes>
      </section>
      <footer>
        <Final />
      </footer>
    </>
  );
}

export default App;
