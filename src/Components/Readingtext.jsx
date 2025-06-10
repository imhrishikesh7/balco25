import React, { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ReadingText = ({ text, className = '' }) => {
  const headingRef = useRef(null);

  useEffect(() => {
    // Split into lines instead of chars
    const split = new SplitType(headingRef.current, {
      types: 'lines',
    });

    const lines = headingRef.current.querySelectorAll('.line');

    // Wrap each line in a span to allow overflow mask animation
    lines.forEach((line) => {
      const wrapper = document.createElement('span');
      wrapper.style.display = 'block';
      wrapper.style.overflow = 'hidden';

      line.parentNode.replaceChild(wrapper, line);
      wrapper.appendChild(line);
    });

    gsap.set(lines, { y: '100%' });

    gsap.to(lines, {
      y: '0%',
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.2,
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
      className={` font-bold leading-tight whitespace-pre-line ${className}`}
    >
      {text}
    </h2>
  );
};

export default ReadingText;
