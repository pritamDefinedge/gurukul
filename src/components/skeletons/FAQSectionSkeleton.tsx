import React from 'react';

const FAQSectionSkeleton = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mx-auto mb-12 animate-pulse"></div>
        <div className="max-w-3xl mx-auto">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 mb-4 animate-pulse">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSectionSkeleton; 