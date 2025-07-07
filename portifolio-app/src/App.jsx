import "./App.css";
import Header from "./components/top/Header";
import Body from "./components/meio/Body";
import Footer from "./components/baixo/Footer";

import Particles from "./components/Particles";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden ">
      {/* Fundo animado colado em toda a tela */}
      <div className="fixed inset-0 -z-10 bg-black">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Conteúdo da aplicação por cima */}
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
