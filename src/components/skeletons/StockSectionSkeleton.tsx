import React from "react";

const StockSectionSkeleton: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/60 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 animate-pulse">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-16 xl:gap-24">
          
          {/* Image Skeleton */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-3xl bg-gray-300 dark:bg-gray-700 h-[300px] sm:h-[400px] lg:h-[500px] w-full mx-auto" />
          </div>

          {/* Text Content Skeleton */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="h-10 w-3/4 mx-auto lg:mx-0 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-6 w-full bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-6 w-11/12 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-5 w-10/12 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-5 w-full bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-5 w-11/12 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default StockSectionSkeleton;
