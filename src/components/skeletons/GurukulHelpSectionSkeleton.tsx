import React from "react";

const GurukulHelpSkeleton: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-700/20 dark:from-blue-900/20 dark:to-blue-950/30 -z-10 animate-pulse" />

      {/* Decorative elements placeholders */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded-full filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <section className="w-full bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center mb-12 relative z-10">
          {/* Title Skeleton */}
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mx-auto mb-6 animate-pulse"></div>
          {/* Description Skeleton */}
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mx-auto animate-pulse"></div>
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-8 pb-24 -mt-24 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl animate-pulse"
            >
              {/* Gradient background placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 opacity-10 animate-pulse" />

              {/* Icon container placeholder */}
              <div className="relative mb-6 p-1 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 animate-pulse">
                <div className="relative z-10 w-20 h-20 bg-gray-300 dark:bg-gray-700 rounded-full" />
              </div>

              {/* Title Skeleton */}
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4 animate-pulse" />
              {/* Description Skeleton */}
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2 animate-pulse" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse" />

              {/* Decorative dot placeholder */}
              <div className="absolute bottom-6 w-2 h-2 bg-gray-300 dark:bg-gray-700 rounded-full opacity-20 animate-pulse" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GurukulHelpSkeleton;
