export default function Stacks() {
  return (
    <div className="bg-blue-500 min-h-150 p-10">
      <div className="flex flex-col md:flex-row gap-10 justify-center">
        {/* Habilidades */}
        <div className="bg-amber-200 w-full md:w-[700px] p-10 rounded-lg shadow-md text-center text-2xl">
          <h2 className="font-bold mb-4 underline text-3xl">Habilidades</h2>
          <div className="flex flex-col md:flex-row gap-6 text-left">
            {/* Soft Skills */}
            <div>
              <h4 className="font-semibold mb-2">Soft Skills</h4>
              <ul className="list-disc list-inside">
                <li>Comunicação eficaz</li>
                <li>Trabalho em equipe</li>
                <li>Resolução de problemas</li>
                <li>Proatividade</li>
                <li>Autogerenciamento</li>
                <li>Curiosidade / Sede de aprendizado</li>
              </ul>
            </div>

            {/* Hard Skills */}
            <div>
              <h4 className="font-semibold mb-2">Hard Skills</h4>
              <ul className="list-disc list-inside">
                <li>JavaScript</li>
                <li>Spring Boot (Java)</li>
                <li>Autenticação (JWT, OAuth, etc.)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Git / GitHub / GitLab</li>
                <li>Docker</li>
                <li>Banco de Dados</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projetos */}
        <div className="bg-amber-500 w-full md:w-[600px] p-10 rounded-lg shadow-md text-center text-2xl">
          <h3 className="font-bold mb-4 underline text-3xl">PROJETOS</h3>
          <ul className="list-disc list-inside text-left">
            <li>
              <a
                href="https://gerenciador-de-tarefas-gray.vercel.app/"
                className="hover:underline cursor-pointer"
              >
                Gerenciador de tarefas
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline cursor-pointer">
                LINK GITHUB 2
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline cursor-pointer">
                LINK GITHUB 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
