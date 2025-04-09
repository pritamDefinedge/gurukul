import React from "react";
import { motion } from "framer-motion";
import background from "../../assets/aboutusbackround.svg";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative bg-no-repeat bg-cover bg-center px-6 py-24 md:py-32 overflow-hidden dark:bg-gray-800"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Optional floating glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-800 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-blue-800 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-400 dark:text-blue-900 leading-tight mb-6"
        >
          About Us
        </motion.h1>
      </div>
    </section>
  );
};

export default HeroSection;
