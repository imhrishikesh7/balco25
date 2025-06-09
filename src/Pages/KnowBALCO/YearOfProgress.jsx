import React from "react";
import Carousel from "../../Components/FullCardCarousel.jsx.jsx";

const YearOfProgress = () => {
    return (
        <div className="bg-[#012231] text-white px-6 sm:px-16 py-10 space-y-1">
            {/* Heading & Subtext */}
            <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">A year of progress</h1>
                <p className="text-lg sm:text-xl font-medium max-w-4xl">
                    As India’s foremost aluminium producer, we play an important role in boosting the national economy.
                    With its products finding versatile applications across various sectors, our Company contributes
                    <span className="font-semibold text-white"> 15% of the nation’s aluminium</span>, delivering
                    <span className="font-semibold text-white"> Six Lakh tonnes annually.</span>
                </p>
                <p className="text-sm sm:text-base text-gray-300 mt-4 max-w-3xl">
                    Backed by a 1,740 MW power capacity, we ensure seamless production, innovation and sustainability.
                    Our values drive India’s growth-supporting sectors from infrastructure to advanced manufacturing.
                </p>
            </div>

            {/* Image & Financial Box */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
            </div>
            <Carousel/>
        </div>
    );
};

export default YearOfProgress;
