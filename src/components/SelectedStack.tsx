import type { Technology } from "./TechnologyType";

import {
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const SelectedStack = ({
  selectedTech,
  handleRemove,
  handleRemoveAll,
}: {
  selectedTech: Technology[];
  handleRemove: (id: number) => void;
  handleRemoveAll: () => void;
}) => {

  const getIcon = (technology: Technology) => {
    if (technology.name === "React") return <SiReact className="text-3xl text-cyan-500" />;
    if (technology.name === "Vue.js") return <SiVuedotjs className="text-3xl text-green-500" />;
    if (technology.name === "Svelte") return <SiSvelte className="text-3xl text-orange-500" />;
    if (technology.name === "Node.js") return <SiNodedotjs className="text-3xl text-green-600" />;
    if (technology.name === "Express.js") return <SiExpress className="text-3xl text-gray-700" />;
    if (technology.name === "Django") return <SiDjango className="text-3xl text-green-800" />;
    if (technology.name === "PostgreSQL") return <SiPostgresql className="text-3xl text-blue-600" />;
    if (technology.name === "MongoDB") return <SiMongodb className="text-3xl text-green-600" />;
    if (technology.name === "MySQL") return <SiMysql className="text-3xl text-blue-500" />;
    if (technology.name === "Tailwind CSS") return <SiTailwindcss className="text-3xl text-cyan-500" />;
    if (technology.name === "TypeScript") return <SiTypescript className="text-3xl text-blue-600" />;
    if (technology.name === "Vite") return <SiVite className="text-3xl text-purple-500" />;

    return null;
  };

  return (
    <div className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white">

      <h2 className="text-xl font-bold text-[#0F172A]">
        Your Stack
      </h2>

      <p className="text-sm text-gray-400 mt-1 mb-4">
        {selectedTech.length}{" "}
        {selectedTech.length === 1 ? "Technology" : "Technologies"} Selected
      </p>

      {selectedTech.map((technology) => (
        <div
          key={technology.id}
          className="border border-gray-200 rounded-lg p-3 mb-3 flex justify-between items-center"
        >

          <div className="flex items-center gap-3">

            {getIcon(technology)}

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
      ))}

      <button
        onClick={handleRemoveAll}
        className="w-full mt-6 border border-red-300 text-red-500 py-2 rounded-lg"
      >
        Remove All
      </button>

    </div>
  );
};

export default SelectedStack;