import React from "react";
import journeyImg from "../../assets/journey.png";
import { motion } from "framer-motion";

const Journey: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/60 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 xl:gap-24">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Begin Your Journey to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Smart Trading{" "}
              </span>
              <span className="text-gray-800 dark:text-slate-200">
                with Our Exceptional Courses
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-700 dark:text-slate-300 leading-relaxed">
              Expand your market knowledge with expert-guided courses focusing
              on various aspects of trading and investment
            </p>

            <button className="shine shine-anim inline-block mt-4 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white px-6 py-2 rounded-full font-medium shadow-md transition border border-transparent hover:border-white dark:hover:border-gray-200">
              Join Us
            </button>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative overflow-hidden rounded-3xl transition-transform duration-500 ease-in-out hover:scale-[1.03]">
              <img
                src={journeyImg}
                alt="Stock market course preview"
                className="w-auto max-h-[500px] mx-auto object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Floating Feature List - Centered on both sides */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="hidden lg:flex absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 z-10"
        >
          <div className="bg-white/30 dark:bg-blue-900/40 backdrop-blur-md p-6 rounded-xl shadow-xl space-y-4 w-[320px] border border-white/20 dark:border-white/10">
            <ul className="space-y-3 text-sm sm:text-base text-gray-800 dark:text-gray-100">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-cyan-400 mt-1">✔</span>
                <span>
                  <strong>Become A Noiseless Trader</strong>
                  <br />– Trade The Markets The P&amp;F Way
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-cyan-400 mt-1">✔</span>
                Trading Options Based On Options Charts
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-cyan-400 mt-1">✔</span>
                Relative Strength and Breadth Analysis
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
