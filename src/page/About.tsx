import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";
import HeroSection from "../components/aboutus/HeroSection";
import Stock from "../components/aboutus/Stock";
import Jumbotron from "../components/aboutus/Jumbotron";
import GurukulWorks from "../components/aboutus/GurukulWorks";
import GurukulHelp from "../components/aboutus/GurukulHelp";
import SmartTrading from "../components/aboutus/SmartTrading";
import { useAnimation } from "../context/AnimationContext";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import SectionWrapper from "../components/SectionWrapper";

import {
  HeroesSectionSkeleton,
  StockSectionSkeleton,
  JumbotronSectionSkeleton,
  GurukulWorksSectionSkeleton,
  GurukulHelpSectionSkeleton,
  SmartTradingSectionSkeleton,
} from "../components/skeletons/index";

function About() {
  const [scrollTop, setScrollTop] = useState(false);
  const { scrollTo } = useAnimation();

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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />

      <SectionWrapper skeleton={<HeroesSectionSkeleton />}>
        <HeroSection />
      </SectionWrapper>

      <SectionWrapper skeleton={<StockSectionSkeleton />}>
        <Stock />
      </SectionWrapper>

      <SectionWrapper skeleton={<JumbotronSectionSkeleton />}>
        <Jumbotron />
      </SectionWrapper>

      <SectionWrapper skeleton={<GurukulWorksSectionSkeleton />}>
        <GurukulWorks />
      </SectionWrapper>

      <SectionWrapper skeleton={<GurukulHelpSectionSkeleton />}>
        <GurukulHelp />
      </SectionWrapper>

      <SectionWrapper skeleton={<SmartTradingSectionSkeleton />}>
        <SmartTrading />
      </SectionWrapper>

      <FooterBanner />
      <Footer />

      {/* Scroll To Top Button */}
      <motion.button
        onClick={handleScrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: scrollTop ? 1 : 0,
          y: scrollTop ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        className="fixed z-50 bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white flex items-center justify-center shadow-xl transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="w-5 h-5" />
      </motion.button>
    </div>
  );
}

export default About;
