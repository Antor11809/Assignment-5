import type { Technology } from "./TechnologyType";

const SelectedStack = ({
  selectedTech,
}: {
  selectedTech: Technology[];
}) => {
  return (
    <div>
      <h2>Your Stack</h2>

      {selectedTech.map((technology) => (
        <p key={technology.id}>
          {technology.name}
        </p>
      ))}
    </div>
  );
};

export default SelectedStack;