import React from "react";

const WatchTrailerSkeleton: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
        {/* Header Skeleton */}
        <div className="text-center mb-12 md:mb-16">
          <div className="mx-auto h-10 w-2/3 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
          <div className="mx-auto h-6 w-4/5 bg-gray-200 dark:bg-gray-800 rounded"></div>
        </div>

        {/* Thumbnail Skeleton */}
        <div className="relative mx-auto w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-gray-300 dark:bg-gray-700 shadow-2xl">
          {/* Play button loader (faded circle) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-gray-400 dark:bg-gray-600 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchTrailerSkeleton;
