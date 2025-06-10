import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StrokeFillHeading = ({ text = 'Bharat Aluminium', className = '' }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const strokeText = svgRef.current.querySelector('.stroke');
    const fillText = svgRef.current.querySelector('.fill');

    // Stroke draw animation
    gsap.fromTo(strokeText, {
      strokeDasharray: 1000,
      strokeDashoffset: 1000,
      opacity: 0.3,
    }, {
      strokeDashoffset: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: svgRef.current,
        start: 'top 80%',
      },
    });

    // Fill animation with transform and delay
    gsap.fromTo(fillText, {
      opacity: 0,
      x: 30,
      y: 10,
      skewX: 10,
      rotateY: 30,
    }, {
      opacity: 1,
      x: 0,
      y: 0,
      skewX: 0,
      rotateY: 0,
      duration: 1,
      ease: 'expo.out',
      delay: 0.2,
      scrollTrigger: {
        trigger: svgRef.current,
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <div className={`w-full flex justify-center ${className}`}>
      <svg
        ref={svgRef}
        viewBox="0 0 1200 200"
        preserveAspectRatio="xMinYMid meet"
        className="w-full h-[200px]"
      >
        {/* Stroke outline text */}
        <text
          className="stroke"
          x="0"
          y="150"
          fontSize="120"
          fontFamily="Arial, sans-serif"
          stroke="#00b3ff"
          fill="none"
          strokeWidth="2"
        >
          {text}
        </text>

        {/* Fill animated text */}
        <text
          className="fill"
          x="0"
          y="150"
          fontSize="120"
          fontFamily="Arial, sans-serif"
          fill="white"
          opacity="0"
        >
          {text}
        </text>
      </svg>
    </div>
  );
};

export default StrokeFillHeading;
