import React from "react";
import { motion } from "framer-motion";

const Jumbotron: React.FC = () => {
  return (
    <div className="relative w-full min-h-[400px] md:min-h-[500px] bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center overflow-hidden">
      {/* Floating blurred shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20 dark:opacity-10"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-purple-700 rounded-full filter blur-3xl opacity-20 dark:opacity-10"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold  text-gray-900 dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400">
              Definedge {" "}
            </span>
            is India’s first trading products and education company turned
            brokerage firm.
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-8 text-base  sm:text-md md:text-md lg:text-lg xl:text-xl text-gray-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed"
          >
            With a team of market analysts, trade strategists and software
            professionals, we strive to simplify the trading and investment
            journey for our subscribers. Over the years, we have created
            exceptional products for analysis, trading and education, creating a
            comprehensive trading universe for traders of all levels and skills.
            Today, we cater to over 1.5 million traders and investors across the
            nation, offering exceptional solutions, studies and resources that
            aid their trading journey.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Jumbotron;
