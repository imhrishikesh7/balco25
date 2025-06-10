import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StrokeFillHeading = ({ text, className = '' }) => {
  const containerRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const fill = fillRef.current;

      // Animate fill entrance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(fill, {
        opacity: 0,
        y: 30,
        x: 10,
        rotateX: 40,
        skewX: 15,
      }, {
        opacity: 1,
        y: 0,
        x: 0,
        rotateX: 0,
        skewX: 0,
        duration: 1.2,
        ease: 'expo.out',
      });

      // Scroll parallax
      gsap.to(fill, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          end: 'bottom top',
          scrub: true,
        },
        y: -40,
        rotateY: 10,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {/* Stroke text (fake using CSS) */}
      <h2
        className="text-transparent stroke-only text-5xl md:text-7xl font-bold absolute top-0 left-0 z-10"
      >
        {text}
      </h2>

      {/* Fill Layer */}
      <h2
        ref={fillRef}
        className="text-white text-5xl md:text-7xl font-bold relative z-0"
      >
        {text}
      </h2>

      {/* Custom stroke-only style */}
      <style>
        {`
          .stroke-only {
            -webkit-text-stroke: 2px #00aabb;
            color: transparent;
          }
        `}
      </style>
    </div>
  );
};

export default StrokeFillHeading;
