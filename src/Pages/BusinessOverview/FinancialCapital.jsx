import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; 


const FinancialCapital = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[url('/BusinessOverview/FinancialCapital/Page-42-Img.png')] bg-no-repeat bg-cover bg-center h-screen w-full">
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
                                onHoverStart={() => console.log(`Hovering: ${item.label}`)}
                                onClick={() => navigate(item.path)}
                                className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full bg-white shadow-md overflow-hidden transition-transform duration-300"
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

export default FinancialCapital;
