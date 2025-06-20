import { motion } from "framer-motion";
import React from 'react';

const icons = [
    "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "10", "11", "13", "14", "15", "16"
];

const smallImages = [
    { src: 'About/Financial-Circle.webp', title: 'Financial Capital' },
    { src: 'About/Manufactured-Circle.webp', title: 'Manufactured Capital' },
    { src: 'About/Intellectual-Circle.webp', title: 'Intellectual Capital' },
    { src: 'About/Human-Circle.webp', title: 'Human Capital' },
    { src: 'About/Social and relationship-Circle.webp', title: 'Social and relationship Capital' },
    { src: 'About/Natural-Circle.webp', title: 'Natural Capital' },
];

const AboutUs = () => {
    return (
        <div className='bg-[#f3eae3]'>
            <div className='marginal'>
                {/* Hero Section */}
                <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light pb-6 sm:pb-8 lg:pb-10'>
                    <h1>About our integrated annual report</h1>
                </div>
                
                {/* Subtitle */}
                <div className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#a37b5b] font-medium pb-6 sm:pb-8 lg:pb-10 pr-0 sm:pr-5 lg:pr-10'>
                    <h2>We are pleased to present our third Integrated Annual Report (IAR), which includes voluntary information to the extent possible in accordance with the reporting framework developed and designed by the International Integrated Reporting Council (IIRC).</h2>
                </div>
                
                {/* Main Content */}
                <div className="">
                    <div className='text-base sm:text-lg md:text-xl lg:text-2xl pb-6 sm:pb-8 lg:pb-10 pr-0 sm:pr-5 lg:pr-10'>
                        This report is intended to address the information needs of our stakeholders while maintaining transparency and relevance to all key audiences. This report communicates information about Bharat Aluminium Company Limited's governance framework, value creation plan, opportunity evaluation, material risks, operational highlights and financial performance for financial year 2024-25
                    </div>
                    
                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                        <div className="rounded-xl p-4 sm:p-6">
                            <h1 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">Reporting period and framework</h1>
                            <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                                The reporting period for the IAR is from 1st April 2024 to 31st March 2025. It provides an overview of the operations and business development activities of the Company for the financial year 2024-25.
                            </p>
                        </div>
                        
                        <div className="rounded-xl p-4 sm:p-6">
                            <h1 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">Alignment with regulatory standards includes:</h1>
                            <ul className="list-none text-sm sm:text-base text-gray-800 space-y-1 sm:space-y-2 mt-2">
                                <li>1. The Companies Act, 2013</li>
                                <li>2. Indian Accounting standards</li>
                                <li>3. The Securities and Exchange Board of India (Listing Obligations and Disclosure Requirements) Regulations, 2015</li>
                                <li>4. International Integrated Reporting Council (IIRC) Frameworks</li>
                                <li>5. Global Reporting Initiative Standards, 2021</li>
                                <li>6. United Nations Sustainable Development Goals Principles (UN SDGs)</li>
                            </ul>
                        </div>
                        
                        <div className="rounded-xl p-4 sm:p-6">
                            <h1 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">Approach to materiality</h1>
                            <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                                We embrace the concept of materiality to identify information that is most relevant to our stakeholders, including it in our Integrated Report. This report focuses on addressing key issues, opportunities and challenges that significantly impact our business operations and our ability to create lasting value for our shareholders and key stakeholders.
                            </p>
                        </div>
                        
                        <div className="rounded-xl p-4 sm:p-6">
                            <h1 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">Reporting Scope and Boundary</h1>
                            <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                                This report outlines BALCO's strategic framework for value creation across the short, medium and long term. It offers a concise assessment of the company's performance and governance over the past year, highlighting how these efforts have contributed to executing our strategy
                            </p>
                        </div>
                        
                        <div className="rounded-xl p-4 sm:p-6">
                            <h1 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">Forward looking statement</h1>
                            <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                                Some information in this report may contain forward-looking statements which include statements regarding Company's expected financial position and results of operations, business plans and prospects etc. and are generally identified by forward-looking words such as 'believe,' 'plan,' 'anticipate,' 'continue,' 'estimate,' 'expect,' 'may,' 'will' or other similar words. Forward looking statements are dependent on assumptions or basis underlying such statements. We have chosen these assumptions or basis in good faith, and we believe that they are reasonable in all material respects. However, we caution that actual results, performances or achievements could differ materially from those expressed or implied in such forward-looking statements. We undertake no obligation to update or revise any forward-looking statement, whether as a result of new information, future events, or otherwise
                            </p>
                        </div>
                        
                        <div className="rounded-xl p-4 sm:p-6">
                            <h1 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">Auditor's report</h1>
                            <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                                To ensure the integrity of facts and information, the financial statements are audited by M/s. S. R. Batliboi, Chartered Accountants, and the 'Independent Auditor's Report' has been duly incorporated as part of this report
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Circle Section */}
            <div className='relative border border-amber-50 h-full w-full mb-10 sm:mb-20'>
                {/* Desktop Layout - Original */}
                <div className='hidden lg:block'>
                    <img src="About/Main-Circle.webp" alt="main-circle" className='h-100' />
                    <div className='absolute top-[56%] left-[30%] -translate-y-1/2 flex gap-15 font-bold'>
                        {smallImages.map((img, index) => (
                            <motion.div
                                key={index}
                                className='flex flex-col items-center'
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 10,
                                    duration: 0.6,
                                    delay: index * 0.15,
                                }}
                            >
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className='w-30 h-30 rounded-full border-2 border-gray-400 hover:scale-110 transition-transform duration-300'
                                />
                                <span className='text-sm mt-2 text-center w-24'>{img.title}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                {/* Mobile Layout - Clean Grid */}  
                <div className='lg:hidden py-8 px-4'>
                    <h2 className='text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800'>Our Capital Framework</h2>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto'>
                        {smallImages.map((img, index) => (
                            <motion.div
                                key={index}
                                className='flex flex-col items-center bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm'
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 10,
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                            >
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className='w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-gray-300 hover:scale-110 transition-transform duration-300 mb-3'
                                />
                                <span className='text-xs sm:text-sm text-center font-medium text-gray-700 leading-tight px-1'>{img.title}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SDG Section */}
            <div className="bg-[#f3eae3] bg-[url('/About/AboutBG.webp')] bg-no-repeat bg-cover bg-center min-h-[60vh] sm:min-h-[80vh] lg:h-screen w-full">
                <div className='marginal py-8 sm:py-12 lg:py-0'>
                    <h1 className='font-bold text-xl sm:text-2xl pb-2'>Sustainable Development Goals:</h1>
                    <div className="h-0.5 bg-black w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"></div>
                    
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-2 sm:gap-3 pt-6 sm:pt-8 lg:pt-10">
                        {icons.map((num, idx) => (
                            <motion.div
                                key={idx}
                                className="flex justify-center"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: idx * 0.05,
                                }}
                            >
                                <motion.img
                                    src={`About/${num}.webp`}
                                    alt={`SDG_${num}`}
                                    className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-contain cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onHoverStart={() => console.log(`hover on SDG_${num}`)}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;