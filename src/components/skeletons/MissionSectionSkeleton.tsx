import React from 'react';

const MissionSectionSkeleton = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="w-11/12 max-w-7xl mx-auto px-4 animate-pulse">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="h-10 w-2/3 mx-auto bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-1/2 mx-auto mt-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
        </div>

        {/* Main content block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text block */}
          <div className="space-y-10">
            <div className="relative pl-6 border-l-4 border-sky-300 dark:border-cyan-600">
              <div className="h-6 w-1/3 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
              <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>

            <div className="relative pl-6 border-l-4 border-pink-300 dark:border-pink-500">
              <div className="h-6 w-1/3 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
              <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>

            <div className="h-10 w-32 bg-gray-300 dark:bg-gray-600 rounded-full mt-4"></div>
          </div>

          {/* Image block */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700">
            <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSectionSkeleton;
