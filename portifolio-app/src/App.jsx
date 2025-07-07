import "./App.css";
import Header from "./components/top/Header";
import Body from "./components/meio/Body";
import Footer from "./components/baixo/Footer";

import DotGrid from "./components/DotGrid";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fundo animado colado em toda a tela */}
      <div className="fixed inset-0 -z-10">
        <DotGrid />
      </div>

      {/* Conteúdo da aplicação por cima */}
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
