import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-gray-800 border-1 text-white px-2 py-1 rounded mr-1 flex justify-center ">
      <Link
        to="/home"
        className="border-2  shadow-lime-300/50 shadow-md p-2 m-5 rounded-2xl"
      >
        Home
      </Link>

      <Link
        to="/sobre"
        className="border-2  shadow-lime-300/50 shadow-md p-2 m-5 rounded-2xl"
      >
        Sobre
      </Link>
      <Link
        to="/tecnologias"
        className="border-2  shadow-lime-300/50 shadow-md p-2 m-5 rounded-2xl"
      >
        Tecnologias
      </Link>

      <Link
        to="/contato"
        className="border-2  shadow-lime-300/50 shadow-md p-2 m-5 rounded-2xl"
      >
        Contato
      </Link>
    </div>
  );
}
