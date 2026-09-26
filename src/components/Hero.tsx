import Banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-x-24 mt-[170px] container mx-auto px-20">

      {/* Left Side */}
      <div>
        <h1 className="text-6xl font-bold text-[#0F172A]">
          Build Your Ideal
        </h1>

       <h1 className="text-6xl font-bold brand-gradient-text mb-6 whitespace-nowrap w-max">
  Development Stack
</h1>

        <p className="text-gray-600 text-lg mb-12">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits
          your next project.
        </p>

        <div className="flex gap-15 mt-6">
          <button className="brand-gradient-bg text-white px-4 py-2 text-sm font-bold rounded-md">
            Explore Technologies
          </button>

          <button className="border border-gray-200 text-gray-600 text-sm font-medium px-8 py-2.5 rounded-lg bg-white">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="-mt-20 justify-self-end translate-x-12">
        <img
          src={Banner}
          alt="Development Stack"
          className="w-[520px] max-w-none"
        />
      </div>

    </div>
  );
};

export default Hero;