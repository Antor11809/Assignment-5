import type { Technology } from "./TechnologyType";
import TechnologyCard from "./TechnologyCard";

const TechnologyCards = ({
  technologies,
}: {
  technologies: Technology[];
}) => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-8">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
        />
      ))}
    </div>
  );
};

export default TechnologyCards;