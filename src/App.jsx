import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Sobre from "./Components/Sobre";
import Tecnologias from "./Components/Tecnologias";
import Contato from "./Components/Contato";
import Home from "./Components/Home";
export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/contato" element={<Contato />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
