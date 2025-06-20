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
    <div className='h-screen flex items-center justify-center'>
      <div className="marginal">


        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 mt-6">
          {/* Left Side Text */}
          <div className="lg:w-[50%]">
            <ReadingHeading text="Empowering Progress" className="text-black mt-10" />

            <ReadingText text="while Shaping the Future" className="text-[#66cc33] mt-4 !font-[700] !text-3xl" />
            <div className='mt-4'>
              <FadeAnimator
                text="As India marches confidently towards becoming a global superpower by 2050, infrastructure development is poised to play a significant role. We, at BALCO, understand the key role that aluminium plays in powering
the nation’s industrial evolution. Capitalising on this opportunity, we are focused on delivering value through innovative manufacturing technologies and solutions."
                animationType="fadeUp"
                speed={400}
                startAnimation={true}
                className="my-custom-class"
              />
            </div>
            <div classxName='mt-6'>
              <ReadMore to={"/empowering_progress_while_shaping_the_future"}/>
            </div>
          </div>
          {/* Right Side Hex Layout */}
          <div className="lg:w-[50%] relative md:block hidden h-[300px]">
            {images.map((src, i) => (
              <div
                key={i}
                ref={(el) => (imageRefs.current[i] = el)}
                className={`absolute 
                w-32 h-32 lg:w-65 lg:h-65`}
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
    </div>
  );
};

export default About;
