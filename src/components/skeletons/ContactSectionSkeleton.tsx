import React from "react";
import { motion } from "framer-motion";

const ContactSectionSkeleton = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="relative overflow-hidden animate-pulse bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/50 to-transparent opacity-10"></div>

              {/* Icon placeholder */}
              <div className="relative z-10 bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-2xl mb-6 shadow-md opacity-40 w-14 h-14"></div>

              {/* Title */}
              <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-3 z-10"></div>

              {/* Content lines */}
              <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-2 z-10"></div>
              <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded z-10"></div>

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSectionSkeleton;
