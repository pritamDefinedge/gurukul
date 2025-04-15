import { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins globally
gsap.registerPlugin(ScrollTrigger);

// Define the context type
interface AnimationContextType {
  lenis: Lenis | null;
  scrollTo: (target: number | string | HTMLElement, options?: any) => void;
  gsap: typeof gsap;
  registerAnimation: (id: string, animation: () => void) => void;
  unregisterAnimation: (id: string) => void;
}

// Create context with default values
export const AnimationContext = createContext<AnimationContextType>({
  lenis: null,
  scrollTo: () => {},
  gsap,
  registerAnimation: () => {},
  unregisterAnimation: () => {},
});

interface AnimationProviderProps {
  children: ReactNode;
}

export const AnimationProvider = ({ children }: AnimationProviderProps) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const animationsRef = useRef<Record<string, () => void>>({});
  
  // Initialize Lenis on mount
  useEffect(() => {
    // Create Lenis instance
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Set up animation frame loop
    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    // Store the instance
    setLenis(lenisInstance);
    
    // Cleanup on unmount
    return () => {
      lenisInstance.destroy();
    };
  }, []);

  // Integration of Lenis with GSAP ScrollTrigger
  useEffect(() => {
    if (lenis) {
      // Connect Lenis and ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      // Tell ScrollTrigger to use these proxy methods for the window's scroll position
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
    }
  }, [lenis]);

  // Scroll to function
  const scrollTo = (target: number | string | HTMLElement, options?: any) => {
    if (!lenis) return;
    
    lenis.scrollTo(target, {
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options,
    });
  };

  // Register animation
  const registerAnimation = (id: string, animation: () => void) => {
    animationsRef.current[id] = animation;
  };

  // Unregister animation
  const unregisterAnimation = (id: string) => {
    delete animationsRef.current[id];
  };

  const value = {
    lenis,
    scrollTo,
    gsap,
    registerAnimation,
    unregisterAnimation,
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};

// Custom hook for using the animation context
export const useAnimation = () => useContext(AnimationContext); 