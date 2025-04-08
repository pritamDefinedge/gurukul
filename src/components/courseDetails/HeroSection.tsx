import React, { useEffect, useState, useRef } from "react";
import PrasantSha from "../../assets/prashant-shah-definedge-gurukul.webp";
import { FaPlay, FaTimes, FaStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const image = document.querySelector(".hero-image");
    if (image) {
      image.classList.add("animate-fade-in-up");
    }
  }, []);

  const handleVideoOpen = () => {
    setIsVideoOpen(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50/50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 md:py-20 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20 dark:opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 dark:opacity-10"></div>
      </div>

      <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          {/* Badge with countdown */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                🚀 Premium Course
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
            Become a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
              Noiseless Trader
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Master the markets with{" "}
            <strong className="font-semibold text-blue-600 dark:text-blue-400">
              Point & Figure
            </strong>{" "}
            methodology. Gain a unique perspective and elevate your trading
            journey.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              { emoji: "📚", text: "35 Hours" },
              { emoji: "🧩", text: "14 Chapters" },
              { emoji: "🗣️", text: "Hindi" },
              { emoji: "🧠", text: "Live Q&A" },
            ].map((item, index) => (
              <span
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2 shadow-sm hover:shadow-md transition-all duration-200"
              >
                {item.emoji} {item.text}
              </span>
            ))}
          </div>
          {/* Selling Points */}
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              "Simplicity",
              "Objectivity",
              "Unique",
              "Innovative",
              "Peaceful trading",
            ].map((item, index) => (
              <span
                key={index}
                className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-700 dark:text-gray-300 font-medium">
                5.0
              </span>
            </div>
            <span className="text-gray-600 dark:text-gray-400">|</span>
            <span className="text-gray-600 dark:text-gray-400">56 Ratings</span>
            <span className="text-gray-600 dark:text-gray-400">|</span>
            <span className="text-gray-600 dark:text-gray-400">
              1200+ Students
            </span>
          </div>

          {/* Price Section with Countdown Timer */}
          <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-blue-200 dark:border-gray-700">
            <div className="flex items-end gap-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Course Price:
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 dark:text-gray-400 line-through text-lg">
                    ₹14,999
                  </span>
                  <span className="text-3xl font-bold text-red-600 dark:text-red-400">
                    ₹6,999
                  </span>
                </div>
              </div>
              <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-bold px-3 py-1 rounded-full animate-pulse mb-1">
                🔥 53% OFF
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="#"
              className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
            >
              <span className="relative z-10">Enroll Now</span>
              <span className="shine absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></span>
            </a>
            <button
              onClick={handleVideoOpen}
              className="px-8 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium text-lg transition-all duration-300 shadow hover:shadow-md flex items-center justify-center gap-2 group"
            >
              <span className="relative flex items-center justify-center w-5 h-5">
                <FaPlay className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              </span>
              Watch Preview
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative mt-10 lg:mt-0">
          <div className="relative flex items-center justify-center w-full">
            <div className="relative group">
              <img
                src={PrasantSha}
                alt="Course Mentor"
                className="hero-image mx-auto rounded-2xl w-full max-w-md object-cover shadow-sm   dark:border-gray-800 transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/90  backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl bg-black aspect-video">
            <video
              ref={videoRef}
              src="/video.mp4"
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-all duration-200 hover:scale-110"
              aria-label="Close video"
            >
              <IoMdClose className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
