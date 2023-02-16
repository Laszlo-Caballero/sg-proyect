import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>a</div>} />
          <Route path="/cosas" element={<div>cosas</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
