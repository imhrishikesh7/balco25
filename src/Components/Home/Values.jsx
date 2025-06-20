import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReadingHeading from '../ReadingHeading';
import ReadMore from '../ReadMore';

gsap.registerPlugin(ScrollTrigger);

const BubbleIcon = ({ icon }) => (
  <div style={{ fontSize: '2.5rem', margin: 'auto' }}>{icon}</div>
);

const Bubble = ({ icon, link, rotation, index }) => {
  const bubbleRef = useRef(null);

  useEffect(() => {
    const el = bubbleRef.current;

    // Animate in when entering viewport
    gsap.fromTo(
      el,
      { scale: 0.6, opacity: 0, y: 50 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        delay: index * 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
      }
    );

    // Floating animation
    gsap.to(el, {
      rotation,
      y: 20,
      duration: 6 + Math.random() * 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, [rotation, index]);

  return (
    <a
      href={"/strengthening_indias_industrial_backbone"}
      rel="noopener noreferrer"
      ref={bubbleRef}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '220px',
        height: '220px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.7), rgba(173,255,189,0.3) 60%, rgba(0,255,128,0.15))',
        border: '2px solid rgba(255, 255, 255, 0.4)',
        boxShadow: `
          inset 0 0 25px rgba(255, 255, 255, 0.3),
          0 8px 30px rgba(0, 255, 128, 0.3)
        `,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        color: '#e8fff2',
        margin: '0 16px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={() => gsap.to(bubbleRef.current, { scale: 1.1, duration: 0.3 })}
      onMouseLeave={() => gsap.to(bubbleRef.current, { scale: 1.0, duration: 0.3 })}
    >
      <img src={icon} className='w-30 ' />
    </a>
  );
};

const Values = () => {
  const bubbles = [
    { icon: '/home/vison.webp', link: '#search', rotation: 8 },
    { icon: '/home/mission.webp', link: '#books', rotation: -6 },
    { icon: '/home/values.webp', link: '#ideas', rotation: 10 },
  ];

  return (
    <div>
      <div
        className=''
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          padding: '60px 20px',
          gap: '30px',
        }}
      >
        {bubbles.map((bubble, index) => (
          <Bubble
            key={index}
            icon={bubble.icon}
            link={bubble.link}
            rotation={bubble.rotation}
            index={index}
          />
        ))}
      </div>
      <div className='mx-auto my-10 w-fit z-10'>
        <ReadMore theme='white' to={"/strengthening_indias_industrial_backbone"} />
      </div>
    </div>
  );
};

export default Values;
