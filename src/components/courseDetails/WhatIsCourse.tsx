import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import whatisCourse from "../../assets/whatIsCourse.png";

function WhatIsCourse() {
  const features = [
    "Unique and effective trading strategies",
    "Complete understanding of P&F charts right from the beginning",
    "Different way to understand price and trade price patterns",
    "Unique P&F tools, price patterns, indicators and trading strategies",
    "High probability patterns & strategies to capture momentum stocks and sectors",
    "Objective method to identify outperformers with relative strength & breadth",
    "25-years of back-testing results of P&F patterns for compelling market insights",
    "Trading & investment strategies with clear rules of execution",
    "Stock selection, market selection, strategy selection & creating own strategies",
    "Crux of years of research and experience",
    "How to become an independent and noiseless trader",
  ];

  return (
    <section className="w-full bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-16 xl:gap-20">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 sticky top-40 self-start">
            <div className="relative   transition-transform duration-500 ease-in-out hover:scale-[1.03]">
              <img
                src={whatisCourse}
                alt="Course Preview"
                className="w-full max-h-[400px] sm:max-h-[450px] md:max-h-[500px] object-cover "
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            {/* Sticky Title */}
            <div className="sticky top-[4.8rem] z-10 pb-4 bg-white bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
                What is this{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  course?
                </span>
              </h2>
            </div>

            {/* Non-sticky content */}
            <div className="space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-slate-300 leading-relaxed">
                This course will commence your journey to becoming an
                independent and noiseless trader.
              </p>

              <p className="text-left text-base sm:text-lg md:text-xl font-medium text-gray-600 dark:text-slate-300 leading-relaxed">
                With this course, you get to learn:
              </p>

              <div className="w-1/2 h-1 mt-1 bg-gradient-to-r from-gray-100 to-gray-500 dark:from-gray-700 dark:to-gray-400 transform origin-left" />

              <ul className="space-y-4 text-left">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base md:text-lg leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatIsCourse;
