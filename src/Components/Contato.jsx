export default function Contato() {
  return (
    <div className="bg-gray-800 border-l-4 border-lime-400 rounded-lg shadow-lg p-6  mx-auto text-white space-y-4 w-screen h-screen">
      <h2 className="text-2xl font-semibold flex justify-center ">
        Entre em Contato
      </h2>
      <div className="flex justify-center m-7 py-5 h-[80%] w-[100%] mt-10 ">
        <ul className="text-white space-y-5 space-x-5 ">
          <li className="mt-15 ">
            <strong>Email:</strong> erick.caetano1200@gmail.com
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a href="#" className="text-lime-300 hover:underline">
              linkedin.com/in/seu-perfil
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a href="#" className="text-lime-300 hover:underline">
              github.com/seu-usuario
            </a>
          </li>
        </ul>
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Seu Nome"
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu Email"
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
            required
          />
          <textarea
            name="message"
            placeholder="Sua Mensagem"
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 h-24"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold py-2 rounded transition"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
      &copy; Desenvolvido por Erick Caetano utilizando as seguintes Stacks React
      , Tailwindcss e Vite.
    </div>
  );
}
