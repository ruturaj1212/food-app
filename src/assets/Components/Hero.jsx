import React from "react";

const Hero = () => {
  return (
    <section id="home"
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/hero-bg.png')", // replace with your image
      }}
    >
      {/* Overlay to make text stand out if needed */}
      <div className="absolute inset-0 bg-white/20"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-5xl md:text-6xl font-serif font-medium text-gray-900 leading-tight">
          Best food for <br /> your taste
        </h1>
        <p className="mt-6 text-gray-600 text-lg">
          Discover delectable cuisine and unforgettable moments in our welcoming,
          culinary haven.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button className="border border-gray-800 px-6 py-3 rounded-full hover:bg-[#AD343E] hover:text-white transition">
            Book A Table
          </button>
          <button className="border border-gray-800 px-6 py-3 rounded-full hover:bg-[#AD343E] hover:text-white transition">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
