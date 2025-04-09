import React from "react";
import confusion from "../../assets/confusion.png";

function Confusion() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-100/50 via-white to-purple-100/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-16 xl:gap-20">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden  transition-transform duration-500 ease-in-out hover:scale-[1.03]">
              <img
                src={confusion}
                alt="From Confusion to Clarity"
                className="w-full max-h-[500px] object-cover "
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
              <span className=" mr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Confusion
              </span>
              to clarity
            </h2>

            <div className="space-y-4 text-left sm:space-y-5 text-base sm:text-lg md:text-xl font-medium text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                Execution is the key to successful trading. Most traders
                struggle not due to lack of knowledge, but because of confusion
                and unclear execution.
              </p>
              <p>
                This course equips you with a clear, structured
                approach—designed to turn uncertainty into confidence in both
                trading and investing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Confusion;
