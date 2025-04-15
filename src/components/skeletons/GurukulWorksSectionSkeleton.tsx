import React from "react";

const GurukulWorksSkeleton: React.FC = () => {
  const steps = [1, 2, 3];

  return (
    <section className="w-full bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      {/* Title Skeleton */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <div className="h-10 w-3/4 mx-auto bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse mb-4" />
        <div className="h-6 w-2/3 mx-auto bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse" />
      </div>

      {/* Steps Skeleton */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Skeleton Card */}
              <div className="flex flex-col items-center text-center space-y-6 w-full max-w-[280px] relative">
                {/* Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse" />

                {/* Icon Circle */}
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
                  <div className="absolute inset-0 m-1 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse" />
                </div>

                {/* Title */}
                <div className="h-5 w-32 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse" />
              </div>

              {/* Connector Line Skeleton */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center flex-1 max-w-[120px]">
                  <div className="h-1 w-full bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GurukulWorksSkeleton;
