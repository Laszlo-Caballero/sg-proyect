import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>s</div>} />
          <Route path="/cosas" element={<div>cosas</div>} />
          <Route path="/hacer" element={<div>lista</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
