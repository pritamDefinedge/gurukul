import React from "react";
import instructor from "../../assets/instructor.webp";

function Instructor() {
  return (
    <section className="w-full bg-gradient-to-br bg-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-16 lg:gap-20">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              About your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                instructor
              </span>
            </h2>

            <div className="text-left space-y-4 text-sm sm:text-base md:text-md lg:text-md text-gray-700 dark:text-slate-300 font-medium leading-relaxed">
              <p>
                Prashant Shah is among the few professionals with highly
                respected designations in the trading world. He holds the
                Chartered Market Technician (CMT®), Certified Financial
                Technician (CFTe), and is the first in India to receive the
                Master of Financial Technical Analysis® certification from IFTA
                for original research on Line-break chart swing trading. He’s
                also a member of the Society of Technical Analysts, London.
              </p>
              <p>
                As an author of four books and a pioneer in popularizing ancient
                and rule-based charting methods in India, Prashant has
                modernized technical trading with an objective, structured
                approach—breathing new life into one of the world’s oldest
                techniques.
              </p>
            </div>

            <div className="pt-2">
              <button className="shine shine-anim w-full sm:w-auto px-6 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg transition duration-300">
                Know More
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <div className="border overflow-hidden border-transparent rounded-3xl bg-gradient-to-br from-blue-200 via-white to-purple-100 dark:from-gray-700 dark:to-gray-800 p-1">
              <img
                src={instructor}
                alt="Instructor"
                className="rounded-2xl w-full object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instructor;
