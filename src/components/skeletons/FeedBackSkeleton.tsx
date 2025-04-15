import React from "react";

const FeedBackSkeleton = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-12 animate-pulse">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="h-8 w-1/3 bg-gray-300 dark:bg-gray-600 rounded mb-10 mx-auto" />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Summary Skeleton */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-md space-y-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col items-center text-center md:w-1/3 space-y-2">
                <div className="h-10 w-16 bg-gray-300 dark:bg-gray-600 rounded" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded" />
                  ))}
                </div>
                <div className="h-4 w-20 bg-gray-300 dark:bg-gray-600 rounded" />
              </div>

              <div className="flex-1 space-y-4">
                {[...Array(5)].map((_, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className={`w-4 h-4 rounded ${i < 5 - index ? 'bg-gray-300 dark:bg-gray-600' : 'bg-gray-200 dark:bg-gray-700'}`} />
                        ))}
                      </div>
                      <div className="w-8 h-4 bg-gray-300 dark:bg-gray-600 rounded" />
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                      <div className="h-2 bg-gray-400 dark:bg-gray-500 rounded-full" style={{ width: `${100 - index * 25}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Add Review Notice */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-md space-y-4">
            <div className="h-6 w-1/2 bg-gray-300 dark:bg-gray-600 rounded" />
            <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-500 rounded" />
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <div className="h-6 w-1/4 bg-gray-300 dark:bg-gray-600 rounded mb-6" />
          <div className="space-y-6">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-md space-y-4"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600" />
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between">
                      <div className="w-1/4 h-4 bg-gray-300 dark:bg-gray-600 rounded" />
                      <div className="w-1/6 h-4 bg-gray-300 dark:bg-gray-600 rounded" />
                    </div>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded" />
                      ))}
                    </div>
                    <div className="space-y-1">
                      <div className="w-full h-3 bg-gray-200 dark:bg-gray-500 rounded" />
                      <div className="w-5/6 h-3 bg-gray-200 dark:bg-gray-500 rounded" />
                      <div className="w-3/4 h-3 bg-gray-200 dark:bg-gray-500 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackSkeleton;
