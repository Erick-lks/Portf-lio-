import Lottie from "lottie-react";
import animationData from "../../assets/devpeople.json";
import Informacao from "./Informacao";
import Stacks from "./Stacks";

export default function Body() {
  return (
    <div className="w-full h-full bg-blue-100 text-center">
      <div className="bg-yellow-900">
        <h2>Bem-vindo ao Meu Portifólio</h2>

        <h3>
          Desenvolvedor Full Stack | React | Node.js | Java | Spring Bootnpm ru{" "}
        </h3>
        <div className="w-64 mx-auto mt-4">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
      *
      <Informacao />
      //
      <Stacks />
    </div>
    //

    //
  );
}
