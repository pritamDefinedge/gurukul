import React, { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    // Animation for the image on load
    const image = document.querySelector(".hero-image");
    if (image) {
      image.classList.add("animate-fade-in-up");
    }
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 md:py-12 overflow-hidden">
      <div className="max-w-screen-xl px-4 mx-auto lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-24 items-center">
        {/* Content Column */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
              🚀 Premium Trading Course
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
            Become a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
              Noiseless Trader
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Master the markets with{" "}
            <strong className="font-semibold text-blue-600 dark:text-blue-400">
              Point &amp; Figure
            </strong>{" "}
            methodology. Gain a unique perspective and elevate your trading
            journey.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {[
              { emoji: "📚", text: "35 Hours" },
              { emoji: "🧹", text: "14 Chapters" },
              { emoji: "🛣️", text: "Hindi" },
              { emoji: "🧠", text: "Live Q&A" },
            ].map((item, index) => (
              <span
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow"
              >
                {item.emoji} {item.text}
              </span>
            ))}
          </div>

          {/* Selling Points */}
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              "Simplicity",
              "Objectivity",
              "Unique",
              "Innovative",
              "Peaceful trading",
            ].map((item, index) => (
              <span
                key={index}
                className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-700 dark:text-gray-300 font-medium">
                5.0
              </span>
            </div>
            <span className="text-gray-600 dark:text-gray-400">|</span>
            <span className="text-gray-600 dark:text-gray-400">56 Ratings</span>
            <span className="text-gray-600 dark:text-gray-400">|</span>
            <span className="text-gray-600 dark:text-gray-400">
              1200+ Students
            </span>
          </div>

          {/* Price Section */}
          <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-blue-200 dark:border-gray-700">
            <div className="flex items-end gap-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Course Price:
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 dark:text-gray-400 line-through text-lg">
                    ₹14,999
                  </span>
                  <span className="text-3xl font-bold text-red-600 dark:text-red-400">
                    ₹6,999
                  </span>
                </div>
              </div>
              <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-bold px-3 py-1 rounded-full animate-pulse mb-1">
                🔥 53% OFF
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Offer ends in 2 days
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="#"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Enroll Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium text-lg transition-all duration-300 shadow hover:shadow-md flex items-center justify-center gap-2"
            >
              Watch Preview
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative mt-10 lg:mt-0">
          <div className="relative flex items-center justify-center">
            <img
              src="https://gurukul.definedgesecurities.com/wp-content/uploads/2023/12/prashant-shah-definedge-gurukul.webp"
              alt="Course Mentor"
              className="hero-image mx-auto rounded-2xl w-full max-w-md object-cover shadow-xl border-8 border-white dark:border-gray-800 transition-transform duration-500 ease-in-out hover:scale-105"
            />

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">
                    Certified Course
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Industry recognized
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
