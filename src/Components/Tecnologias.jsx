export default function Tecnologias() {
  return (
    <div className=" bg-gray-600 border-x-4 mb-8 border-lime-400 rounded shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-2xl hover:shadow-green-400/50 h-screen w-screen">
      <h2 className="text-white text-2xl  font-bold tracking-tight py-4 flex justify-center mb-5 center">
        🛠️ Habilidades Técnicas
      </h2>
      <div className="flex justify-around p -6 text-white">
        <ul className="space-y-1 col-end-1 ">
          <p className="text-white text-2xl  font-bold tracking-tight py-4 flex justify-center mb-5 center">
            Frontend
          </p>
          <li>HTML5/CSS3</li>
          <li>JAVASCRIPT</li>
          <li>REACT</li>
          <li>TAILWINDCSS</li>
        </ul>

        <ul className="space-y-1 col-end-2 text-white">
          <p className="text-white text-2xl  font-bold tracking-tight py-4 flex justify-center mb-5 center">
            Backend
          </p>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>Java</li>
          <li>SpringBoot</li>
        </ul>

        <ul className="space-y-1 col-end-3 text-white">
          <p className="text-white text-2xl  font-bold tracking-tight py-4 flex justify-center mb-5 center mb-8">
            Ferramentas
          </p>
          <li>Git</li>
        </ul>
      </div>{" "}
      <br />
      <h2 className="text-white text-2xl  font-bold tracking-tight py-4 flex justify-center mb-5 center">
        Experiência Profissional
      </h2>
      <ul className="underline text-white text-xl grid grid-flow-row place-items-center ">
        <li className="col-span-2 mb-4">
          [Empresa Atual] - Desenvolvedor Full Stack (2023-presente)
        </li>
        <li className="col-span-2 mb-4">
          [Empresa Anterior] - Desenvolvedor Front-end (2021-2023)
        </li>
      </ul>
      <p className="text-white text-2xl  font-bold tracking-tight py-4 flex justify-center mb-5 center">
        🚀 Projetos em Destaque
      </p>
      <ul className="underline text-white text-xl grid grid-flow-row place-items-center ">
        <li className="col-span-2 mb-4">link repositorio</li>
        <li className="col-span-2">link repositorio</li>
      </ul>
    </div>
  );
}
