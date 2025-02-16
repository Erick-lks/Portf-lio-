import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/catbox.json"; // Baixe um JSON de animação

export default function Home() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl font-bold"
        >
          Bem-vindo ao Meu Portfólio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg mt-4"
        >
          Desenvolvedor Full Stack | React | Node.js
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 bg-lime-500 text-gray-900 rounded-xl shadow-lg hover:bg-lime-400 transition"
        >
          Ver Projetos
        </motion.button>{" "}
        <br />
        <Lottie
          animationData={animationData}
          loop={true}
          className=" w-90 h-90 m-8"
        />
      </motion.div>
    </div>
  );
}
