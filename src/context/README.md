# Global Animation System for Gurukul

This directory contains the global animation context that provides smooth scrolling and animation capabilities throughout the application.

## Features

- **Centralized Animation Control**: A single instance of Lenis and GSAP for the entire application
- **Smooth Scrolling**: For all pages and anchor links
- **GSAP Integration**: Global GSAP instance with ScrollTrigger plugin
- **Animation Utilities**: Ready-to-use animation functions for common use cases

## How to Use

### Smooth Scrolling

The smooth scrolling is automatically applied to the entire application. To scroll to a specific element or position:

```tsx
import { useAnimation } from '../context/AnimationContext';

function MyComponent() {
  const { scrollTo } = useAnimation();
  
  const handleClick = () => {
    // Scroll to a specific position (0 = top)
    scrollTo(0);
    
    // Or scroll to an element
    scrollTo('#my-section');
    
    // Or scroll to an element reference
    const element = document.querySelector('.my-class');
    scrollTo(element);
    
    // With custom options
    scrollTo(0, {
      duration: 2, // seconds
      // Custom easing function (optional)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };
  
  return (
    <button onClick={handleClick}>
      Scroll to Top
    </button>
  );
}
```

### Using GSAP Animations

Access the global GSAP instance from the animation context:

```tsx
import { useAnimation } from '../context/AnimationContext';

function MyComponent() {
  const { gsap } = useAnimation();
  const elementRef = useRef(null);
  
  useEffect(() => {
    gsap.to(elementRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
    });
  }, [gsap]);
  
  return <div ref={elementRef} className="opacity-0 translate-y-4">Animated Element</div>;
}
```

### Using Animation Utilities

For common animations, you can use the utility functions:

```tsx
import { useEffect, useRef } from 'react';
import { fadeIn, animateList } from '../utils/animations';

function MyComponent() {
  const titleRef = useRef(null);
  const listRef = useRef(null);
  
  useEffect(() => {
    // Fade in the title from the bottom
    fadeIn(titleRef.current, {
      from: 'bottom',
      duration: 0.8,
      delay: 0.2,
    });
    
    // Animate list items sequentially
    if (listRef.current) {
      const items = listRef.current.children;
      animateList(items, {
        stagger: 0.1,
        duration: 0.5,
        from: 'start',
      });
    }
  }, []);
  
  return (
    <div>
      <h2 ref={titleRef}>My Title</h2>
      <ul ref={listRef}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}
```

## Implementation Details

The animation system is implemented through several components:

1. **AnimationContext.tsx**: The React context that provides the global Lenis and GSAP instances
2. **useSmoothScroll.ts**: A hook that enables smooth scrolling for anchor links
3. **animations.ts**: Utility functions for common animations

The system initializes a single Lenis instance for the entire application, which improves performance and ensures consistent behavior across all pages. It also integrates GSAP's ScrollTrigger with Lenis for smooth animation triggers.

## Tips and Best Practices

1. Always use the `useAnimation` hook to access Lenis and GSAP instances
2. For scroll animations, utilize GSAP's ScrollTrigger through the global context
3. For simple animations, use the utility functions from `animations.ts`
4. When creating custom animations, reuse existing patterns and keep animations consistent
5. For page transitions, use the `pageTransition` object for consistent effects 