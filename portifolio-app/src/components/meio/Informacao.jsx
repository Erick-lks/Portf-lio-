import { useEffect, useState } from "react";
import Card from "./Card";
import Doing from "./Imagens/Doing.jpg";
import Itsme from "./Imagens/itsme.jpeg";
import Formacao from "./Imagens/Formacao.jpg";

const cardsData = [
  {
    title: "SOBRE MIM!",
    description:
      "Olá, sou Erick Caetano! Um desenvolvedor apaixonado por tecnologia baseado em conviver com as novidades da atualidade. Transformo ideias em código e busco constantemente aprender e evoluir na área de desenvolvimento.",
    imageUrl: Itsme,
  },
  {
    title: "O QUE FAÇO",
    description:
      "Sou um desenvolvedor full-stack com experiência em criar soluções web inovadoras. Minha jornada na programação começou há [X] anos, e desde então venho construindo aplicações que fazem a diferença.",
    imageUrl: Doing,
  },
  {
    title: "FORMAÇÃO",
    description:
      "Bacharelado em [Seu Curso] - [Sua Universidade] (20XX-20XX). Certificação em [Tecnologia Relevante].",
    imageUrl: Formacao,
  },
];

export default function Informacao() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // inicia o fade-out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % cardsData.length);
        setFade(true); // inicia o fade-in
      }, 1000); // tempo da transição (1s)
    }, 4000); // tempo total de exibição de cada card (4s)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-15  flex items-center justify-center">
      <div
        className={` transition-all duration-[1000ms] ease-in-out ${
          fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <Card
          imageUrl={cardsData[index].imageUrl}
          title={cardsData[index].title}
          description={cardsData[index].description}
        />
      </div>
    </div>
  );
}
