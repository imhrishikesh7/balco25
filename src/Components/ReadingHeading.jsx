// ReadingHeading.jsx
import React, { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ReadingHeading = ({ text, className = '' }) => {
  const headingRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(headingRef.current, {
      types: 'chars',
    });

    gsap.set(split.chars, {
      y: '100%',
      opacity: 0,
    });

    gsap.to(split.chars, {
      y: '0%',
      opacity: 1,
      duration: 0.7,
      ease: 'power4.out',
      stagger: 0.05,
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <h2
      ref={headingRef}
      className={`text-3xl md:text-5xl font-bold text-black ${className}`}
    >
      {text}
    </h2>
  );
};

export default ReadingHeading;
