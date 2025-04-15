import React from "react";

const InstructorSkeleton: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br bg-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 animate-pulse">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-16 lg:gap-20">
          {/* Text Skeleton */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="h-10 sm:h-12 md:h-14 w-3/4 bg-gray-300 dark:bg-gray-600 rounded mx-auto lg:mx-0" />

            <div className="space-y-4 text-left">
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-4 w-4/5 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>

            <div className="pt-4">
              <div className="w-40 h-10 bg-gray-300 dark:bg-gray-600 rounded-xl" />
            </div>
          </div>

          {/* Image Skeleton */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-3xl bg-gradient-to-br from-blue-200 via-white to-purple-100 dark:from-gray-700 dark:to-gray-800 p-1">
              <div className="w-full h-[400px] bg-gray-300 dark:bg-gray-700 rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSkeleton;
