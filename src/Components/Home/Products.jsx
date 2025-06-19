import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReadingHeading from '../ReadingHeading';
import Industries from './Industries';
import ReadingText from '../Readingtext';

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

const Products = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
            image: "/DiverseProducts/Wire-rods.webp",
            name: "WIRE RODS"
        },
        {
            image: "/DiverseProducts/Ingots.webp",
            name: "INGOTS",

        },
        {
            image: "/DiverseProducts/Rolled-Products.webp",
            name: "ROLLED PRODUCTS",
        },
        {
            image: "/DiverseProducts/Promary Foundry.webp",
            name: "PRIMARY FOUNDRY ALLOY",
        },
        {
            image: "/DiverseProducts/AlSi_Ingot.webp",
            name: "AlSi T-INGOT",
        },
    ];
    return (
        <div className="marginal relative">
            <ReadingHeading text="Our diverse product range" className="text-black text-center font-[500] !text-4xl" />
            <Slider {...settings} className="outline-none">
                {cards.map((card, index) => (
                    <div key={index} className="px-2 py-12"> {/* pb-12 for arrow space */}
                        {/* <ReadingHeading text={card.title} className="text-[#2263a7] font-[500] mb-10 text-3xl" /> */}
                        <div className=''>
                            {/* Image */}
                            <div className={` w-full h-70 rounded-3xl bg-[#66cc33] pb-4 overflow-hidde`}>
                                <img
                                    src={card.image}
                                    alt=""
                                    className='w-full h-[90%] rounded-3xl object-contain lg:object-cover'
                                />
                                <div className='py-2 text-center bg-[#74bf44]/ rounded-3xl text-white font-[600] text-base'>
                                    {card.name}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className='mt-16'>
                <ReadingText text={"INDUSTRIES WE SERVE"} className='bg-gradient-to-r text-white font-bold  mx-auto rounded-2xl rounded-b bg-[#66cc33] py-2 w-fit px-4' />

                <div className='border border-[#0db14b] p-6 rounded-3xl '>
                    <Industries />
                </div>
            </div>

        </div>
    )
}

export default Products