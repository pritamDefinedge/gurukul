import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "This course completely changed how I view Point & Figure charts. The clarity and depth were unmatched.",
    author: "Aman Verma",
    role: "Trader & Analyst",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5
  },
  {
    quote: "The Relative Strength strategies explained here have helped me build more confident portfolios.",
    author: "Priya Iyer",
    role: "Investment Consultant",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 4
  },
  {
    quote: "From trend projections to RS Matrix—everything was broken down so well. Highly recommended!",
    author: "Rajesh Mehta",
    role: "Technical Analyst",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5
  },
  {
    quote: "Best course I've attended this year. Learned so much in so little time.",
    author: "Sneha Kapoor",
    role: "Equity Researcher",
    avatar: "https://i.pravatar.cc/150?img=4",
    rating: 5
  },
  {
    quote: "I use these concepts every day now. My trades have improved significantly.",
    author: "Ravi Desai",
    role: "Independent Trader",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 4
  },
];

const TestimonialCarousel: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  const handlePrev = () => {
    setStartIndex((prev) => 
      prev === 0 ? testimonials.length - visibleCards : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) => 
      prev + visibleCards >= testimonials.length ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      const newVisibleCards = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
      setStartIndex(0); // Reset index on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [startIndex]);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
         
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          What People Say
          </h2>
         
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials
              .slice(startIndex, startIndex + visibleCards)
              .map((item, index) => (
                <div
                  key={index}
                  className="testimonial-card relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="absolute top-6 left-6 text-blue-500 dark:text-blue-400 opacity-10 text-6xl">
                    <FaQuoteLeft />
                  </div>
                  
                  <div className="flex mb-4">
                    {renderStars(item.rating)}
                  </div>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                    "{item.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={item.avatar}
                        alt={item.author}
                        className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 dark:border-blue-400"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 dark:bg-blue-600 rounded-full p-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 dark:text-white">{item.author}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={handlePrev}
              className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <HiChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;