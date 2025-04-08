import React from "react";
import Background from "../assets/Gurukul-BG.webp";

const Hero: React.FC = () => {
  return (
    <section
      className="relative z-10 overflow-hidden min-h-screen flex items-center px-6 sm:px-10 bg-white text-gray-300 dark:bg-gray-950 dark:text-white"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-20 max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Definedge Market <span className="text-blue-500">Gurukul</span>
          </h1>
          <p className="text-lg sm:text-xl font-medium mb-8 max-w-xl">
            Learn Stock Market Trading & Investment from Seasoned Experts. Gain
            practical knowledge and insights to master the markets.
          </p>
          <button className="shine shine-anim overflow-hidden inline-block mt-4 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white px-6 py-2 rounded-full font-medium shadow-md transition border border-transparent hover:border-white dark:hover:border-gray-200">
            Get Started
          </button>
        </div>

        {/* Optional right side */}
        <div className="hidden md:block"></div>
      </div>

      {/* Decorative dots */}
      <span className="absolute top-4 left-4 -z-10 opacity-50">
        <svg
          width="43"
          height="56"
          viewBox="0 0 43 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            {[...Array(5)].map((_, row) =>
              [...Array(4)].map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={41 - col * 13.17}
                  cy={1.5 + row * 13.17}
                  r="1.5"
                  transform="rotate(90)"
                  fill="currentColor"
                />
              ))
            )}
          </g>
        </svg>
      </span>
    </section>
  );
};

export default Hero;
