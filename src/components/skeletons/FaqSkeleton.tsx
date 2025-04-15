import React from "react";

const FaqSkeleton: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 animate-pulse">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading Skeleton */}
        <div className="mb-16 text-center">
          <div className="mx-auto h-10 w-2/3 sm:w-1/2 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>

        {/* Accordion Skeleton */}
        <div className="space-y-6">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-700 p-4 rounded-xl bg-white dark:bg-gray-800"
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <div className="h-5 w-3/4 bg-gray-300 dark:bg-gray-600 rounded" />
                <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full" />
              </div>

              {/* Answer (only for first 2 as example open state) */}
              {index < 1 && (
                <div className="mt-4 space-y-2">
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                  <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
                  <div className="h-4 w-4/6 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSkeleton;
