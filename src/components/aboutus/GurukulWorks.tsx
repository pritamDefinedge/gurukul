import React from "react";
import onLineCourse from "../../assets/online-course.png";
import creditCard from "../../assets/credit-card.svg";
import onlineLearning from "../../assets/online-learning.svg";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    iconClass: onLineCourse,
    title: "Choose what you wish to learn from our courses",
  },
  {
    number: "02",
    iconClass: creditCard,
    title: "Purchase your course with ease",
  },
  {
    number: "03",
    iconClass: onlineLearning,
    title: "That's it! Start learning with expert-guidance",
  },
];

const GurukulWorks: React.FC = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      {/* Top Title Section */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent mb-4"
        >
          How Definedge Gurukul Works?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Pick the right course for yourself and begin your journey to smart
          trading.
        </motion.p>
      </div>

      {/* Steps */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Step Block */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center  space-y-6 w-full max-w-[280px] group relative"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-lg font-bold flex items-center justify-center shadow-lg z-10">
                  {step.number}
                </div>

                {/* Icon Container */}
                <div className="relative w-40 h-40">
                  {/* Background Circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-full transform rotate-0 group-hover:rotate-12 transition-transform duration-500"></div>

                  {/* Foreground Circle */}
                  <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg m-1 transition-all duration-300 group-hover:bg-blue-50 dark:group-hover:bg-gray-700">
                    <img
                      src={step.iconClass}
                      alt=""
                      className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                </div>
              </motion.div>

              {/* Connector Line (skip after last step) */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="hidden md:flex items-center justify-center flex-1 max-w-[120px]"
                >
                  <div className="h-1 w-full bg-gradient-to-r from-blue-200 to-purple-200 dark:from-gray-700 dark:to-gray-700 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 w-0 group-hover:w-full transition-all duration-1000"></div>
                  </div>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GurukulWorks;
