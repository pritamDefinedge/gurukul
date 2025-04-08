import React, { useState, useRef } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";

interface WatchTrailerProps {
  videoSrc: string;
  thumbnailSrc?: string;
  title?: string;
  subtitle?: string;
  playButtonSize?: "sm" | "md" | "lg";
}

const WatchTrailer: React.FC<WatchTrailerProps> = ({
  videoSrc,
  thumbnailSrc,
  title = "Watch Trailer",
  subtitle = "If you are new to the world of options trading, this course is the best place for you to start. Learn from the basics and get ready to become a smart options trader.",
  playButtonSize = "md",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const playButtonSizes = {
    sm: "w-12 h-12 text-lg",
    md: "w-16 h-16 text-xl",
    lg: "w-20 h-20 text-2xl",
  };

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      videoRef.current
        ?.play()
        .catch((e) => console.error("Autoplay failed:", e));
    }, 300);
  };

  const handleClose = () => {
    videoRef.current?.pause();
    setIsOpen(false);
  };

  return (
    <section
      className={`py-16 md:py-24 lg:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-6xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Thumbnail */}
        <div
          onClick={handleOpen}
          className="relative group cursor-pointer mx-auto w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl transition duration-500 ease-in-out transform hover:scale-[1.02]"
        >
          {thumbnailSrc ? (
            <img
              src={thumbnailSrc}
              alt="Video Thumbnail"
              className="w-full aspect-video object-cover"
            />
          ) : (
            <div className="bg-gray-200 dark:bg-gray-700 aspect-video w-full flex items-center justify-center">
              <span className="text-gray-500">No thumbnail available</span>
            </div>
          )}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300 flex items-center justify-center">
            <div
              className={`${playButtonSizes[playButtonSize]} bg-blue-600/90 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110`}
            >
              <FaPlay className="ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300">
          <div className="relative w-full max-w-6xl rounded-xl overflow-hidden aspect-video shadow-3xl bg-black">
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              autoPlay
              className="w-full h-full object-contain"
              playsInline
            />
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Close video"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default WatchTrailer;
