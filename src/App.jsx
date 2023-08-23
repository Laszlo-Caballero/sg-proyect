import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navegador from "./components/nav/navegador";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Inicio from "./pages/inicio/inicio";
import Nosotros from "./pages/nosotros/nosotros";
import Recursos from "./pages/recursos/recursos";
import Final from "./components/footer/final";
import { useState } from "react";
import Adminpanel from "./pages/Admin/AdminPanel";

function App() {
  const [estadoModalogin, setEstadoLogin] = useState(false);
  const [estadoModaRegister, setEstadoRegister] = useState(false);
  const login = () => {
    setEstadoLogin(!estadoModalogin);
  };
  const register = () => {
    setEstadoRegister(!estadoModaRegister);
  };
  return (
    <>
      <header>
        <Navegador funcionLogin={login} funcionRegister={register} />
      </header>
      <section>
        {estadoModalogin && <Login setestadoLogin={setEstadoLogin} />}
        {estadoModaRegister && (
          <Register setEstadoRegister={setEstadoRegister} />
        )}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="tabs/*" element={<Recursos />}></Route>
          <Route path="pruebas" element={<Adminpanel />} />
        </Routes>
      </section>
      <footer>
        <Final />
      </footer>
    </>
  );
}

export default App;
