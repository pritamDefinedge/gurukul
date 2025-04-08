import React from "react";
import useGsapAnimation from "../hooks/useGsapAnimation";
import Card from "./Card";

const Courses: React.FC = () => {
  const { sectionRef } = useGsapAnimation();

  // ✅ Array of members (courses)
  const members = [
    {
      title:
        "Become a Noiseless Trader – Trade the markets the Point & Figure way",
      name: "Prashant Shah",
      hours: "35 Hours",
      chepters: "14 Chapters",
      language: "Hindi",
      discount: "₹ 6999/-",
      originalPrice: "₹ 14999/-",
      image:
        "https://gurukul.definedgesecurities.com/wp-content/uploads/2023/10/The-Point-Figure-way.webp",
      logo: "https://gurukul.definedgesecurities.com/wp-content/uploads/2024/12/Prashant-Shah-Gurukul-150x150.jpg",
    },
    {
      title: "Trading Options Based on Options Charts",
      name: "Abhijit Phatak",
      hours: "4 Hours",
      chepters: "8 Chapters",
      language: "English",
      discount: "₹ 9999/-",
      originalPrice: "₹ 5999/-",
      image:
        "https://gurukul.definedgesecurities.com/wp-content/uploads/2023/11/Trading-Options-1.webp",
      logo: "https://gurukul.definedgesecurities.com/wp-content/uploads/2024/12/Abhijit-Phatak-Gurukul-1-150x150.jpg",
    },
    {
      title: "Learn Trading Options From Basics",
      name: "Prashant Shah",
      hours: "14 Hours",
      chepters: "6 Chapters",
      language: "Hindi",
      discount: "₹ 7999/- ",
      originalPrice: "₹ 3999/-",
      image:
        "https://gurukul.definedgesecurities.com/wp-content/uploads/2023/11/Learn-Trading-Options-From-Basics.webp",
      logo: "https://gurukul.definedgesecurities.com/wp-content/uploads/2024/12/Prashant-Shah-Gurukul-150x150.jpg",
    },
    {
      title: "Harmonic Trading Patterns Simplified",
      name: "Brijesh Bhatia",
      hours: "5 Hours",
      chepters: "4 Modules",
      language: "Eng & Hin Mix",
      discount: "₹ 14999/- ",
      originalPrice: "₹ 5999/-",
      image:
        "https://gurukul.definedgesecurities.com/wp-content/uploads/2023/11/Harmonic-Trading.webp",
      logo: "https://gurukul.definedgesecurities.com/wp-content/uploads/2024/12/Brijesh-Bhatia-Gurukul-150x150.jpg",
    },
    {
      title: "Profitable Trading with Renko charts",
      name: "Prashant Shah",
      hours: "11 Hours",
      chepters: "11 Chapters",
      language: "Hindi",
      discount: "₹ 11999/- ",
      originalPrice: "₹ 4999/-",
      image:
        "https://gurukul.definedgesecurities.com/wp-content/uploads/2023/12/Renko-charts-1.webp",
      logo: "https://gurukul.definedgesecurities.com/wp-content/uploads/2024/12/Prashant-Shah-Gurukul-150x150.jpg",
    },
    {
      title: "Candlestick Patterns Demystified with Scanners",
      name: "Brijesh Bhatia",
      hours: "3 Hours",
      chepters: "18 Chapters",
      language: "Eng & Hin Mix",
      discount: "₹ 5999/- ",
      originalPrice: "₹ 3888/-",
      image:
        "https://gurukul.definedgesecurities.com/wp-content/uploads/2025/01/Candlestick-Patterns-Demystified-with-Scanners-2.webp",
      logo: "https://gurukul.definedgesecurities.com/wp-content/uploads/2024/12/Brijesh-Bhatia-Gurukul-150x150.jpg",
    },
    {
      title: "Relative Strength and Breadth analysis",
      name: " Prashant Shah",
      hours: "",
      chepters: "",
      language: "",
      discount: "",
      originalPrice: "",
      image:
        "https://gurukul.definedgesecurities.com/wp-content/uploads/2024/04/Relative-Strength-06.webp",
      logo: "https://gurukul.definedgesecurities.com/wp-content/uploads/2024/12/Prashant-Shah-Gurukul-150x150.jpg",
    },
    {
      title: "Mastering Trends with Heikin Ashi",
      name: "Brijesh Bhatia",
      hours: "3 Hours",
      chepters: "7 Chapters",
      language: "English & Hindi",
      discount: "₹ 5999/- ",
      originalPrice: "₹ 3888/-",
      image:
        "https://gurukul.definedgesecurities.com/wp-content/uploads/2024/11/Heikin-ashi-09.jpg",
      logo: "https://gurukul.definedgesecurities.com/wp-content/uploads/2024/12/Brijesh-Bhatia-Gurukul-150x150.jpg",
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-100 dark:bg-slate-800">
      <div className="w-11/12 max-w-6xl mx-auto">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            Learn Anywhere, Anytime!
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
              Definedge Online Courses for Stock Market Enthusiasts
            </span>
          </p>
        </div>

        {/* ✅ Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <Card key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
