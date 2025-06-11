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
        stats: [

            { value: "2,16,997Mt", label: "FY 2025 Production" },
        ],
    },
    {
        img: "DiverseProducts/Ingots.webp",
        title: "INGOTS ",
        description:
            "Our growth trajectory is fueled by innovation, capacity expansion, and customer-centric strategies.",
        stats: [
            { value: "2,50,004 Mt", label: "FY 2025 Production" },
        ],
    },
    {
        img: "DiverseProducts/Rolled-Products.webp",
        title: "ROLLED PRODUCTS ",
        description:
            "Committed to green operations, reduced emissions, and eco-friendly initiatives.",
        stats: [
            { value: "29,643 Mt", unit: "", label: "FY 2025 Production" },
        ],
    },
    {
        img: "DiverseProducts/Promary Foundry.webp",
        title: "PRIMARY FOUNDRY ALLOY ",
        description:
            "Driving with cutting-edge R&D, smart tech, and digital transformation.",
        stats: [
            { value: "77,501 Mt", unit: "", label: "FY 2025 Production" },
        ],
    },
    {
        img: "DiverseProducts/AlSi_Ingot.webp",
        title: "AlSi T-INGOT",
        description:
            "Supporting education, health, and livelihood programs across the nation.",
        stats: [
            { value: "12,059 Mt", unit: "", label: "FY 2025 Production" },
        ],
    },
   

];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
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
              <div className="hidden sm:flex flex-wrp gap-5 justify-center">
                {Array.isArray(cards) && cards.map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[#1a3866] text-white w-[20%] h-[680px] rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow"
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="bg-[#8adb3a] text-[#012231] text-center font-bold text-sm py-2 uppercase tracking-widest rounded-xl transform -translate-y-5 mx-4">
                      {card.title}
                    </div>
                    <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                      <p className="text-sm text-gray-100">{card.description}</p>
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
                  </motion.div>
                ))}
              </div>
  
              {/* Mobile Carousel */}
              <div className="block sm:hidden">
                <Slider {...settings}>
                  {Array.isArray(cards) && cards.map((card, i) => (
                    <div key={i}>
                      <div className="bg-[#0e2a40] text-white w-[90%] mx-auto h-[680px] rounded-xl shadow-lg overflow-hidden flex flex-col">
                        <img
                          src={card.img}
                          alt={card.title}
                          className="w-full h-80 object-cover"
                        />
                        <div className="bg-[#8adb3a] text-[#012231] text-center font-bold text-sm py-2 uppercase tracking-widest">
                          {card.title}
                        </div>
                        <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                          <p className="text-sm text-gray-100">{card.description}</p>
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
