import React from "react";

const CurriculumSkeleton: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-20 animate-pulse">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="h-10 w-2/3 mx-auto bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
          <div className="h-5 w-3/4 mx-auto bg-gray-200 dark:bg-gray-600 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Side Skeleton (Accordion) */}
          <div className="space-y-5">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-slate-800 shadow-sm p-6 space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-24 h-8 rounded-full bg-cyan-500/50" />
                  <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-600 rounded" />
                </div>
                <div className="space-y-3">
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div className="flex gap-3">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full mt-1" />
                        <div>
                          <div className="h-3 w-40 bg-gray-300 dark:bg-gray-600 rounded mb-1" />
                          <div className="h-2 w-24 bg-gray-200 dark:bg-gray-500 rounded" />
                        </div>
                      </div>
                      <div className="w-4 h-4 bg-gray-400 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Skeleton (Image Card) */}
          <div className="sticky top-20 self-start">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              {/* Image Placeholder */}
              <div className="w-full h-56 bg-gray-300 dark:bg-gray-700" />

              {/* Content Placeholder */}
              <div className="p-6 space-y-6">
                <div className="space-y-3">
                  <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-600 rounded" />
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-500 rounded" />
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-gray-400" />
                      <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-600 rounded" />
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div>
                  <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded mb-2" />
                  <div className="flex flex-wrap gap-2">
                    {[...Array(6)].map((_, i) => (
                      <span
                        key={i}
                        className="h-6 w-20 bg-blue-200 dark:bg-blue-800/40 rounded-full"
                      />
                    ))}
                  </div>
                </div>

                {/* Button Placeholder */}
                <div className="w-full h-10 bg-cyan-500/60 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSkeleton;
