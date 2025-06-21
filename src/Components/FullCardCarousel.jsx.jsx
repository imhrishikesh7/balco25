import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
    {
        img: "ProgressYear/IMG1.webp",
        title: "FINANCIAL",
        description:
            "We consistently deliver robust earnings, maintain low operating costs and generate significant free cash flows, showing our resilience and efficiency.",
        stats: [
            { value: "₹ 12,156 crore", unit: "", label: "Net Worth" },
            { value: "₹ 2,969 crore", unit: "", label: "PAT" },
            { value: "₹ 11,935 crore", unit: "", label: "Reserves and Surplus" },
        ],
    },
    {
        img: "ProgressYear/IMG2.webp",
        title: "OPERATIONAL GROWTH",
        description:
            "We are constantly motivated on improving our costs and our quality of production in each of our business through a culture of best practice benchmarking, thereby, delivering value of the highest standard to our stakeholders.",
        description2:
            "(Through increased pot life and reduction of pot turn-around-time)",
        stats: [
            { value: "587 KT", unit: "", label: "Aluminium production" },
            // { value: "", unit: "", label: "(Through increased pot life and reduction of pot turn-around-time)" },
            { value: "99.4%", unit: "", label: "Pot Availability" },
        
        ],
    },
    {
        img: "ProgressYear/IMG3.webp",
        title: "HEALTH & SAFETY",
        description:
            "We have established stringent safety protocols and continuous training programmes to ensure a safe working environment, aiming for zero fatalities and minimal injury rates.",
        stats: [
            { value: "70", unit: "", label: "Safety drills conducted" },
            { value: "0", unit: "", label: "Fatalities" },
            { value: "0", unit: "", label: "Fatal injury frequency rate" },
        ],
    },
    {
        img: "ProgressYear/IMG4.webp",
        title: "ENVIRONMENT",
        description:
            "We aim to reduce CO2 emissions at the source and integrate environmental stewardship practices throughout our operations.",
        stats: [
            { value: "1.5%", unit: "", label: "Reduction in CO2e from FY-2024" },
            { value: "40,653", unit: "", label: "Amount of energy generated from Renewables" },
            { value: "5.2 Mn m³", unit: "", label: "AWater Recycled" },
        ],
    },
    {
        img: "ProgressYear/IMG5.webp",
        title: "SOCIAL",
        description:
            "We showcase our social responsibility philosophy by investing in training programmes, promoting gender diversity and supporting local communities.",
        stats: [
            { value: "2.03", unit: "Lac", label: "CSR Beneficiaries" },
            { value: "₹ 17.95 crore", unit: "", label: "Spent on CSR initiatives" },
            { value: "7,457", unit: "", label: "Student benefitted" },
            { value: "5,810", unit: "", label: "Women benefitted" },
        ],
    },
];

// Dynamic icon mapping based on title
const getIconPath = (title) => {
    const iconMap = {
        "FINANCIAL": "ProgressYear/Financial.webp",
        "OPERATIONAL GROWTH": "ProgressYear/Operational-Growth.webp",
        "HEALTH & SAFETY": "ProgressYear/HealthSafety.webp",
        "ENVIRONMENT": "ProgressYear/Environment.webp",
        "SOCIAL": "ProgressYear/Social.webp"
    };
    
    return iconMap[title] || "/icons/default.webp"; // fallback icon
};

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
                {/* Logo Circle with Dynamic Icon */}
                <div className="w-10 h-10 rounded-full bg-[#8adb3a] flex items-center justify-center">
                    <img 
                        src={getIconPath(card.title)} 
                        alt={`${card.title} icon`} 
                        className="w-4 h-4" 
                    />
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
                        <span className="text-[#01a7e1] text-2xl md:text-[3vh] font-semibold">
                            {stat.unit}
                        </span>
                        <p className="text-lg md:text-[2vh] text-white font-medium">
                            {stat.label}
                        </p>
                        
                        <div className="w-[50px] bg-gradient-to-r from-[#ee8846] to-transparent my-3 h-[1.5px]"></div>
                    </div>
                ))}
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-white">
                {card.description2}
            </p>
        </div>
    </div>
);

const FullCardCarousel = () => {
    const sliderRef = React.useRef(null);
    
    const settings = {
        dots: false, // Disable default dots
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "10%",
        arrows: false, // Disable default arrows
        adaptiveHeight: true,
    };

    const goToPrev = () => {
        sliderRef.current?.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current?.slickNext();
    };

    return (
        <div className="w-full py-10">
            {/* Carousel for large screens */}
            <div className="hidden lg:block">
                <Slider {...settings} ref={sliderRef}>
                    {cards.map((card, index) => (
                        <div key={index}>
                            <CardContent card={card} />
                        </div>
                    ))}
                </Slider>
                
                {/* Custom Navigation Buttons */}
                <div className="flex justify-center items-center gap-6 mt-8">
                    <button
                        onClick={goToPrev}
                        className="w-12 h-12 rounded-full bg-[#8adb3a] hover:bg-[#7bc934] flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        <svg 
                            className="w-6 h-6 text-[#012231]" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <button
                        onClick={goToNext}
                        className="w-12 h-12 rounded-full bg-[#8adb3a] hover:bg-[#7bc934] flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        <svg 
                            className="w-6 h-6 text-[#012231]" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
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