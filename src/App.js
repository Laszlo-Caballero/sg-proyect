import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navegador from "./components/nav/navegador";
function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navegador />
        </header>
        <Routes>
          <Route path="/" element={<div>s</div>} />
          <Route path="/cosas" element={<div>sea</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
