import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaCheck,
  FaClock,
  FaLanguage,
  FaUserGraduate,
  FaChartLine,
  FaLock,
  FaRegClock,
} from "react-icons/fa";
import CurriculumImage from "../../assets/carriculum.png";

interface Lesson {
  title: string;
  time: string;
}

interface CurriculumItem {
  title: string;
  description?: string;
  lessons?: Lesson[];
  imageSrc?: string;
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
  imageSrc = CurriculumImage,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const courseFeatures = [
    {
      icon: <FaClock className="text-blue-500" />,
      text: "35 hours of video content",
    },
    { icon: <FaCheck className="text-green-500" />, text: "1 year validity" },
    { icon: <FaUserGraduate className="text-purple-500" />, text: "Live Q&A" },
    { icon: <FaLanguage className="text-orange-500" />, text: "Hindi" },
    {
      icon: <FaChartLine className="text-teal-500" />,
      text: "Effective chart analysis",
    },
  ];

  const courseTags = [
    "Short-term",
    "Positional",
    "Intraday",
    "Options",
    "Swing Trading",
    "Momentum",
    "Trend Following",
    "Breakout",
    "Reversal",
    "Pullback",
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-500">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-2 gap-10">
          <div className="space-y-5 sticky top-20 self-start">
            {items.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-md hover:overflow-hidden transition"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="flex justify-between items-center w-full px-6 py-5 focus:outline-none hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="px-4 py-2 h-auto sm:h-10 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full flex items-center justify-center shadow-md">
                      Chapter {index + 1}
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
                      {item.title}
                    </h3>
                  </div>

                  {openIndex === index ? (
                    <FaChevronUp className="text-gray-400" />
                  ) : (
                    <FaChevronDown className="text-gray-400" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="overflow-hidden px-6 pb-6 pt-2">
                    {item.description && (
                      <p className="text-gray-700 dark:text-slate-300 mb-3">
                        {item.description}
                      </p>
                    )}
                    {item.lessons && (
                      <ul className="space-y-3">
                        {item.lessons.map((lesson, i) => (
                          <li
                            key={i}
                            className="flex items-start justify-between gap-3"
                          >
                            <div className="flex gap-3">
                              <div className="pt-1">
                                <FaRegClock className="text-yellow-500" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-800 dark:text-slate-200">
                                  {lesson.title}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-slate-400">
                                  {lesson.time}
                                </p>
                              </div>
                            </div>
                            <FaLock className="text-gray-400 dark:text-slate-500 mt-1" />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="sticky top-20 self-start">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={imageSrc}
                  alt="Curriculum Visual"
                  className="w-auto max-w-full h-56 object-cover mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-t-2xl" />
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-6">
                {/* Heading */}
                <div className="space-y-3">
                  <h3 className="text-3xl  font-bold leading-tight text-gray-800 dark:text-white">
                    Your Journey to{" "}
                    <span className=" bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                      Noiseless Trading
                    </span>{" "}
                    Begins Here
                  </h3>
                  <p className="text-base text-gray-600 dark:text-slate-300 leading-relaxed">
                    Master the art of consistency in the markets with a
                    noise-free approach, unlocking clarity and precision through
                    powerful Point & Figure charts.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {courseFeatures.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-gray-700 dark:text-slate-300"
                    >
                      {feature.icon}
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
                    What You’ll Learn
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {courseTags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="shine shine-anim w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl transition hover:from-cyan-600 hover:to-blue-700 hover:shadow-lg ">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
