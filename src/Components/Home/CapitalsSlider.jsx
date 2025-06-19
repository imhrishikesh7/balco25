import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, ExternalLink, Building2, Users, Calendar } from 'lucide-react';
import gsap from 'gsap';
import ReadingHeading from '../ReadingHeading';
import ReadMore from '../ReadMore';

const CapitalsSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    const capitals = [
        {
            icon: <Building2 className="w-8 h-8 text-blue-500" />,
            img: "/home/caps/1.webp",
            title: "Financial Capital",
            text: "We strive to maximise the efficiency of our financial resources to drive long-term returns on investments. Our focus remains on benchmarking financial performance, mitigating risks and creating greater value for stakeholders. This strategic approach has led to well- planned investments while ensuring prudent fund allocation to support our growth aspirations.",
            link: "/financial_capital_"
        },
        {
            icon: <MapPin className="w-8 h-8 text-red-500" />,
            img: "/home/caps/2.webp",
            title: "Manufactured Capital",
            text: "As a leading aluminium producer, robust manufacturing capabilities enable us to deliver products of the highest quality. We operate state-of-the-art, multi- location facilities and utilise advanced processes to develop a range of offerings—from mining to production. Our products meet the evolving needs of customers worldwide, ensuring reliability and innovation in every product we create.",
            link: "/manufactured_capital"
        },
        {
            icon: <Users className="w-8 h-8 text-green-500" />,
            img: "/home/caps/3.webp",
            title: "Intellectual Capital",
            text: "We recognise the importance of innovation and adaptability in keeping pace with evolving industry demands. This drives us to enhance our R&D capabilities, integrate advanced technologies and implement state-of-the-art solutions. By continuously developing new products, we not only strengthen our sustainability initiatives but also elevate product quality and optimise production processes for greater efficiency.",
            link: "/intellectual_capital"
        },
        {
            icon: <Calendar className="w-8 h-8 text-purple-500" />,
            img: "/home/caps/4.webp",
            title: "Human Capital",
            text: "Our human capital, which represents the collective talent, expertise and innovation of our people, is the key to BALCO’s success. We strive to provide a conducive work environment, encourage diversity, ensure continuous learning opportunities and enable a culture of collaboration and respect, ensuring our team is well-equipped to meet challenges and drive our strategic goals.",
            link: "/human_capital"
        },
        {
            icon: <Building2 className="w-8 h-8 text-orange-500" />,
            img: "/home/caps/5.webp",
            title: "Social and Relationship Capital",
            text: "At BALCO, our social and relationship capital is anchored in creating long-term, positive value for our communities, value chain partners, and customers. We believe sustained progress is achieved through a synergy of trust, transparency, and shared growth. Our CSR approach goes beyond compliance, driving inclusive development and integrating environmental and social responsibility into our business strategy. Guided by accountability, collaboration, and excellence, we aim to make a positive impact on society and ensure a sustainable, responsible future for all.",
            link: "/social_and_relationship_capital"
        },
        {
            icon: <Building2 className="w-8 h-8 text-orange-500" />,
            img: "/home/caps/6.webp",
            title: "Natural Capital",
            text: "At BALCO, we are committed to making a real difference in environmental sustainability. Guided by our dedication to environmental stewardship, we implement a comprehensive approach to minimise our environmental footprint. To achieve this, we prioritise responsible operations, carbon footprint reduction, energy efficiency optimisation, water resource conservation and biodiversity protection. Through continuous efforts and the adoption of sustainable manufacturing practices, we strive to safeguard the environment and preserve its valuable resources for future generations.",
            link: "/natural_capital"
        }
    ];

    const animateSlide = () => {
        if (imageRef.current && contentRef.current) {
            gsap.fromTo(
                imageRef.current,
                { opacity: 0, scale: 0.5 },
                { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
            );
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
            );
        }
    };

    useEffect(() => {
        animateSlide();
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % capitals.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + capitals.length) % capitals.length);
    };

    const currentCapital = capitals[currentIndex];

    return (
        <div className="min-h-screen flex items-center bg-gradient-to-tl from-[#09579f] via-[#09579f] to-[#66cc33] p-8">

            <div className="marginal mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Description */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            {/* <h1 className="text-5xl font-bold text-white leading-tight">
                World's Greatest
                
              </h1> */}
                            <img
                                src={currentCapital.icon}
                                alt={`${currentCapital.title} Icon`}
                                className="w-14 h-14 object-contain drop-shadow-md"
                            />

                            <ReadingHeading text={currentCapital.title} className="text-white font-[500] !text-4xl" />


                            <p className="text-xl text-slate-200 leading-relaxed">
                                {currentCapital.text}
                            </p>

                            <div className="space-y-4 text-slate-200">

                                <div className="flex items-start space-x-3">
                                    <div className={`w-2 h-2  rounded-full mt-2 flex-shrink-0`} />

                                </div>

                            </div>
                        </div>

                        {/* <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-3">Explore Interactive Cards</h3>
              <p className="text-slate-300">
                Navigate through our curated collection of capital cities using the slider on the right. 
                Each card provides insights into what makes these cities special and links to learn more.
              </p>
            </div> */}
                    </div>

                    {/* Right - Slider */}
                    <div className="relative">
                        <div className=" p-6">
                            <div className="space-y-6">
                                <div className="flex items-center justify-end">

                                    <div className="text-sm text-slate-200">
                                        {currentIndex + 1} / {capitals.length}
                                    </div>
                                </div>

                                {/* Animated Image */}
                                <div ref={imageRef} className="relative overflow-hidden rounded-2xl">
                                    <img
                                        src={currentCapital.img}
                                        alt={currentCapital.title}
                                        className="w-full h-90 object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>

                                {/* Animated Content */}
                                <div ref={contentRef} className="space-y- items-center flex justify-between">
                                    {/* <h2 className="text-3xl font-bold text-white">
                    {currentCapital.title}
                  </h2> */}
                                    <div>
                                        <ReadMore to={currentCapital.link} theme='white' />
                                    </div>
                                    {/* Arrows */}
                                    <div className="flex items-center space-x-3 justify-end">
                                        <button
                                            onClick={prevSlide}
                                            className="p-2 bg-transparent hover:bg-[#66cc33] rounded-full border border-white transition-all duration-200 hover:scale-110 group"
                                            aria-label="Previous capital"
                                        >
                                            <ChevronLeft className="w-5 h-5 text-white group-hover:text-white" />
                                        </button>

                                        <button
                                            onClick={nextSlide}
                                            className="p-2 bg-transparent hover:bg-[#66cc33] rounded-full border border-white transition-all duration-200 hover:scale-110 group"
                                            aria-label="Next capital"
                                        >
                                            <ChevronRight className="w-5 h-5 text-white group-hover:text-white" />
                                        </button>
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* Decoration */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl" />
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CapitalsSlider;
