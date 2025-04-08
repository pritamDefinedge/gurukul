import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";
import Download from "../assets/download.jpg";

import { ArrowUpIcon } from "@heroicons/react/24/solid";
import Lenis from "@studio-freight/lenis";
import HeroSection from "../components/HeroSection";

const names = [
  "Alex", "Maria", "John", "Aisha", "David", "Sofia",
  "Liam", "Emma", "Ravi", "Mia", "Noah", "Olivia",
  "Ethan", "Isla", "Leo", "Zara",
];

const messages = [
  "🔥 {name} just bought this!",
  "{name} from London grabbed a deal!",
  "Only {count} left – {name} just secured one!",
  "🚀 {name} joined the movement!",
  "🎉 {name} made a great choice!",
  "{name} isn't the only one – {count} people bought this today!",
  "{name} snagged this before it's gone!",
];

function CourseDetails() {
  const [visible, setVisible] = useState(false);
  const [nudgeMessage, setNudgeMessage] = useState("");
  const lenisRef = useRef<Lenis | null>(null);
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    const cycleNudge = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const count = Math.floor(Math.random() * (50 - 10) + 10);
      const template = messages[Math.floor(Math.random() * messages.length)];

      const message = template
        .replace(/{name}/g, name)
        .replace(/{count}/g, count.toString());

      setNudgeMessage(message);
      setVisible(true);

      setTimeout(() => setVisible(false), 3000); // Show for 3 seconds
    };

    cycleNudge();
    const interval = setInterval(cycleNudge, 5000);
    return () => clearInterval(interval);
  }, []);

  // Lenis + Scroll setup
  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const handleScroll = () => {
      setScrollTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      lenisRef.current?.destroy();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    lenisRef.current?.scrollTo(0, {
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <FooterBanner />
      <Footer />

      {/* Scroll To Top Button */}
      <button
        className={`fixed ${
          scrollTop ? "visible opacity-100" : "invisible opacity-0"
        } right-4 bottom-4 z-[9999] bg-blue-900 w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center hover:bg-blue-700 shadow-lg`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="w-6 h-6 text-white" />
      </button>

      {/* Social Proof Nudge */}
      <div
        className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 sm:left-5 sm:transform-none sm:bottom-5 z-50
        w-[95%] sm:w-auto max-w-md
        bg-white dark:bg-gray-900
        text-gray-900 dark:text-gray-100
        shadow-xl rounded-xl px-4 sm:px-5 py-3
        flex items-center space-x-3 sm:space-x-4
        border border-gray-200 dark:border-gray-700
        backdrop-blur-md bg-opacity-90 dark:bg-opacity-80
        transition-all duration-500 ease-in-out
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        <img
          src={Download}
          alt="TrustPilot"
          className="w-10 h-10 rounded-full object-cover ring-2 ring-green-400"
        />

        <div className="flex-1">
          <p className="text-sm font-medium">{nudgeMessage}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Highly rated on{" "}
            <span className="text-green-500 dark:text-green-400 font-bold">
              TrustPilot
            </span>{" "}
            ⭐⭐⭐⭐⭐
          </p>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="text-lg font-bold hover:text-red-500 dark:hover:text-red-400 transition"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default CourseDetails;
