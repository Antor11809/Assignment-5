import type { Technology } from "./TechnologyType";

const TechnologyCard = ({
  technology,
  handleAddToStack,
}: {
  technology: Technology;
  handleAddToStack: (technology: Technology) => void;
}) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 shadow-sm">

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">
          {technology.name}
        </h2>

        <span className="text-xs bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
          {technology.badge}
        </span>
      </div>

      <p className="text-gray-500 mt-3">
        {technology.description}
      </p>

      <div className="flex justify-between mt-4 text-sm">
        <span className="text-gray-500">
          {technology.level}
        </span>

        <span>
          ⭐ {technology.rating}
        </span>
      </div>

      <button
        onClick={() => handleAddToStack(technology)}
        className="mt-5 w-full bg-pink-500 text-white py-2 rounded-lg"
      >
        Add to Stack
      </button>

    </div>
  );
};

export default TechnologyCard;