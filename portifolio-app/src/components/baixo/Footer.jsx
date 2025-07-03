import Card from "../meio/Card";

export default function Footer() {
  return (
    <div className="bg-pink-300 h-15 w-full text-center">
      <h3>Rodape</h3>

      <div className="bg-blue-900">
        <h3>Contato</h3>

        <Card
          title="ENTRE EM CONTATO"
          description="Quadro com logica para enviar emails"
        />
      </div>
    </div>
  );
}
