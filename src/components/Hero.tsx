import Banner from "../assets/banner-stack.png"

const Hero = () => {
    return (
        <div className="grid grid-cols-2 mt-[170px] container mx-auto px-20 mb-10 " >
            {/*LEFT SIDE  */}
<div>
  <h1 className="text-6xl font-bold text-[#0F172A]">
    Build Your Ideal
  </h1>

<h1 className="text-6xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
  Development Stack
</h1>

  <p className="text-gray-600 text-lg  mb-12">
    Explore frontend, backend, database, and tooling options,
    compare them side by side, and put together the stack that fits
    your next project.
  </p>
  {/* Button */}
  <div className="flex gap-15 mt-6">
  <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600  text-white px-4 py-2  text-sm font-bold rounded-md">Explore Technologies</button>
<button className="border border-gray-200 text-gray-600 text-sm font-medium px-8 py-2.5 rounded-lg bg-white">
  Learn More
</button>
</div>

</div>

{/* banner */}
<div className="-mt-20 justify-self-end translate-x-26">
  <img
    src={Banner}
    alt=""
    className="w-[520px] max-w-none"
  />
</div>

        </div>


    );
};

export default Hero;