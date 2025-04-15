import React from "react";

const WhatIsCourseSkeleton: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 animate-pulse">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-16 xl:gap-20">
          {/* Image Skeleton */}
          <div className="w-full lg:w-1/2 sticky top-40 self-start">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] bg-gray-300 dark:bg-gray-700 rounded-xl" />
          </div>

          {/* Text Content Skeleton */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            {/* Sticky Title Skeleton */}
            <div className="sticky top-[4.8rem] z-10 pb-4">
              <div className="h-8 sm:h-10 w-3/4 mx-auto lg:mx-0 bg-gray-300 dark:bg-gray-600 rounded" />
            </div>

            {/* Non-sticky content */}
            <div className="space-y-6">
              <div className="h-4 w-4/5 bg-gray-200 dark:bg-gray-600 rounded mx-auto lg:mx-0" />
              <div className="h-4 w-3/5 bg-gray-200 dark:bg-gray-600 rounded mx-auto lg:mx-0" />
              <div className="w-1/2 h-1 mt-1 bg-gray-200 dark:bg-gray-600 rounded" />

              <ul className="space-y-4 text-left">
                {[...Array(6)].map((_, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-400 rounded-full mt-1 flex-shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-5/6 bg-gray-300 dark:bg-gray-700 rounded" />
                      <div className="h-2 w-4/6 bg-gray-200 dark:bg-gray-600 rounded" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCourseSkeleton;
