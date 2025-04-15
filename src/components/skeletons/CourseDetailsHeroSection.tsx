import React from "react";

const CourseDetailsHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50/50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 md:py-20 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20 dark:opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 dark:opacity-10"></div>
      </div>

      <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16 items-center relative z-10 animate-pulse">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <div className="h-8 w-40 bg-gray-300 dark:bg-gray-700 rounded-full"></div>

          <div className="space-y-4">
            <div className="h-12 w-full max-w-xl bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
            <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg"
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-20 h-6 bg-blue-100 dark:bg-blue-900/20 rounded-full"
              />
            ))}
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-5 h-5 bg-yellow-200 dark:bg-yellow-500 rounded"
                />
              ))}
            </div>
            <div className="w-20 h-5 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="w-20 h-5 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>

          <div className="mt-6 p-5 bg-blue-100 dark:bg-gray-700 rounded-xl border border-blue-200 dark:border-gray-700">
            <div className="flex items-end gap-4">
              <div className="space-y-2">
                <div className="w-20 h-4 bg-gray-300 dark:bg-gray-600 rounded" />
                <div className="flex gap-3">
                  <div className="w-16 h-6 bg-gray-400 dark:bg-gray-600 rounded" />
                  <div className="w-20 h-8 bg-red-300 dark:bg-red-500 rounded" />
                </div>
              </div>
              <div className="w-20 h-8 bg-red-200 dark:bg-red-500 rounded-full" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <div className="w-full sm:w-44 h-12 bg-blue-500 rounded-lg" />
            <div className="w-full sm:w-44 h-12 bg-gray-300 dark:bg-gray-700 rounded-lg" />
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative mt-10 lg:mt-0">
          <div className="w-80 h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl shadow" />
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsHeroSection;
