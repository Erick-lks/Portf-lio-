import { useEffect, useState } from "react";
import Card from "./Card";
import Doing from "./Imagens/Doing.jpg";
import Itsme from "./Imagens/itsme.jpeg";
import Formacao from "./Imagens/Formacao.jpg";

const cardsData = [
  {
    title: "Apresentação!",
    description:
      "Me chamo Erick sou desenvolvedor full stack com foco em soluções práticas e eficientes. Tenho experiência do back ao front, com paixão por transformar ideias em sistemas funcionais. Curioso por natureza, estou sempre buscando melhorar e aprender. Código limpo, entrega ágil e café forte fazem parte do meu dia. ☕💻",
    imageUrl: Itsme,
  },
  {
    title: "Desenvolvimento!",
    description:
      "Atuei no desenvolvimento de soluções full stack, passando por automações com Puppeteer, APIs REST com Node.js e Spring Boot, interfaces em React e aplicações desktop com Electron. Sempre inicio com um planejamento sólido, entendendo bem o problema antes de codar. Também trabalhei com manipulação de arquivos CSV e Excel, garantindo fluxos eficientes e organizados do backend ao frontend.",
    imageUrl: Doing,
  },
  {
    title: "Formação!",
    description:
      "Sou formado em Análise e Desenvolvimento de Sistemas, com sólida base em arquitetura de computadores, estrutura de dados, design de software e práticas integradoras. Durante o curso, desenvolvi projetos voltados para BI, segurança da informação e governança de TI. Me destaquei em metodologias ágeis, análise de requisitos e planejamento estratégico, sempre priorizando o bom levantamento antes de iniciar qualquer desenvolvimento.",
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
      }, 2000); // duração do fade-out (4 segundos)
    }, 8000); // duração total de exibição do card (12 segundos)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-28  flex items-center justify-center">
      <section
        id="informacao"
        className={` transition-all duration-[1000ms] ease-in-out ${
          fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        } scroll-mt-30`}
      >
        <Card
          imageUrl={cardsData[index].imageUrl}
          title={cardsData[index].title}
          description={cardsData[index].description}
        />
      </section>
    </div>
  );
}
