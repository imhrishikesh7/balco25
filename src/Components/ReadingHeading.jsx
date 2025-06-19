import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ReadingHeading = ({ text, className = '' }) => {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <h2
      ref={headingRef}
      className={`text-3xl md:text-5xl font-[700] ${className}`}
    >
      {text}
    </h2>
  );
};

export default ReadingHeading;

// import React, { useEffect, useRef } from 'react';
// import SplitType from 'split-type';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const ReadingHeading = ({ text, className = '' }) => {
//   const headingRef = useRef(null);

//   useEffect(() => {
//     const split = new SplitType(headingRef.current, {
//       types: 'chars',
//     });

//     const chars = headingRef.current.querySelectorAll('.char');

//     // Wrap each character in a span to control vertical mask
//     chars.forEach((char) => {
//       const wrapper = document.createElement('span');
//       wrapper.style.display = 'inline-block';
//       wrapper.style.overflow = 'hidden';
//       wrapper.style.paddingBottom = '4px'
//     //   wrapper.style.border = '3px solid black'
//       wrapper.style.verticalAlign = 'bottom';

//       char.parentNode.replaceChild(wrapper, char);
//       wrapper.appendChild(char);
//     });

//     // Animate each char from below
//     gsap.set(chars, { y: '100%' });

//     gsap.to(chars, {
//       y: '0%',
//       duration: 0.5,
//       ease: 'power3.out',
//       stagger: 0.05,
//       scrollTrigger: {
//         trigger: headingRef.current,
//         start: 'top 80%',
//         toggleActions: 'play none none reverse',
//       },
//     });

//     return () => {
//       split.revert();
//     };
//   }, []);

//   return (
//     <h2
//       ref={headingRef}
//       className={`text-4xl md:text-7xl  font-[900] ${className}`}
//     //   style={{
//     //     backgroundImage: 'linear-gradient(to right, #1168b3, #00aabb)',
//     //     WebkitBackgroundClip: 'text',
//     //     WebkitTextFillColor: 'transparent',
//     //   }}
//     >
//       {text}
//     </h2>
//   );
// };

// export default ReadingHeading;
