import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";
import Download from "../assets/download.jpg";

import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useAnimation } from "../context/AnimationContext";
import HeroSection from "../components/courseDetails/HeroSection";
import WatchTrailer from "../components/courseDetails/WatchTrial";
import Curriculum from "../components/courseDetails/Curriculum";
import WhatIsCourse from "../components/courseDetails/WhatIsCourse";
import MakeTrading from "../components/courseDetails/MakeTrading";
import Confusion from "../components/courseDetails/Confusion";
import Instructor from "../components/courseDetails/Instructor";
import Faq from "../components/courseDetails/Faq";
import FeedBack from "../components/courseDetails/FeedBack";

import PrasantSha from "../assets/prashant-shah-definedge-gurukul.webp";
import Carriculum from "../assets/carriculum.png";

const courseContent = [
  {
    title: "Know Point & Figure",
    description: "Get familiar with the basics of options trading.",
    lessons: [
      { title: "What are Options?", time: "60 minutes" },
      { title: "Call vs Put", time: "60 minutes" },
      { title: "Why Trade Options?", time: "60 minutes" },
    ],
    imageSrc: Carriculum,
  },
  {
    title: "Advanced Strategies",
    description: "Dive into complex strategies for seasoned traders.",
    lessons: [
      { title: "Iron Condors", time: "45 minutes" },
      { title: "Straddles", time: "30 minutes" },
      { title: "Credit Spreads", time: "50 minutes" },
    ],
    imageSrc: Carriculum,
  },
  {
    title: "Risk Management",
    description:
      "Learn how to manage risk effectively in any market condition.",
    lessons: [
      { title: "Stop Loss Techniques", time: "40 minutes" },
      { title: "Hedging with Options", time: "50 minutes" },
    ],
    imageSrc: Carriculum,
  },
  {
    title: "Technical Analysis",
    description: "Understand the fundamentals of technical analysis.",
    lessons: [
      { title: "Chart Patterns", time: "30 minutes" },
      { title: "Indicators and Oscillators", time: "45 minutes" },
      { title: "Volume Analysis", time: "40 minutes" },
    ],
    imageSrc: Carriculum,
  },
  {
    title: "Fundamental Analysis",
    description: "Learn how to analyze stocks based on financial statements.",
    lessons: [
      { title: "Understanding Financial Statements", time: "50 minutes" },
      { title: "Valuation Techniques", time: "60 minutes" },
    ],
    imageSrc: Carriculum,
  },
  {
    title: "Options Pricing",
    description: "Explore how options are priced in the market.",
    lessons: [
      { title: "Black-Scholes Model", time: "60 minutes" },
      { title: "Implied Volatility", time: "45 minutes" },
    ],
    imageSrc: Carriculum,
  },
  {
    title: "Trading Psychology",
    description: "Master the psychological aspects of trading.",
    lessons: [
      { title: "Emotional Discipline", time: "30 minutes" },
      { title: "Overcoming Fear and Greed", time: "40 minutes" },
    ],
    imageSrc: Carriculum,
  },
  {
    title: "Options Strategies for Beginners",
    description: "Learn simple options strategies to get started.",
    lessons: [
      { title: "Covered Calls", time: "30 minutes" },
      { title: "Protective Puts", time: "30 minutes" },
    ],
    imageSrc: Carriculum,
  },
  {
    title: "Market Trends",
    description: "Identify and analyze market trends.",
    lessons: [
      { title: "Bull and Bear Markets", time: "30 minutes" },
      { title: "Market Cycles", time: "40 minutes" },
    ],
    imageSrc: Carriculum,
  },
  {
    title: "Reversal and Pullback Formations",
    description: "Get familiar with popular trading platforms.",
    lessons: [
      { title: "Using TradingView", time: "30 minutes" },
      { title: "Brokerage Platforms Overview", time: "45 minutes" },
    ],
    imageSrc: Carriculum,
  },
  {
    title: "Tax Implications of Trading",
    description: "Understand the tax implications of trading options.",
    lessons: [
      { title: "Tax Basics for Traders", time: "30 minutes" },
      { title: "Reporting Gains and Losses", time: "40 minutes" },
    ],
    imageSrc: Carriculum,
  },
  {
    title: "Creating a Trading Plan",
    description: "Learn how to create a solid trading plan.",
    lessons: [
      { title: "Setting Goals", time: "30 minutes" },
      { title: "Risk Management in Your Plan", time: "40 minutes" },
    ],
    imageSrc: Carriculum,
  },
  {
    title: "Options Trading Myths",
    description: "Debunk common myths about options trading.",
    lessons: [
      { title: "Myth vs Reality", time: "30 minutes" },
      { title: "Understanding Risks", time: "40 minutes" },
    ],
    imageSrc: Carriculum,
  },
  {
    title: "Building a Watchlist",
    description: "Learn how to build and manage a watchlist.",
    lessons: [
      { title: "Selecting Stocks ", time: "30 minutes" },
      { title: "Monitoring Performance", time: "30 minutes" },
    ],
    imageSrc: Carriculum,
  },
  {
    title: "Options Trading for Income",
    description: "Explore strategies to generate income through options.",
    lessons: [
      { title: "Selling Options", time: "40 minutes" },
      { title: "Income Strategies Overview", time: "50 minutes" },
    ],
    imageSrc: Carriculum,
  },
];

const names = [
  "Alex",
  "Maria",
  "John",
  "Aisha",
  "David",
  "Sofia",
  "Liam",
  "Emma",
  "Ravi",
  "Mia",
  "Noah",
  "Olivia",
  "Ethan",
  "Isla",
  "Leo",
  "Zara",
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
  const [scrollTop, setScrollTop] = useState(false);
  const { scrollTo } = useAnimation();
  const [visible, setVisible] = useState(false);
  const [nudgeMessage, setNudgeMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    scrollTo(0);
  };

  const cycleNudge = () => {
    const messages = [
      "Don't miss out on this opportunity!",
      "Limited time offer!",
      "Join our community today!",
    ];
    let currentIndex = 0;

    setVisible(true);
    setNudgeMessage(messages[currentIndex]);

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % messages.length;
      setNudgeMessage(messages[currentIndex]);
    }, 3000);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    const cleanup = cycleNudge();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <WatchTrailer
        videoSrc="/video.mp4"
        thumbnailSrc={PrasantSha}
        playButtonSize="md"
      />
      <Curriculum items={courseContent} />
      <WhatIsCourse />
      <MakeTrading />
      <Confusion />
      <Instructor />
      <Faq />
      <FeedBack />
      <FooterBanner />
      <Footer />
      {/* Scroll To Top Button */}
      <button
        className={`fixed ${
          scrollTop ? "visible opacity-100" : "invisible opacity-0"
        } right-4 bottom-4 z-[9999] bg-blue-900 w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center hover:bg-blue-700 shadow-lg`}
        onClick={handleScrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="w-6 h-6 text-white" />
      </button>
      {/* Social Proof Nudge */}
      <div
        className={`fixed bottom-4 left-1/2 transform -translate-x-1/2
    md:left-auto md:right-6 md:transform-none md:bottom-6 z-40
    w-[95%] md:w-auto max-w-md
    bg-white dark:bg-gray-900
    text-gray-900 dark:text-gray-100
    shadow-xl rounded-xl px-4 md:px-5 py-3
    flex items-center space-x-3 md:space-x-4
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
