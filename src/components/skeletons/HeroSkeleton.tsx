import React from 'react';

const HeroSkeleton = () => {
  return (
    <section className="relative h-[60vh] bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="w-full md:w-1/2">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-6 animate-pulse"></div>
          <div className="h-12 bg-blue-500 rounded w-32 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSkeleton; 