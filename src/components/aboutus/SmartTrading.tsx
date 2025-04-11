import React from "react";
import journeyImg from "../../assets/journey.png";
import { motion } from "framer-motion";

const Journey: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/60 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 xl:gap-24">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Begin Your Journey to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Smart Trading{" "}
              </span>
              <span className="text-gray-800 dark:text-slate-200">
                with Our Exceptional Courses
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-700 dark:text-slate-300 leading-relaxed md:leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              Expand your market knowledge with expert-guided courses focusing
              on various aspects of trading and investment
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="shine shine-anim relative overflow-hidden group shine-anim bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 border border-transparent hover:border-white/30"
              >
                <span className="relative z-10">Join Us</span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=" px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Explore Courses
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative overflow-hidden rounded-3xl transition-transform duration-500 ease-in-out hover:scale-[1.02] shadow-xl border border-gray-200 dark:border-gray-700">
              <img
                src={journeyImg}
                alt="Stock market course preview"
                className="w-full h-auto max-h-[700px] object-cover"
              />
            </div>
          </motion.div>

          {/* Feature Box - Positioned between sections on large screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden lg:flex absolute z-10 w-[90%] max-w-[320px] sm:max-w-[520px] sm:w-[320px] left-1/2 -translate-x-1/2 top-[-60px] sm:top-[-80px] 
    md:top-[10%] lg:top-[16%] xl:top-[18%] md:-translate-y-1/2"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-6 rounded-xl shadow-2xl space-y-4 border border-white/30 dark:border-gray-700/50">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-1.5 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Course Highlights
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-cyan-400 mt-0.5 shrink-0">
                    ✓
                  </span>
                  <span>
                    <strong className="text-gray-900 dark:text-white">
                      Become A Noiseless Trader
                    </strong>
                    <span className="block text-gray-600 dark:text-gray-400">
                      Trade The Markets The P&F Way
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-cyan-400 mt-0.5 shrink-0">
                    ✓
                  </span>
                  <span>Trading Options Based On Options Charts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-cyan-400 mt-0.5 shrink-0">
                    ✓
                  </span>
                  <span>Relative Strength and Breadth Analysis</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
