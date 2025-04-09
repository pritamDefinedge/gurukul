import React from "react";
import stockImg from "../../assets/stock.png";
import { motion } from "framer-motion";

const Stock: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/60 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-16 xl:gap-24">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative overflow-hidden rounded-3xl  transition-transform duration-500 ease-in-out hover:scale-[1.03]">
              <img
                src={stockImg}
                alt="Stock market course preview"
                className="w-auto max-h-[500px] mx-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Wish to succeed in the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                stock market?{" "}
              </span>
              <span className="text-gray-800 dark:text-slate-200">
                Consistent learning is the key.
              </span>
            </h2>

            <p className="text-left text-lg sm:text-xl text-gray-700 dark:text-slate-300 leading-relaxed">
              The world of trading is ever-changing. To stay ahead, knowledge is
              your greatest asset. With Definedge Gurukul, we empower traders
              and investors at every level.
            </p>

            <p className="text-left text-base sm:text-lg font-medium text-gray-600 dark:text-slate-300 leading-relaxed">
              Whether you're a beginner or an experienced trader, our structured
              courses cover essential concepts, in-depth strategies, technical
              and fundamental analysis, and trader psychology.
            </p>

            <p className="text-left text-base sm:text-lg font-medium text-gray-600 dark:text-slate-300 leading-relaxed">
              Our mentors bring decades of market experience to help you make
              smarter decisions and trade with confidence. Learn, grow, and
              transform your trading journey.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stock;
