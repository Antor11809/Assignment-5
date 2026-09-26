import type { Technology } from "./TechnologyType";

const TechnologyCard = ({
  technology,
  handleAddToStack,
  isSelected,
}: {
  technology: Technology;
  handleAddToStack: (technology: Technology) => void;
  isSelected: boolean;
}) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 shadow-sm">

      <img
        src={technology.icon}
        alt={technology.name}
        className="w-10 h-10 mb-3"
      />

      <div className="flex justify-between items-center">

        <h2 className="text-xl font-bold text-[#0F172A]">
          {technology.name}
        </h2>

        <span
          className={`text-xs px-3 py-1 rounded-full ${
            technology.id === 1
              ? "bg-pink-100 text-pink-600"
              : technology.id === 2
              ? "bg-green-100 text-green-600"
              : technology.id === 3
              ? "bg-orange-100 text-orange-600"
              : technology.id === 4
              ? "bg-blue-100 text-blue-600"
              : technology.id === 5
              ? "bg-purple-100 text-purple-600"
              : technology.id === 6
              ? "bg-emerald-100 text-emerald-600"
              : technology.id === 7
              ? "bg-indigo-100 text-indigo-600"
              : technology.id === 8
              ? "bg-lime-100 text-lime-700"
              : technology.id === 9
              ? "bg-cyan-100 text-cyan-600"
              : technology.id === 10
              ? "bg-teal-100 text-teal-600"
              : technology.id === 11
              ? "bg-violet-100 text-violet-600"
              : "bg-amber-100 text-amber-600"
          }`}
        >
          {technology.badge}
        </span>

      </div>

      <p className="text-gray-500 text-sm mt-3">
        {technology.description}
      </p>

      <div className="flex justify-between items-center mt-4 text-sm">

        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded font-semibold">
          {technology.category}
        </span>

        <span className="text-gray-500">
          {technology.difficulty}
        </span>

        <span>
          ⭐ {technology.rating}
        </span>

      </div>

      <button
        onClick={() => handleAddToStack(technology)}
        disabled={isSelected}
        className={`mt-5 w-full py-2 rounded-lg text-white font-medium ${
          isSelected
            ? "bg-gray-400 cursor-not-allowed"
            : "brand-gradient-bg"
        }`}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;