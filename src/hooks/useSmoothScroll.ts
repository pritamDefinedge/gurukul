import { useEffect } from 'react';
import { useAnimation } from '../context/AnimationContext';

/**
 * Hook for enabling smooth scrolling to anchor links
 * This will override the default behavior of anchor links to use Lenis smooth scrolling
 */
const useSmoothScroll = () => {
  const { scrollTo } = useAnimation();

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (!anchor) return;

      const href = anchor.getAttribute('href');

      // If it's an anchor link
      if (href?.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);

        // Ensure the element is an HTMLElement before passing to scrollTo
        if (targetElement instanceof HTMLElement) {
          scrollTo(targetElement);
        }
      }
    };

    // Add event listener to the document
    document.addEventListener('click', handleAnchorClick);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [scrollTo]);
};

export default useSmoothScroll;
