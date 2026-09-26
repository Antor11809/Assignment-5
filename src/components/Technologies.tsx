import { use, useState } from "react";
import type { Technology } from "./TechnologyType";
import TechnologyCards from "./TechnologyCards";
import SelectedStack from "./SelectedStack";

const Technologies = ({
  techPromise,
}: {
  techPromise: Promise<Technology[]>;
}) => {

  const technologies = use(techPromise);

  const [selectedTech, setSelectedTech] = useState<Technology[]>([]);

  const handleAddToStack = (technology: Technology) => {
    setSelectedTech([...selectedTech, technology]);
  };

  const handleRemove = (id: number) => {
    const remainingTech = selectedTech.filter(
      (technology) => technology.id !== id
    );

    setSelectedTech(remainingTech);
  };

  return (
    <section className="container mx-auto px-20 py-20">

      <h2 className="text-4xl font-bold">
        Explore the <span className="text-pink-500">Technologies</span>
      </h2>

      <p className="text-gray-500 mt-2">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-3 gap-8 mt-8">

        <div className="col-span-2">
          <TechnologyCards
            technologies={technologies}
            handleAddToStack={handleAddToStack}
          />
        </div>

        <div>
          <SelectedStack
            selectedTech={selectedTech}
            handleRemove={handleRemove}
          />
        </div>

      </div>

    </section>
  );
};

export default Technologies;