import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Mission from "../components/Mission";
import Instructors from "../components/Instructors ";
import Beneﬁt from "../components/Beneﬁt";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useAnimation } from "../context/AnimationContext";
import SectionWrapper from "../components/SectionWrapper";
import {
  HeroSkeleton,
  CoursesSectionSkeleton,
  MissionSectionSkeleton,
  InstructorsSkeleton,
  BenefitSkeleton,
  TestimonialsSectionSkeleton,
  FAQSectionSkeleton,
} from "../components/skeletons/index";

function App() {
  const [scrollTop, setScrollTop] = useState(false);
  const { scrollTo } = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    scrollTo(0);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <SectionWrapper skeleton={<HeroSkeleton />}>
          <Hero />
        </SectionWrapper>

        <SectionWrapper skeleton={<CoursesSectionSkeleton />}>
          <Courses />
        </SectionWrapper>

        <SectionWrapper skeleton={<MissionSectionSkeleton />}>
          <Mission />
        </SectionWrapper>

        <SectionWrapper skeleton={<InstructorsSkeleton />}>
          <Instructors />
        </SectionWrapper>

        <SectionWrapper skeleton={<BenefitSkeleton />}>
          <Beneﬁt />
        </SectionWrapper>

        <SectionWrapper skeleton={<TestimonialsSectionSkeleton />}>
          <Testimonial />
        </SectionWrapper>

        <SectionWrapper skeleton={<FAQSectionSkeleton />}>
          <Faq />
        </SectionWrapper>

        <FooterBanner />
      </main>
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
    </div>
  );
}

export default App;
