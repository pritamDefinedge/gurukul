import { gsap } from 'gsap';

/**
 * Common animation utility functions that can be used throughout the application
 * These functions leverage the global GSAP instance
 */

// Fade in animation
export const fadeIn = (
  element: HTMLElement | string,
  options?: {
    duration?: number;
    delay?: number;
    ease?: string;
    from?: 'top' | 'bottom' | 'left' | 'right';
    distance?: number;
    stagger?: number;
    onComplete?: () => void;
  }
) => {
  const {
    duration = 0.8,
    delay = 0,
    ease = 'power2.out',
    from,
    distance = 50,
    stagger = 0,
    onComplete,
  } = options || {};

  // Set initial styles based on the 'from' direction
  let initialStyles: gsap.TweenVars = { opacity: 0 };
  
  if (from) {
    switch (from) {
      case 'top':
        initialStyles.y = -distance;
        break;
      case 'bottom':
        initialStyles.y = distance;
        break;
      case 'left':
        initialStyles.x = -distance;
        break;
      case 'right':
        initialStyles.x = distance;
        break;
    }
  }

  // Set initial state
  gsap.set(element, initialStyles);

  // Create the animation
  return gsap.to(element, {
    opacity: 1,
    x: 0,
    y: 0,
    duration,
    delay,
    ease,
    stagger,
    onComplete,
  });
};

// Fade out animation
export const fadeOut = (
  element: HTMLElement | string,
  options?: {
    duration?: number;
    delay?: number;
    ease?: string;
    to?: 'top' | 'bottom' | 'left' | 'right';
    distance?: number;
    stagger?: number;
    onComplete?: () => void;
  }
) => {
  const {
    duration = 0.6,
    delay = 0,
    ease = 'power2.in',
    to,
    distance = 50,
    stagger = 0,
    onComplete,
  } = options || {};

  // Create animation properties
  const animationProps: gsap.TweenVars = { 
    opacity: 0,
    duration,
    delay,
    ease,
    stagger,
    onComplete,
  };

  // Add movement if a direction is specified
  if (to) {
    switch (to) {
      case 'top':
        animationProps.y = -distance;
        break;
      case 'bottom':
        animationProps.y = distance;
        break;
      case 'left':
        animationProps.x = -distance;
        break;
      case 'right':
        animationProps.x = distance;
        break;
    }
  }

  // Create the animation
  return gsap.to(element, animationProps);
};

// Staggered list animation
export const animateList = (
  listItems: HTMLElement[] | NodeListOf<Element> | string,
  options?: {
    duration?: number;
    stagger?: number;
    from?: 'start' | 'end' | 'center' | 'edges' | 'random';
    ease?: string;
    delay?: number;
  }
) => {
  const {
    duration = 0.5,
    stagger = 0.1,
    from = 'start',
    ease = 'power1.out',
    delay = 0,
  } = options || {};

  return gsap.fromTo(
    listItems,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger: {
        amount: stagger * (Array.isArray(listItems) ? listItems.length : 5),
        from,
      },
      ease,
      delay,
    }
  );
};

// Page transition animation
export const pageTransition = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'power2.out',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: 'power2.in',
    },
  },
}; 