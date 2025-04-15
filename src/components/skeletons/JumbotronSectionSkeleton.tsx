import React from 'react';

const JumbotronSectionSkeleton = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mx-auto mb-12 animate-pulse"></div>
        <div className="max-w-3xl mx-auto">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
        </div>
      </div>
    </section>
  );
};

export default JumbotronSectionSkeleton; 