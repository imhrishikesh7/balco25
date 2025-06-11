import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReadingHeading from '../ReadingHeading';
import ReadingText from '../Readingtext';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        }
      );
    });
  }, []);

  const images = [
    '/home/1.png',
    '/home/2.png',
    '/home/3.png',
    '/home/4.png',
    '/home/5.png',
    '/home/6.png',
  ];

  const positions = [
    { top: '50%', left: '50%' }, // Center
    { top: '0%', left: '50%' }, // Top
    { top: '30%', left: '70%' }, // Right
    { top: '30%', left: '30%' }, // Bottom
    { top: '80%', left: '30%' }, // Left
    { top: '80%', left: '70%' }, // Top-right (optional, for 6th image)
  ];
  return (
    <div className="marginal">
      <ReadingHeading text="Empowering Progress" className="text-[#3c9b8a] mt-10" />
      

      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 mt-10">
        {/* Left Side Text */}
        <div className="lg:w-[55%]">
        <ReadingText text="while Shaping the Future" className="text-black font-[500] text-3xl" />
          <ReadingText
            text="As India marches confidently towards becoming a global superpower by 2050, infrastructure development is poised to play a significant role. We, at BALCO, understand the key role that aluminium plays in powering
the nation’s industrial evolution. Capitalising on this opportunity, we are focused on delivering value through innovative manufacturing technologies and solutions."
            className="text-[#2263a7] font-[500] mt-6 text-2xl"
          />
        </div>

        {/* Right Side Hex Layout */}
        <div className="lg:w-[45%] relative h-[300px]">
          {images.map((src, i) => (
            <div
              key={i}
              ref={(el) => (imageRefs.current[i] = el)}
              className={`absolute 
                w-32 h-32 lg:w-40 lg:h-40`}
              style={{
                top: positions[i].top,
                left: positions[i].left,
                transform: 'translate(-50%, -50%)',
                zIndex: 10 - i,
              }}
            >
              <img
                src={src}
                alt={`abstract-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;
