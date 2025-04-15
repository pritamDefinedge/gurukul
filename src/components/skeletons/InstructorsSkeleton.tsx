import React from "react";

const InstructorsSkeleton: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="w-11/12 max-w-7xl mx-auto animate-pulse">
        {/* Title Skeleton */}
        <div className="text-center mb-16">
          <div className="h-10 w-1/2 mx-auto bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
          <div className="h-5 w-3/4 mx-auto bg-gray-200 dark:bg-gray-600 rounded"></div>
        </div>

        {/* Cards Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900"
            >
              <div className="w-full h-52 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-4">
                <div className="h-5 w-2/3 mx-auto bg-gray-300 dark:bg-gray-600 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSkeleton;
