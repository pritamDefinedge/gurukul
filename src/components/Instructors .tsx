import React from "react";

const instructors = [
  {
    name: "Abhijit Phatak",
    image:
      "https://gurukul.definedgesecurities.com/wp-content/uploads/2024/12/Abhijit-Phatak-Gurukul-1.jpg",
    url: "https://gurukul.definedgesecurities.com/lp-profile/Abhijit/",
  },
  {
    name: "Prashant Shah",
    image:
      "https://gurukul.definedgesecurities.com/wp-content/uploads/2024/12/Prashant-Shah-Gurukul.jpg",
    url: "https://gurukul.definedgesecurities.com/lp-profile/PShah/",
  },
  {
    name: "Brijesh Bhatia",
    image:
      "https://gurukul.definedgesecurities.com/wp-content/uploads/2024/12/Brijesh-Bhatia-Gurukul.jpg",
    url: "https://gurukul.definedgesecurities.com/lp-profile/Bbhatia/",
  },
  {
    name: "D Prasad",
    image:
      "https://gurukul.definedgesecurities.com/wp-content/uploads/2024/12/D-Prasad-Gurukul.jpg",
    url: "https://gurukul.definedgesecurities.com/lp-profile/D_Prasad/",
  },
];

const Instructors: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-white dark:via-slate-300 dark:to-slate-100 animate-fade-in-up">
            Our Instructors
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
            Bring Trading & Investing to Life with Engaging, Expert-Led Video
            Courses
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <a
              href={instructor.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group block rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 transition-all hover:shadow-lg hover:ring-2 hover:ring-cyan-500/40"
            >
              <div className=" w-full overflow-hidden">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-center text-lg font-semibold text-slate-800 dark:text-white">
                  {instructor.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
