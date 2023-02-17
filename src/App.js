import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navegador from "./components/nav/navegador";
import Inicio from "./pages/inicio/inicio";
import Final from "./components/footer/final";
function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navegador />
        </header>
        <section>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/cosas" element={<div>sea</div>} />
          </Routes>
        </section>
        <footer>
          <Final />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
