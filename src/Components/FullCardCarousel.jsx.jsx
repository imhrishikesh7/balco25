import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
    {
        img: "ProgressYear/IMG1.png",
        title: "Financial",
        description:
            "We consistently deliver robust earnings, maintain low operating costs and generate significant free cash flows, showing our resilience and efficiency.",
        stats: [
            { value: "₹ 12,156", unit: "crore", label: "Net Worth" },
            { value: "₹ 2,969", unit: "crore", label: "PAT" },
            { value: "₹ 11,935", unit: "crore", label: "Reserves and Surplus" },
        ],
    },
    {
        img: "ProgressYear/IMG2.png",
        title: "Growth",
        description:
            "Our growth trajectory remains strong, fueled by investments in innovation, capacity expansion, and customer-centric strategies.",
        stats: [
            { value: "25%", unit: "", label: "Revenue Growth" },
            { value: "18%", unit: "", label: "EBITDA Margin" },
            { value: "₹ 3,200", unit: "crore", label: "Capex" },
        ],
    },
    {
        img: "ProgressYear/IMG3.png",
        title: "Sustainability",
        description:
            "We are committed to sustainability with green operations, reduced emissions, and eco-friendly initiatives across all units.",
        stats: [
            { value: "30%", unit: "", label: "Emission Reduction" },
            { value: "50 MW", unit: "", label: "Renewable Energy" },
            { value: "100%", unit: "", label: "Green Certifications" },
        ],
    },
    {
        img: "ProgressYear/IMG4.png",
        title: "Innovation",
        description:
            "Driving the future with cutting-edge R&D, smart technologies, and digital transformation across all business segments.",
        stats: [
            { value: "₹ 500", unit: "crore", label: "R&D Investment" },
            { value: "120+", unit: "", label: "Patents Filed" },
            { value: "15%", unit: "", label: "Automation Increase" },
        ],
    },
    {
        img: "ProgressYear/IMG5.png",
        title: "Community",
        description:
            "Giving back to society through education, health, and livelihood programs that uplift communities and promote inclusion.",
        stats: [
            { value: "₹ 150", unit: "crore", label: "CSR Spent" },
            { value: "500+", unit: "", label: "Villages Impacted" },
            { value: "2L+", unit: "", label: "Beneficiaries" },
        ],
    },
];


const CardContent = ({ card }) => (
    <div className="bg-[#1a3866] text-white gap-6 rounded-xl p-3 sm:p-6 flex flex-col sm:flex-row items-stretch justify-center shadow-2xl mx-2 my-4">
        {/* Image */}
        <div className="w-full md:w-1/2 md:h-[440px] mb-4 sm:mb-0">
            <img
                src={card.img}
                alt={card.title}
                className="rounded-xl w-full h-full object-cover"
            />
        </div>

        {/* Text Content */}
        <div className="w-full sm:w-1/2 space-y-4">
            <div className="flex items-center gap-2">
                {/* Logo Circle */}
                <div className="w-10 h-10 rounded-full bg-[#8adb3a] flex items-center justify-center">
                    <img src="/icons/finance.png" alt="logo" className="w-4 h-4" />
                </div>

                {/* Title Label */}
                <div className="inline-block bg-[#8adb3a] text-[#012231] font-bold text-sm py-1 px-2 rounded-md uppercase tracking-widest">
                    {card.title}
                </div>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-white">
                {card.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[#01a7e1] font-extrabold text-2xl md:text-[4vh]">
                {card.stats.map((stat, i) => (
                    <div key={i} className="bg-[#1a3866] p-1 rounded-xl">
                        {stat.value}{" "}
                        <span className="text-[#a6ecfc] text-2xl md:text-[3vh] font-semibold">
                            {stat.unit}
                        </span>
                        <p className="text-lg md:text-[2vh] text-white font-medium">
                            {stat.label}
                        </p>
                        <div className="w-[50px] bg-gradient-to-r from-[#ee8846] to-transparent my-3 h-[1.5px]"></div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const FullCardCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "10%",
        arrows: true,
        adaptiveHeight: true,
    };

    return (
        <div className="w-full py-10">
            {/* Carousel for large screens */}
            <div className="hidden lg:block">
                <Slider {...settings}>
                    {cards.map((card, index) => (
                        <div key={index}>
                            <CardContent card={card} />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Static vertical cards for small/medium screens */}
            <div className="block lg:hidden px-4">
                {cards.map((card, index) => (
                    <CardContent card={card} key={index} />
                ))}
            </div>
        </div>
    );
};

export default FullCardCarousel;
