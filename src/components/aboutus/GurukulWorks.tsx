import React from "react";

const steps = [
  {
    number: "01",
    iconClass: "flaticon-online-course",
    title: "Choose what you wish to learn from our courses",
  },
  {
    number: "02",
    iconClass: "flaticon-credit-card",
    title: "Purchase your course with ease",
  },
  {
    number: "03",
    iconClass: "flaticon-online-learning-5",
    title: "That’s it! Start learning with expert-guidance",
  },
];

const lineImages = [
  "https://gurukul.definedgesecurities.com/wp-content/uploads/2024/01/line-2.png",
  "https://gurukul.definedgesecurities.com/wp-content/uploads/2024/01/line-1.png",
];

const GurukulWorks: React.FC = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      {/* Top Title Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent mb-4">
          How Definedge Gurukul works?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Pick the right course for yourself and begin your journey to smart trading.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            {/* Step Block */}
            <div className="flex flex-col items-center text-center space-y-4 w-full max-w-[220px] group">
              <div className="relative w-28 h-28">
                {/* Badge */}
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-blue-800 text-white text-xs font-semibold flex items-center justify-center shadow-md">
                  {step.number}
                </div>
                {/* Icon Circle with background hover change */}
                <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-500">
                  <i
                    className={`${step.iconClass} text-blue-600 group-hover:text-white text-4xl transition-colors duration-300`}
                  ></i>
                </div>
              </div>
              <h3 className="text-base font-medium text-gray-800 dark:text-white">
                {step.title}
              </h3>
            </div>

            {/* Line Image (skip after last step) */}
            {index < steps.length - 1 && (
              <div className="hidden md:flex items-center justify-center w-[142px]">
                <img
                  src={lineImages[index]}
                  alt="step-line"
                  className="w-full h-auto"
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default GurukulWorks;
