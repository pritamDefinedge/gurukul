import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";

import { ArrowUpIcon } from "@heroicons/react/24/solid";
import Lenis from "@studio-freight/lenis";

function Login() {
  const [scrollTop, setScrollTop] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis and scroll events
  useEffect(() => {
    // Set up Lenis smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // RAF loop for Lenis
    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Set up scroll listener
    const handleScroll = () => {
      setScrollTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup
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
    <div className="min-h-screen">
      <Header />
      <main>
        <>
          <p className="max-w-lg px-lg text-center align-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            voluptatem rerum nemo architecto harum error fugit ex odio labore
            exercitationem quam earum quae, explicabo esse tenetur, cumque ipsa
            accusamus illo quo dolorem minus necessitatibus similique vel!
            Libero quos, placeat, accusantium eos aspernatur porro mollitia
            nobis facere vel voluptatem ratione, dolores fuga adipisci. Illum
            esse accusantium, doloremque saepe vel nisi optio. Temporibus neque
            iure ex blanditiis fuga, architecto, distinctio ea ducimus porro
            consequatur sed quia explicabo inventore hic nobis fugit sint autem
            sequi beatae quidem minus labore nostrum. Officia, commodi delectus
            voluptatibus esse at eius dicta voluptates dolorum blanditiis, nihil
            sint? ee
          </p>

          <FooterBanner />
        </>
      </main>
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
    </div>
  );
}

export default Login;
