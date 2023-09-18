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
import { PortectedRoute } from "./components/ruta protegida/protectedRoute";
import { useSelector } from "react-redux";
function App() {
  const [estadoModalogin, setEstadoLogin] = useState(false);
  const [estadoModaRegister, setEstadoRegister] = useState(false);
  const login = () => {
    setEstadoLogin(!estadoModalogin);
  };
  const register = () => {
    setEstadoRegister(!estadoModaRegister);
  };
  const user = useSelector((state) => state.user);
  const estadoTipo = user[0]?.tipo || "";

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
          <Route
            path="/usuario"
            element={
              <PortectedRoute
                redireccionar="/tabs"
                permisos={user.length === 0}>
                <div>usuario normal</div>
              </PortectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PortectedRoute
                redireccionar="/tabs"
                permisos={user.length === 0 && estadoTipo != "admin"}>
                <Adminpanel />
              </PortectedRoute>
            }
          />
        </Routes>
      </section>
      <footer>
        <Final />
      </footer>
    </>
  );
}

export default App;
