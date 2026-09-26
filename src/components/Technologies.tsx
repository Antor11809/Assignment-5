import { use, useState } from "react";
import { toast } from "react-toastify";
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
    const alreadySelected = selectedTech.some(
      (item) => item.id === technology.id
    );

    if (alreadySelected) {
      toast.warning(`${technology.name} is already selected!`);
      return;
    }

    setSelectedTech([...selectedTech, technology]);

    toast.success(
      `${technology.name} technology selected successfully!`
    );
  };

  const handleRemove = (id: number) => {
    const removedTechnology = selectedTech.find(
      (technology) => technology.id === id
    );

    const remainingTech = selectedTech.filter(
      (technology) => technology.id !== id
    );

    setSelectedTech(remainingTech);

    if (removedTechnology) {
      toast.info(
        `${removedTechnology.name} removed from stack!`
      );
    }
  };

  const handleRemoveAll = () => {
    setSelectedTech([]);

    toast.info("All technologies removed from stack!");
  };

  return (
    <section className="container mx-auto px-20 py-20">

      <h2 className="text-4xl font-bold">
        Explore the{" "}
        <span className="text-pink-500">
          Technologies
        </span>
      </h2>

      <p className="text-gray-500 mt-2">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-4 gap-6 mt-8">

        <div className="col-span-3">
          <TechnologyCards
            technologies={technologies}
            selectedTech={selectedTech}
            handleAddToStack={handleAddToStack}
          />
        </div>

        <div className="col-span-1">
          <SelectedStack
            selectedTech={selectedTech}
            handleRemove={handleRemove}
            handleRemoveAll={handleRemoveAll}
          />
        </div>

      </div>

    </section>
  );
};

export default Technologies;