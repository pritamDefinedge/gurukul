import React from "react";

const BenefitSkeleton: React.FC = () => {
  return (
    <section
      className="relative z-10 overflow-hidden bg-black py-20 px-4 dark:bg-gray-900"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto text-center animate-pulse">
        {/* Title Skeleton */}
        <div className="h-8 w-2/3 mx-auto bg-gray-700 dark:bg-gray-800 rounded mb-12"></div>

        {/* Cards Skeleton */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="rounded-xl bg-gray-800 p-6 text-center shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-gray-700 shadow-lg" />
              <div className="h-5 w-3/4 mx-auto bg-gray-700 rounded mb-3 mt-6"></div>
              <div className="h-4 w-5/6 mx-auto bg-gray-600 rounded mb-2"></div>
              <div className="h-4 w-2/3 mx-auto bg-gray-600 rounded"></div>
            </div>
          ))}
        </div>

        {/* Button Skeleton */}
        <div className="mt-12">
          <div className="h-10 w-40 mx-auto bg-gray-700 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSkeleton;
