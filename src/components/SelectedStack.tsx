import type { Technology } from "./TechnologyType";

const SelectedStack = ({
  selectedTech,
  handleRemove,
}: {
  selectedTech: Technology[];
  handleRemove: (id: number) => void;
}) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white">

      <h2 className="text-xl font-bold text-[#0F172A] mb-4">
        Your Stack
      </h2>

      {selectedTech.map((technology) => (
        <div
          key={technology.id}
          className="border border-gray-200 rounded-lg p-3 mb-3 flex justify-between items-center"
        >
          <p className="font-semibold">
            {technology.name}
          </p>

          <button
            onClick={() => handleRemove(technology.id)}
            className="text-red-500 text-sm"
          >
            Remove
          </button>
        </div>
      ))}

    </div>
  );
};

export default SelectedStack;