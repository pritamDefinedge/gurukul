import React from "react";
import journeyImg from "../../assets/journey.png";
import { motion } from "framer-motion";

const Journey: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-indigo-900/30 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section - Text Content (visible on all screens) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full text-center mb-12 lg:mb-0 lg:hidden"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Begin Your Journey to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Smart Trading{" "}
            </span>
            <span className="text-white/90">with Our Exceptional Courses</span>
          </h2>
        </motion.div>

        {/* Feature Box - For small/medium devices */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full max-w-md mx-auto mb-12 lg:hidden"
        >
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-2xl space-y-4 border border-white/20">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-1.5 rounded-full">
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
                Course Highlights
              </span>
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-white/80">
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 mt-0.5 shrink-0">✓</span>
                <span>
                  <strong className="text-white">
                    Become A Noiseless Trader
                  </strong>
                  <span className="block text-white/70">
                    Trade The Markets The P&F Way
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 mt-0.5 shrink-0">✓</span>
                <span>Trading Options Based On Options Charts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 mt-0.5 shrink-0">✓</span>
                <span>Relative Strength and Breadth Analysis</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 xl:gap-24">
          {/* Left: Text Content (hidden on small/medium, shown on large) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="hidden lg:block w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Begin Your Journey to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Smart Trading{" "}
              </span>
              <span className="text-white/90">
                with Our Exceptional Courses
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed md:leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              Expand your market knowledge with expert-guided courses focusing
              on various aspects of trading and investment
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="shine shine-anim relative overflow-hidden group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 border border-cyan-400/30 hover:border-white/30"
              >
                <span className="relative z-10">Join Us</span>
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="shine shine-anim px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 border border-white/20 hover:border-cyan-400 bg-white/10 hover:bg-white/20 text-white hover:text-cyan-200 backdrop-blur-sm"
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
            <div className="relative overflow-hidden rounded-3xl transition-transform duration-500 ease-in-out hover:scale-[1.02] shadow-2xl border-2 border-white/20 hover:border-cyan-400/50">
              <img
                src={journeyImg}
                alt="Stock market course preview"
                className="w-full h-auto max-h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          {/* Feature Box - For large screens (centered between left and right sections) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[-60px] sm:top-[-80px] 
    md:top-[10%] lg:top-[16%] xl:top-[18%] -translate-y-1/2 z-10 w-[320px]"
          >
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-2xl space-y-4 border border-white/20">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-1.5 rounded-full">
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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
                  Course Highlights
                </span>
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-300 mt-0.5 shrink-0">✓</span>
                  <span>
                    <strong className="text-white">
                      Become A Noiseless Trader
                    </strong>
                    <span className="block text-white/70">
                      Trade The Markets The P&F Way
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-300 mt-0.5 shrink-0">✓</span>
                  <span>Trading Options Based On Options Charts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-300 mt-0.5 shrink-0">✓</span>
                  <span>Relative Strength and Breadth Analysis</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - CTA (for small/medium devices) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full mt-12 text-center lg:hidden"
        >
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-6">
            Expand your market knowledge with expert-guided courses focusing on
            various aspects of trading and investment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="shine shine-anim relative overflow-hidden group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 border border-cyan-400/30 hover:border-white/30"
            >
              <span className="relative z-10">Join Us</span>
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="shine shine-anim px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 border border-white/20 hover:border-cyan-400 bg-white/10 hover:bg-white/20 text-white hover:text-cyan-200 backdrop-blur-sm"
            >
              Explore Courses
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
