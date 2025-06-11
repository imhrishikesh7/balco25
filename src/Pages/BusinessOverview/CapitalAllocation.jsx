import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const capitalButtons = [
    { label: 'Financial Capital', path: '/financial_capital', img: '/BusinessOverview/CapitalAllocation/Financial-Circle.webp' },
    { label: 'Manufactured Capital', path: '/manufactured_capital', img: '/BusinessOverview/CapitalAllocation/Manufactured-Circle.webp' },
    { label: 'Intellectual Capital', path: '/intellectual_capital', img: '/BusinessOverview/CapitalAllocation/Intellectual-Circle.webp' },
    { label: 'Human Capital', path: '/human_capital', img: '/BusinessOverview/CapitalAllocation/Human-Circle.webp' },
    { label: 'Social & Relationship Capital', path: '/social_and_relationship_capital', img: '/BusinessOverview/CapitalAllocation/Social and relationship-Circle.webp' },
    { label: 'Natural Capital', path: '/natural_capital', img: '/BusinessOverview/CapitalAllocation/Natural-Circle.webp' },
];

const CapitalAllocation = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[url('/BusinessOverview/CapitalAllocation/Page-40-Img.webp')] bg-no-repeat bg-cover bg-center h-screen w-full">
            <div className="marginal flex flex-col justify-end h-full px-6 pb-6 sm:pb-10">
                {/* Heading */}
                <div className="max-w-[650px] mb-6 sm:mb-10">
                    <h1 className="text-[#ee9022] text-2xl sm:text-3xl lg:text-5xl font-extrabold drop-shadow-lg leading-tight">
                        Strengthening Business Foundations with Effective Capital Allocation
                    </h1>
                </div>

                {/* Capital Circles */}
                <div className="flex flex-wrap gap-4 sm:gap-6">
                    {capitalButtons.map((item, index) => (
                        <div key={index} className="flex flex-col items-center w-[80px] sm:w-[100px]">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                                onClick={() => navigate(item.path)}
                                className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full bg-white shadow-md overflow-hidden will-change-transform"
                            >
                                <img
                                    src={item.img}
                                    alt={item.label}
                                    className="w-full h-full object-cover"
                                />
                            </motion.button>

                            <span className="text-[10px] sm:text-xs text-center text-white mt-2 font-bold leading-tight">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CapitalAllocation;
