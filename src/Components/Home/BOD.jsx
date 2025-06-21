import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReadingHeading from '../ReadingHeading';
import ReadMore from '../ReadMore';

const BOD = () => {
    const sliderRef = useRef(null);

    const boardMembers = [
        {
            id: 1,
            name: "Mr. Sushil Kumar Roongta",
            designation: "Chairman, Independent Director",
            img: "/home/bod/RKJ_9767.webp",
            committees: [
                { type: "csr", role: "Chairman", initial: "C" },
                { type: "audit", role: "Member", initial: "M" },
                { type: "nomination", role: "Member", initial: "M" }
            ]
        },
        {
            id: 2,
            name: "Mr. Rajesh Kumar",
            designation: "CEO & Whole Time Director",
            img: "/home/bod/01 CEO Rajesh Kumar copy.webp",
            committees: [
                { type: "csr", role: "Member", initial: "M" },
            ]
        },
        {
            id: 3,
            name: "Mr. Tarun Jain",
            designation: "Non-Executive Director",
            img: "/home/bod/Mr Tarun Jain_.webp",
            committees: [
                { type: "nomination", role: "Member", initial: "M" },
                { type: "audit", role: "Member", initial: "M" }
            ]
        },
        {
            id: 4,
            name: "Dr. Anoop Kumar Mittal",
            designation: "Independent Director",
            img: "/home/bod/1680520413168 (2).webp",
            committees: [
                { type: "csr", role: "Member", initial: "M" },

            ]
        },
        {
            id: 5,
            name: "Ms. Nirupama Kotru",
            designation: "Government Nominee Director",
            img: "/home/bod/Picture 1_1.webp",
            committees: [
                { type: "csr", role: "Member", initial: "M" },
            ]
        },
        {
            id: 6,
            name: "Ms. Farida M Naik",
            designation: "Government Nominee Director",
            img: "/home/bod/farida-m-naik-img.webp",
            committees: [
            ]
        },
        {
            id: 7,
            name: "Mr. Mustaq Ahmad",
            designation: "Government Nominee Director",
            img: "home/bod/Image-2.png",
            committees: [
            ]
        },
        {
            id: 8,
            name: "Mr. Maneesh Kumar",
            designation: "Government Nominee Director",
            img: "home/bod/Image-1.png",
            committees: [
            ]
        },
        {
            id: 9,
            name: "Mr. Dindayal Jalan",
            designation: "Independent Director",
            img: "/home/bod/Mr. D.D. Jalan.webp",
            committees: [
                { type: "nomination", role: "Chairman", initial: "C" },
                { type: "audit", role: "Chairman", initial: "C" }
            ]
        }
    ];

    const getCommitteeColor = (type) => {
        switch (type) {
            case 'audit': return '#ee9122';
            case 'csr': return '#72bf44';
            case 'nomination': return '#0064a7';
            default: return 'bg-gray-500';
        }
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false, // disable default arrows
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
            <div className="marginal mx-auto max-w-7xl">
                {/* Header with Navigation */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6 mb-8 lg:mb-12">
                    <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                            <ReadingHeading 
                                text="Board of Directors" 
                                className="text-black text-center sm:text-left font-[500] !text-2xl sm:!text-3xl lg:!text-4xl" 
                            />

                            {/* Arrows beside heading */}
                            <div className="flex items-center justify-center sm:justify-start space-x-3 sm:ml-auto">
                                <button
                                    onClick={() => sliderRef.current.slickPrev()}
                                    className="bg-white/50 hover:bg-white/70 cursor-pointer border-[#2263a7] border rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-300"
                                    aria-label="Previous"
                                >
                                    <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
                                </button>
                                <button
                                    onClick={() => sliderRef.current.slickNext()}
                                    className="bg-white/50 hover:bg-white/70 cursor-pointer border-[#2263a7] border rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-300"
                                    aria-label="Next"
                                >
                                    <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOD Slider */}
                <div className="mb-8 lg:mb-12">
                    <Slider ref={sliderRef} {...settings}>
                        {boardMembers.map((member) => (
                            <div key={member.id} className="group py-3 sm:py-6">
                                <div className="bg-white rounded-2xl lg:rounded-3xl overflow-hidden transform transition-all duration-700 hover:scale-[1.02] hover:shadow-lg border border-gray-100 hover:border-blue-200 mx-2 sm:mx-3">
                                    <div className="relative overflow-hidden bg-gradient-to-tr z-1 from-gray-500 to-gray-200">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-full h-60 sm:h-72 lg:h-80 object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 flex flex-col space-y-2 sm:space-y-3">
                                            {member.committees.map((committee, index) => (
                                                <div
                                                    key={index}
                                                    className={`relative z-10 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 hover:scale-125 hover:rotate-12 border-2 border-white/20 backdrop-blur-sm`}
                                                    title={`${committee.role} - ${committee.type.charAt(0).toUpperCase() + committee.type.slice(1)} Committee`}
                                                    style={{
                                                        backgroundColor: getCommitteeColor(committee.type)
                                                    }}
                                                >
                                                    <span className="text-white text-xs sm:text-sm font-black tracking-wider">
                                                        {committee.initial}
                                                    </span>
                                                    <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-4 sm:p-6 lg:p-8 relative">
                                        <div className="absolute top-0 left-4 sm:left-6 lg:left-8 w-12 sm:w-14 lg:w-16 h-1 bg-[#66cc33] transform -translate-y-1"></div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 group-hover:text-[#0064a7] transition-colors duration-500 leading-tight">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                                            {member.designation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Read More Button */}
                <div className='w-fit mx-auto mb-8 lg:mb-12'>
                    <ReadMore to={"/profiles_of_board_of_directors"}/>
                </div>

                {/* Committee Legend */}
                <div className="bg-gradient-to-r from-gray-50 rounded-2xl lg:rounded-3xl to-blue-50 p-4 sm:p-6 lg:p-8 border border-gray-200">
                    <div className="mb-6 lg:mb-8">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center lg:text-left">
                            Board committees
                        </h3>
                    </div>
                    
                    {/* Desktop Layout */}
                    <div className="hidden lg:flex lg:flex-wrap lg:gap-8 lg:items-center">
                        {[
                            { label: "AUDIT COMMITTEE", color: "#ee9122", border: "#fdf0e1" },
                            { label: "CSR COMMITTEE", color: "#72bf44", border: "#edf6e8" },
                            { label: "NOMINATION & REMUNERATION COMMITTEE", color: "#0064a7", border: "#e1e5f1" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-3 items-center">
                                <div className="relative">
                                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: item.color }}></div>
                                    <div className="absolute inset-0 rounded-full border-4 animate-pulse" style={{ borderColor: item.border }}></div>
                                </div>
                                <h4 className="text-base lg:text-lg text-gray-900 font-medium">{item.label}</h4>
                            </div>
                        ))}
                        <div className='flex gap-2 items-center'>
                            <p className='text-lg xl:text-xl font-medium text-gray-700'>C = Chairperson; M = Member</p>
                        </div>
                    </div>

                    {/* Mobile/Tablet Layout */}
                    <div className="lg:hidden space-y-4">
                        {[
                            { label: "AUDIT COMMITTEE", color: "#ee9122", border: "#fdf0e1" },
                            { label: "CSR COMMITTEE", color: "#72bf44", border: "#edf6e8" },
                            { label: "NOMINATION & REMUNERATION COMMITTEE", color: "#0064a7", border: "#e1e5f1" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-3 items-center justify-center sm:justify-start">
                                <div className="relative">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full" style={{ backgroundColor: item.color }}></div>
                                    <div className="absolute inset-0 rounded-full border-4 animate-pulse" style={{ borderColor: item.border }}></div>
                                </div>
                                <h4 className="text-sm sm:text-base text-gray-900 font-medium text-center sm:text-left">{item.label}</h4>
                            </div>
                        ))}
                        <div className='flex justify-center sm:justify-start pt-2'>
                            <p className='text-sm sm:text-base font-medium text-gray-700'>C = Chairperson; M = Member</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BOD;