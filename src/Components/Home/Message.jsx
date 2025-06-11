import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReadingText from '../Readingtext';
import ReadingHeading from '../ReadingHeading';
import { title } from 'framer-motion/client';

// Custom Arrows (Bottom Center)
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute bottom-0 left-1/2 transform -translate-x-14 bg-white/50 hover:bg-white/70 cursor-pointer border-[#2263a7] border rounded-full w-10 h-10 flex items-center justify-center z-10"
    aria-label="Previous"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute bottom-0 left-1/2 transform translate-x-4 bg-white/50 hover:bg-white/70 cursor-pointer rounded-full w-10 h-10 flex items-center justify-center border-[#2263a7] border z-10"
    aria-label="Next"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18l6-6-6-6" />
    </svg>
  </button>
);

const Message = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
          arrows: false, // Optionally hide arrows on small screens
        },
      },
    ],
  };

  const cards = [
    {
      image: "/Chairman/MR.-S-K-R.png",
      alt: "chairman",
      bgImage: "bg-[#a27b5b]",
      bgText: "bg-[#e3d1c2]",
      quote: '"We believe in enhancing long-term value creation through adaptation, innovation and sustainability. Our customer-centric approach, coupled with our expertise in understanding their evolving needs, enables us to maintain a competitive edge in this dynamic environment."',
      name: "S.K. Roongta",
      desg: "Chairman & Independent Director",
      textColor: "text-[#0064a8]",
      title: "Chairman’s communique"
    },
    {
      image: "/CEO/Rajesh-Kumar.png",
      alt: "CEO",
      bgImage: "bg-[#acd4f1]",
      bgText: "bg-[#1a3866]",
      quote: '"We are exploring and investing in cuttingedge technologies for both of our power and metal operations. This strategic focus aims to achieve a dual objectivefurther optimising operational processes and reducing our environmental footprint."',
      name: "Rajesh Kumar",
      desg: "Chief Executive Officer",
      textColor: "text-[#acd4f1]",
      title: "Letter from CEO"

    },
    {
      image: "KnowBALCO/CFO/Amit-Gupta.png",
      alt: "CFO",
      bgImage: "bg-[#27bdbf]",
      bgText: "bg-[#016b71]",
      quote: '"We aim to reach 1 MTPA hot metal production, sourcing 30% alumina from Vedanta’s Lanjigarh refinery and transitioning to 100% value-added product sales domestically via online and ex-works channels."',
      name: "Amit Gupta",
      desg: "Chief Financial Officer",
      textColor: "text-[#ffffff]",
      title: "CFO’s message"

    },
  ];

  return (
    <div className="marginal relative">
      <Slider {...settings} className="outline-none">
        {cards.map((card, index) => (
            <div key={index} className="px-2 pb-12"> {/* pb-12 for arrow space */}
            <ReadingHeading text={card.title} className="text-[#3c9b8a] font-[500] mb-10 text-3xl" />
            <div className='flex flex-col lg:flex-row rounded-2xl overflow-hidden'>
              {/* Image */}
              <div className={`${card.bgImage} w-full lg:w-[40%] flex items-center justify-center max-h-[400px] lg:max-h-[70vh]`}>
                <img
                  src={card.image}
                  alt={card.alt}
                  className='w-full h-full object-contain lg:object-cover'
                />
              </div>
              {/* Text */}
              <div className={`${card.bgText} p-6 sm:p-8 lg:p-10 w-full lg:w-[60%] flex flex-col justify-center`}>
                <p className={`text-base sm:text-lg lg:text-2xl xl:text-3xl ${card.textColor} font-bold leading-relaxed`}>
                  {card.quote}
                </p>
                <div className='pt-6 text-right'>
            {/* <ReadingText text={card.quote}  className="font-[500] mb-10 text-3xl" /> */}
                  <h1 className={`text-xl sm:text-2xl font-bold ${card.textColor}`}>{card.name}</h1>
                  <h2 className={`text-sm sm:text-base font-medium ${card.textColor}`}>{card.desg}</h2>
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
