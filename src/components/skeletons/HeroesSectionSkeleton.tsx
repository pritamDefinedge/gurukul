import React from "react";

const HeroesSectionSkeleton = () => {

    return (
        <section
            className="relative px-6 py-24 md:py-32 overflow-hidden bg-gray-200 dark:bg-gray-800 animate-pulse"
        >
            {/* Optional floating glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-800 rounded-full filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-blue-800 rounded-full filter blur-3xl opacity-20"></div>
            </div>

            {/* Content Skeleton */}
            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <div className="h-10 sm:h-12 lg:h-16 w-48 sm:w-64 lg:w-80 mx-auto bg-gray-300 dark:bg-gray-600 rounded"></div>
            </div>
        </section>
    );
};

export default HeroesSectionSkeleton;
