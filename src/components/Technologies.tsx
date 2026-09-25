
import { use } from "react";
import type { Technology } from "./TechnologyType";
import TechnologyCards from "./TechnologyCards";

const Technologies = ({
  techPromise,
}: {
  techPromise: Promise<Technology[]>;
}) => {

  const technologies = use(techPromise);

  return (
    <section className="container mx-auto px-20 py-20">

      <h2 className="text-4xl font-bold">
        Explore the <span className="text-pink-500">Technologies</span>
      </h2>

      <p className="text-gray-500 mt-2">
        Pick one technology per category to build your ideal stack.
      </p>

      <TechnologyCards technologies={technologies} />

    </section>
  );
};

export default Technologies;