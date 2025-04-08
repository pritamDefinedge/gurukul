import React from "react";
import Background from "../assets/background.png";
import learnAt from "../assets/learnAt.svg";
import Comprehensive from "../assets/comprehensive.svg";
import Exclusive from "../assets/exclusive.svg";
import Course from "../assets/course.svg";
import Simplified from "../assets/Simplified.svg";
import LiveQa from "../assets/LiveQa.svg";

const benefits = [
  {
    icon: learnAt,
    title: "Learn at Your Own Pace",
    description:
      "Expand your trading knowledge at your own pace with 100% online courses at your fingertips",
    bg: "bg-gray-200",
    shadow: "shadow-gray-500/40",
  },
  {
    icon: Comprehensive,
    title: "Comprehensive Courses",
    description:
      "Delve deep into our courses, and gain in-depth knowledge of various trading and investing concepts",
    bg: "bg-gray-200",
    shadow: "shadow-gray-500/40",
  },
  {
    icon: Exclusive,
    title: "Exclusive Insights",
    description:
      "Gain exclusive insights from seasoned traders, tap into their wisdom and learn from their expertise",
    bg: "bg-gray-200",
    shadow: "shadow-gray-500/40",
  },
  {
    icon: Course,
    title: "Certified Courses",
    description:
      "Validate your learnings with a certification for each course gained after an assessment.",
    bg: "bg-gray-200",
    shadow: "shadow-gray-500/40",
  },
  {
    icon: Simplified,
    title: "Simplified Learning",
    description:
      "Created in an easy-to-grasp format, our courses ensure seamless learning even for complex concepts",
    bg: "bg-gray-200",
    shadow: "shadow-gray-500/40",
  },
  {
    icon: LiveQa,
    title: "Live Q&A",
    description:
      "Each course conveys knowledge while keeping practical aspects in mind. Get your queries resolved by our mentors with Live Q&A",
    bg: "bg-gray-200",
    shadow: "shadow-gray-500/40",
  },
];

const BenefitCard = ({ icon, title, description, bg, shadow }: any) => (
  <div className="rounded-xl bg-white dark:bg-gray-800 p-6 text-center shadow-xl transition-all">
    <div
      className={`mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full ${bg} shadow-lg ${shadow}`}
    >
      <img src={icon} alt={title} width={40} height={40} />
    </div>
    <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const Benefit: React.FC = () => {
  return (
    <section
      className="relative z-10 overflow-hidden bg-black py-20 px-4 dark:bg-gray-900"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-12">
          How Will Definedge Gurukul Benefit You?
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="shine shine-anim overflow-hidden inline-block mt-4 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white px-8 py-2 rounded-full font-medium shadow-md transition border border-transparent hover:border-white dark:hover:border-gray-200">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
