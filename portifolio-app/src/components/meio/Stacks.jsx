
import Card from "./Card";

export default function Stacks() {
  return (
    <div className="bg-blue-500">
      <div>
        <h3>Skills</h3>

        <Card title="HABILIDADES" description="soft skills e hard skills" />

        <Card
          title="PROJETOS"
          description="Links de projetos existentes no GITHUB"
        />
      </div>
    </div>
  );
}
