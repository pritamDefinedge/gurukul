import React from "react";
import maketreading from "../../assets/maketreading.png";

function MakeTrading() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-16 lg:gap-20">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Make trading{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                peaceful
              </span>
            </h2>

            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg md:text-lg font-medium text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                The significant advantages of Point & Figure charts lie in their objectivity and simplicity.
              </p>
              <p>
                The unique approach of this journey, rooted in rule-based principles, brings new life to the world’s oldest charting technique.
              </p>
              <p>
                Whether you’re just starting or are a seasoned trader, you'll discover a fresh and powerful way to analyze and trade markets.
              </p>
              <p>
                Gain clarity, structure, and confidence—leading to true peace in your trading journey.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative  overflow-hidden  transition-transform duration-500 ease-in-out hover:scale-[1.03]">
              <img
                src={maketreading}
                alt="Peaceful Trading"
                className="w-full max-h-[400px] sm:max-h-[450px] md:max-h-[500px] object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent dark:from-black/20 dark:to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MakeTrading;
