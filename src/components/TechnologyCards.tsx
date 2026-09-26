import type { Technology } from "./TechnologyType";
import TechnologyCard from "./TechnologyCard";

const TechnologyCards = ({
  technologies,
  selectedTech,
  handleAddToStack,
}: {
  technologies: Technology[];
  selectedTech: Technology[];
  handleAddToStack: (technology: Technology) => void;
}) => {
  return (
    <div className="grid grid-cols-3 gap-6">

      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          handleAddToStack={handleAddToStack}
          isSelected={selectedTech.some(
            (item) => item.id === technology.id
          )}
        />
      ))}

    </div>
  );
};

export default TechnologyCards;