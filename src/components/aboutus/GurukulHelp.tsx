import React from "react";

const features = [
  {
    title: "Expert Guidance",
    description:
      "Each course brings you a treasure trove of knowledge from our expert traders",
    image:
      "https://gurukul.definedgesecurities.com/wp-content/uploads/2022/07/h5-1.svg",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Grow Your Knowledge",
    description:
      "Elevate your trading experience and up-skill with courses for trader of each hue",
    image:
      "https://gurukul.definedgesecurities.com/wp-content/uploads/2022/07/h5-2.svg",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "In-depth Courses",
    description:
      "Every course dives deep into essential concepts, offering complete knowledge on it",
    image:
      "https://gurukul.definedgesecurities.com/wp-content/uploads/2022/07/h5-3.svg",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Flexible Learning",
    description:
      "All courses are self-paced, so you can explore concepts and learn conveniently",
    image:
      "https://gurukul.definedgesecurities.com/wp-content/uploads/2022/07/h5-4.svg",
    gradient: "from-rose-500 to-pink-600",
  },
];

const GurukulHelp: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-700/20 dark:from-blue-900/20 dark:to-blue-950/30 -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000" />

      <section className="w-full bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center mb-12 relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-4xl font-bold tracking-tight text-white mb-6">
            How Can <span className="text-yellow-300">Definedge Gurukul</span>{" "}
            Help You?
          </h2>
          <p className="text-base sm:text-base text-blue-100 dark:text-blue-200 max-w-3xl mx-auto leading-relaxed">
            With expert-led courses added continuously, Definedge Gurukul is
            your one-stop solution for trading education.
          </p>
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-8 pb-24 -mt-24 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient background overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Icon container with gradient border */}
              <div
                className={`relative mb-6 p-1 rounded-full bg-gradient-to-br ${feature.gradient} before:absolute before:inset-0 before:bg-white before:dark:bg-gray-800 before:rounded-full before:m-1 before:z-0`}
              >
                <div className="relative z-10 w-20 h-20 flex items-center justify-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              <h3
                className={`text-xl font-bold mb-3 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
              >
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative dot */}
              <div
                className={`absolute bottom-6 w-2 h-2 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GurukulHelp;
