import React from "react";

const Mission: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="w-11/12 max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-purple-500 to-pink-500 dark:from-cyan-400 dark:via-fuchsia-500 dark:to-pink-400">
            Vision & Mission
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-slate-300">
            What drives us forward as a community of traders and learners.
          </p>
        </div>

        {/* Main content block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text block */}
          <div className="space-y-10">
            <div className="relative pl-6 border-l-4 border-sky-500 dark:border-cyan-400">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
                🎯 Our Vision
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Empowering retail traders with well-researched, practical, and
                innovative trading concepts. Years of experience, simplified and
                shared.
              </p>
            </div>

            <div className="relative pl-6 border-l-4 border-pink-500 dark:border-pink-400">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
                🚀 Our Mission
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Building a community of disciplined, sensible, and noiseless
                traders. Learning together for mutual growth with practical
                insights and mentorship.
              </p>
            </div>

            <button
              className="shine shine-anim inline-block bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white px-6 py-2 rounded-full font-semibold shadow-md transition border border-transparent hover:border-black dark:hover:border-gray-200"
              aria-label="Get Started"
            >
              Get Started
            </button>
          </div>

          {/* Image block */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700">
              <img
                src="https://gurukul.definedgesecurities.com/wp-content/uploads/2024/01/MicrosoftTeams-image-1-1.png"
                alt="Illustration of Vision and Mission"
                className="object-cover w-full h-full p-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
