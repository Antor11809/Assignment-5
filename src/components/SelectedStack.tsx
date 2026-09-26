import type { Technology } from "./TechnologyType";

const SelectedStack = ({
  selectedTech,
  handleRemove,
  handleRemoveAll,
}: {
  selectedTech: Technology[];
  handleRemove: (id: number) => void;
  handleRemoveAll: () => void;
}) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white">

      <h2 className="text-xl font-bold text-[#0F172A]">
        Your Stack
      </h2>

      <p className="text-sm text-gray-400 mt-1 mb-4">
        {selectedTech.length}{" "}
        {selectedTech.length === 1 ? "Technology" : "Technologies"} Selected
      </p>

      {selectedTech.length === 0 ? (
        <p className="text-gray-400 text-sm text-center py-8">
          Your stack is empty. Add technologies to build your stack.
        </p>
      ) : (
        selectedTech.map((technology) => (
          <div
            key={technology.id}
            className="border border-gray-200 rounded-lg p-3 mb-3 flex justify-between items-center"
          >
            <div className="flex items-center gap-3">

              <img
                src={technology.icon}
                alt={technology.name}
                className="w-8 h-8"
              />

              <div>
                <p className="font-semibold">
                  {technology.name}
                </p>

                <p className="text-xs text-gray-400">
                  {technology.category}
                </p>
              </div>

            </div>

            <button
              onClick={() => handleRemove(technology.id)}
              className="text-gray-400 text-xl"
            >
              ×
            </button>
          </div>
        ))
      )}

      {selectedTech.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="w-full mt-6 border border-red-300 text-red-500 py-2 rounded-lg"
        >
          Remove All
        </button>
      )}

    </div>
  );
};

export default SelectedStack;