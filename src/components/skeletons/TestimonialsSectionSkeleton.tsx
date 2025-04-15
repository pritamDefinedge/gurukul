import React from 'react';

const TestimonialsSectionSkeleton = () => {
  const visibleCards =
    typeof window !== "undefined"
      ? window.innerWidth < 768
        ? 1
        : window.innerWidth < 1024
        ? 2
        : 3
      : 3;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="h-10 w-1/3 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(visibleCards)].map((_, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 animate-pulse"
            >
              <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>

              <div className="flex items-center">
                <div className="h-14 w-14 rounded-full bg-gray-200 dark:bg-gray-700 mr-4"></div>
                <div>
                  <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-4">
          <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
          <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSectionSkeleton;
