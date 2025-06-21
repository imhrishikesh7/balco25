import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReadingHeading from '../ReadingHeading';
import ReadingText from '../Readingtext';
import FadeAnimator from '../FadeAnimator';
import ReadMore from '../ReadMore';

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
    '/home/1.webp',
    '/home/2.webp',
    '/home/3.webp',
    '/home/4.webp',
    '/home/5.webp',
    '/home/6.webp',
  ];

  const positions = [
    { top: '0%', left: '50%' }, // Top
    { top: '57%', left: '50%' }, // Center
    { top: '30%', left: '75%' }, // Right
    { top: '30%', left: '24%' }, // Bottom
    { top: '100%', left: '30%' }, // Left
    { top: '100%', left: '70%' }, // Top-right (optional, for 6th image)
  ];

  return (
    <div className='min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-0'>
      <div className="marginal w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 lg:gap-10 mt-6">
          {/* Left Side Text */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center">
            <ReadingHeading 
              text="Empowering Progress" 
              className="text-black mt-4 lg:mt-10 text-center lg:text-left text-2xl sm:text-3xl lg:text-4xl xl:text-5xl" 
            />

            <ReadingText 
              text="while Shaping the Future" 
              className="text-[#66cc33] mt-2 lg:mt-4 !font-[700] !text-xl sm:!text-2xl lg:!text-3xl xl:!text-4xl text-center lg:text-left" 
            />
            
            <div className='mt-4 lg:mt-6'>
              <FadeAnimator
                text="As India marches confidently towards becoming a global superpower by 2050, infrastructure development is poised to play a significant role. We, at BALCO, understand the key role that aluminium plays in powering the nation's industrial evolution. Capitalising on this opportunity, we are focused on delivering value through innovative manufacturing technologies and solutions."
                animationType="fadeUp"
                speed={400}
                startAnimation={true}
                className="text-[#0561aa] text-sm sm:text-base lg:text-lg text-center lg:text-left leading-relaxed"
              />
            </div>
            
            <div className='mt-6 lg:mt-8 flex justify-center lg:justify-start'>
              <ReadMore to={"/empowering_progress_while_shaping_the_future"} />
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-full lg:w-[50%] flex items-center justify-center">
            <div className="w-full max-w-md lg:max-w-full">
              <img 
                src="EmpoweringProcess/Balco-Collage.png" 
                alt="BALCO Collage" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;