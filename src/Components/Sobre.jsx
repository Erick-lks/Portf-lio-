export default function Sobre() {
  return (
    <div className=" bg-gray-600 border-x-4 mb-8 border-lime-400 rounded shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-2xl hover:shadow-green-400/50 h-screen w-screen">
      <h1 className="text-5xl text-amber-50 p-3 flex justify-center mt-8">
        Site Pessoal
      </h1>
      <p className="text-white text-2xl  font-bold tracking-tight py-4 flex justify-center mb-5 center">
        Olá, sou Erick Caetano! Um desenvolvedor apaixonado por tecnologia
        baseado em conviver com as novidades da atualizade. <br /> Transformo
        ideias em código e busco constantemente aprender e evoluir na área de
        desenvolvimento.
      </p>

      <h2 className="text-white text-2xl  font-bold tracking-tight py-4 flex justify-center mb-5 center">
        👋 Sobre Mim
      </h2>
      <p className="text-white text-2xl  font-bold tracking-tight py-4 flex justify-center ml-2">
        Sou um desenvolvedor full-stack com experiência em criar soluções web
        inovadoras. <br />
        Minha jornada na programação começou há [X] anos, e desde então venho
        construindo aplicações que fazem a diferença.
      </p>
      <h2 className="text-white text-2xl  font-bold tracking-tight py-4 flex justify-center mb-5 center">
        🎓 Formação
      </h2>
      <ul className=" text-white  text-2xl font-bold tracking-tight py-4 flex justify-center mb-5">
        <li>Bacharelado em [Seu Curso] - [Sua Universidade] (20XX-20XX)</li>
        <li>Certificação em [Tecnologia Relevante]</li>
      </ul>
    </div>
  );
}
