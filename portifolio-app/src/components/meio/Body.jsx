import Lottie from "lottie-react";
import animationData from "../../assets/devpeople.json";
import Informacao from "./Informacao";
import Stacks from "./Stacks";

export default function Body() {
  return (
    <div className="w-full h-full bg-blue-100 text-center">
      <div className="bg-yellow-900 pt-15
       text-4xl grid gap-6 font-mono">
        <h2>Bem-vindo ao Meu Portifólio</h2>

        <h3>
          Desenvolvedor Full Stack | React | Node.js | Java | Spring Boot{" "}
        </h3>
        <div className="w-150 mx-auto mt-15 h-150 ">
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
