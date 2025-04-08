import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface CurriculumItem {
  title: string;
  description?: string;
  lessons?: string[];
}

interface CurriculumProps {
  title?: string;
  subtitle?: string;
  items: CurriculumItem[];
  imageSrc?: string;
}

const Curriculum: React.FC<CurriculumProps> = ({
  title = "Course Curriculum",
  subtitle = "Explore the topics covered in this course to get a comprehensive understanding.",
  items,
  imageSrc = "https://via.placeholder.com/600x400",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Centered Title & Subtitle */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-500">
            {title}
          </h2>
          <p className="mt-4 text-gray-600 dark:text-slate-300 text-lg max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px]">
          {/* Curriculum Section */}
          <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
            <div className="space-y-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {item.title}
                    </h3>
                    {openIndex === index ? (
                      <FaChevronUp className="text-gray-500" />
                    ) : (
                      <FaChevronDown className="text-gray-500" />
                    )}
                  </button>

                  {openIndex === index && (
                    <div className="px-6 pb-4 pt-2 text-gray-600 dark:text-gray-300 text-sm bg-white dark:bg-slate-800 transition-all duration-300">
                      {item.description && <p className="mb-3">{item.description}</p>}
                      {item.lessons && item.lessons.length > 0 && (
                        <ul className="list-disc list-inside space-y-1">
                          {item.lessons.map((lesson, i) => (
                            <li key={i}>{lesson}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="h-full w-full flex items-center justify-center">
            <img
              src={imageSrc}
              alt="Curriculum Visual"
              className="rounded-2xl object-cover w-full h-full max-h-[600px] shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
