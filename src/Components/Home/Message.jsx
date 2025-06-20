import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReadingText from '../Readingtext';
import ReadingHeading from '../ReadingHeading';
import { title } from 'framer-motion/client';
import FadeAnimator from '../FadeAnimator';
import ReadMore from '../ReadMore';

const Message = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    {
      image: "/Chairman/MR.-S-K-R.webp",
      alt: "chairman",
      bgImage: "bg-[#a27b5b]",
      bgText: "bg-[#e3d1c2]/30",
      quote: '"We believe in enhancing long-term value creation through adaptation, innovation and sustainability. Our customer-centric approach, coupled with our expertise in understanding their evolving needs, enables us to maintain a competitive edge in this dynamic environment."',
      name: "S.K. Roongta",
      desg: "Chairman & Independent Director",
      textColor: "text-[#0064a8]",
      title: "Chairman's communique",
      link: "/chairmans_communique"
    },
    {
      image: "/CEO/Rajesh-Kumar.webp",
      alt: "CEO",
      bgImage: "bg-[#acd4f1]",
      bgText: "bg-[#1a3866]/30",
      quote: '"We are exploring and investing in cuttingedge technologies for both of our power and metal operations. This strategic focus aims to achieve a dual objectivefurther optimising operational processes and reducing our environmental footprint."',
      name: "Rajesh Kumar",
      desg: "Chief Executive Officer",
      textColor: "text-[#acd4f1]",
      title: "Letter from CEO",
      link: "/letter_from_ceo_"
    },
    {
      image: "KnowBALCO/CFO/Amit-Gupta.webp",
      alt: "CFO",
      bgImage: "bg-[#27bdbf]",
      bgText: "bg-[#016b71]/30",
      quote: "We aim to reach 1 MTPA hot metal production, sourcing 30% alumina from Vedanta's Lanjigarh refinery and transitioning to 100% value-added product sales domestically via online and ex-works channels.",
      name: "Amit Gupta",
      desg: "Chief Financial Officer",
      textColor: "text-[#ffffff]",
      title: "CFO's message",
      link: "/cfos_message"
    },
  ];

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="marginal relative">
      <Slider ref={sliderRef} {...settings} className="outline-none max-w-[90%] mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="px-2 pb-1">
            {/* Heading with Custom Arrows */}
            <div className="flex items-center justify-between mb-10">
              <ReadingHeading text={card.title} className="text-black font-[500] !text-4xl" />
              <div className="flex gap-2">
                <button
                  onClick={goToPrev}
                  className="bg-white/50 hover:bg-white/70 cursor-pointer border-[#2263a7] border  rounded-full w-10 h-10 flex items-center justify-center"
                  aria-label="Previous"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="bg-white/50 hover:bg-white/70 cursor-pointer rounded-full w-10 h-10 flex items-center justify-center border-[#2263a7] border"
                  aria-label="Next"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            <div className={`flex flex-col lg:flex-row rounded-2xl bg-white border border-gray-300 shadow-lg p-4 overflow-hidden`}>
              {/* Image */}
              <div className={`bg-gradient-to-tr from-gray-500 to-gray-200 w-full overflow-hidden rounded-2xl lg:w-[40%] flex items-center justify-center max-h-[400px] lg:max-h-[60vh]`}>
                <img
                  src={card.image}
                  alt={card.alt}
                  className='w-full h-full object-contain lg:object-cover'
                />
              </div>
              {/* Text */}
              <div className={`bg-white p-6 sm:p-8 lg:p-10 w-full lg:w-[60%] flex flex-col justify-center`}>
                <FadeAnimator
                  text={card.quote}
                  animationType="fadeUp"
                  speed={400}
                  startAnimation={true}
                  className={`text-2xl ${card.textColor}`}
                />

                <div className='flex mt-8 w-full items-center justify-between'>
                  <div>
                    <ReadMore to={card.link}/>
                  </div>
                  <div className='w-fit'>
                    <h1 className={`text-xl sm:text-xl font-semibold text-[#0063a7]`}>{card.name}</h1>
                    <h2 className={`text-sm sm:text-base font-medium text-gray-500`}>{card.desg}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Message;