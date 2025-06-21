import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Industries from '../../Components/Home/Industries';
import ReadingText from '../../Components/Readingtext';

const cards = [
    {
        img: "DiverseProducts/Wire-rods.webp",
        title: "WIRE RODS",
        description:
            "BALCO is one of the leading wire rod manufacturers in the world. Our mills are fully equipped with in-line degassing and filtration systems to ensure good internal metal quality and cleanliness.",
        description1:"Other aligned products in the same segment includes:",
        description2:"ALLOY WIRE RODS",
        stats: [
            { value: "2,16,997", unit: "Mt", label: "FY 2025 Production" },
        ],
    },
    {
        img: "DiverseProducts/Ingots.webp",
        title: "INGOTS ",
        description:
            "BALCO produces primary aluminium ingots that are re-melted to produce a variety of end products covering the entire spectrum of aluminium applications using state- of-the-art technology.",
        stats: [
            { value: "2,50,004", unit: "Mt", label: "FY 2025 Production" },
        ],
    },
    {
        img: "DiverseProducts/Rolled-Products.webp",
        title: "ROLLED PRODUCTS ",
        description:
            "BALCO is equipped to deliver high quality rolled products with application in automobiles, insulations, bus bars, power projects, electrical, packaging etc.",
        description1:"Other aligned products in the same segment includes:",
        description2:"ALLOY ROLLING PRODUCTS",
        description3:"COLD ROLLED COILS AND STRIPS",
        description4:"HOT ROLLED PLATES",
        description5:"COLD ROLLED SHEETS",
        stats: [
            { value: "29,643", unit: "Mt", label: "FY 2025 Production" },
        ],
    },
    {
        img: "DiverseProducts/Promary Foundry.webp",
        title: "PRIMARY FOUNDRY ALLOY ",
        description:
            "BALCO supplies primary foundry alloys in many industry segments. The casting facility has metal treatment facilities of Degassing & Metal Filtration Unit.",
        stats: [
            { value: "77,501", unit: "Mt", label: "FY 2025 Production" },
        ],
    },
    {
        img: "DiverseProducts/AlSi_Ingot.webp",
        title: "AlSi T-INGOT",
        description:
            "BALCO supplies AlSi T-INGOT for application in the steel industry.",
        stats: [
            { value: "12,059", unit: "Mt", label: "FY 2025 Production" },
        ],
    },
];

// Updated settings with better autoplay configuration
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    autoplay: true,
    autoplaySpeed: 3000, // Increased from 2000 to 3000ms
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    swipeToSlide: true,
    touchMove: true,
    useCSS: true,
    useTransform: true,
    accessibility: true,
    // Add arrows for better UX
    arrows: false, // Keep false for mobile clean look
    responsive: [
        {
            breakpoint: 768,
            settings: {
                centerMode: true,
                centerPadding: '10px',
                autoplay: true,
                autoplaySpeed: 3000,
            }
        }
    ]
};

const DiverseProducts = () => {
    return (
        <div className='bg-[#061c27]'>
        <div className='marginal'>
          <div className=''>
            <div className='pb-20'>
              <h1 className='text-2xl sm:text-2xl text-white lg:text-4xl font-medium pb-6 sm:pb-10'>
                Our diverse product range
              </h1>
              <div className='w-[75vw]'>
                <h2 className='text-lg sm:text-xl text-white pb-6 sm:pb-10'>
                  We provide comprehensive solutions across the aluminium value chain,
                  from mining to finished products, meeting the diverse needs of various
                  sectors. Our commitment to quality has established aluminium as a
                  viable alternative to other metals like steel and copper.
                </h2>
              </div>
  
              {/* Desktop Grid */}
              <div className="hidden sm:flex flex-wrap gap-5 justify-center">
                {Array.isArray(cards) && cards.map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[#1a3866] text-white w-[20%] rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow"
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-80 object-cover"
                      loading="lazy"
                    />
                    <div className="bg-[#8adb3a] pl-3 text-[#012231] font-bold text-sm py-1 uppercase tracking-widest rounded-xl transform -translate-y-4 mx-4">
                      {card.title}
                    </div>
                    <div className="p-4 space-y-4 flex-1 flex flex-col justify-between">
                      <p className="text-sm text-gray-100">{card.description}</p>
                      {card.description1 && <p className="text-sm text-gray-100">{card.description1}</p>}
                      {card.description2 && <p className="text-sm text-[#73bf43]">{card.description2}</p>}
                      {card.description3 && <p className="text-sm text-[#73bf43]">{card.description3}</p>}
                      {card.description4 && <p className="text-sm text-[#73bf43]">{card.description4}</p>}
                      {card.description5 && <p className="text-sm text-[#73bf43]">{card.description5}</p>}

                      <div className="space-y-2">
                        {Array.isArray(card.stats) && card.stats.map((s, j) => (
                          <div key={j}>
                            <p className="text-[#01a7e1] text-2xl font-bold">
                              {s.value}{" "}
                              <span className="text-[#01a7e1] font-bold text-base">
                                {s.unit || ""}
                              </span>
                            </p>
                            <p className="text-white text-sm">{s.label}</p>
                            <div className="w-[40px] h-[1px] bg-gradient-to-r from-[#ee8846] to-transparent my-1"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
  
              {/* Mobile Carousel with Fixed Autoplay */}
              <div className="block sm:hidden">
                <div style={{ overflow: 'hidden' }}>
                  <Slider {...settings}>
                    {Array.isArray(cards) && cards.map((card, i) => (
                      <div key={i} className="px-2">
                        <div className="bg-[#0e2a40] text-white w-full mx-auto h-[680px] rounded-xl shadow-lg overflow-hidden flex flex-col">
                          <img
                            src={card.img}
                            alt={card.title}
                            className="w-full h-80 object-cover"
                            loading="lazy"
                          />
                          <div className="bg-[#8adb3a] text-[#012231] text-center font-bold text-sm py-2 uppercase tracking-widest">
                            {card.title}
                          </div>
                          <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                            <div className="space-y-2">
                              <p className="text-sm text-gray-100">{card.description}</p>
                              {card.description1 && <p className="text-sm text-gray-100">{card.description1}</p>}
                              {card.description2 && <p className="text-sm text-[#73bf43]">{card.description2}</p>}
                              {card.description3 && <p className="text-sm text-[#73bf43]">{card.description3}</p>}
                              {card.description4 && <p className="text-sm text-[#73bf43]">{card.description4}</p>}
                              {card.description5 && <p className="text-sm text-[#73bf43]">{card.description5}</p>}
                            </div>
                            <div className="space-y-2">
                              {Array.isArray(card.stats) && card.stats.map((s, j) => (
                                <div key={j}>
                                  <p className="text-[#01a7e1] text-lg font-bold">
                                    {s.value}{" "}
                                    <span className="text-[#a6ecfc] font-medium text-base">
                                      {s.unit || ""}
                                    </span>
                                  </p>
                                  <p className="text-white text-sm">{s.label}</p>
                                  <div className="w-[40px] h-[1px] bg-gradient-to-r from-[#ee8846] to-transparent my-1"></div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              <div className='mt-16'>
                <ReadingText text={"INDUSTRIES WE SERVE"} className='bg-gradient-to-r text-white  mx-auto rounded-2xl rounded-b from-[#2d82b2] to-[#70bf44] py-2 w-fit px-4' />

                <div className='border border-[#0db14b] p-6 rounded-3xl '>
                    <Industries />
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DiverseProducts;