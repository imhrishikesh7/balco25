import { div } from 'framer-motion/client'
import { motion } from "framer-motion";
import React from 'react'
const icons = [
    "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "10", "11", "13", "14", "15", "16"
];
const smallImages = [
    { src: 'About/Financial-Circle.png', title: 'Financial Capital' },
    { src: 'About/Manufactured-Circle.png', title: 'Manufactured Capital' },
    { src: 'About/Intellectual-Circle.png', title: 'Intellectual Capital' },
    { src: 'About/Human-Circle.png', title: 'Human Capital' },
    { src: 'About/Social and relationship-Circle.png', title: 'Social and relationship Capital' },
    { src: 'About/Natural-Circle.png', title: 'Natural Capital' },
];
const AboutUs = () => {
    return (
        <div className='bg-[#f3eae3]'>
            <div className='marginal'>
                <div className='text-5xl font-light pb-10'>
                    <h1>About our integrated annual report </h1>
                </div>
                <div className='text-2xl text-[#a37b5b] font-medium pb-10 pr-10'>
                    <h2>We are pleased to
                        present our third
                        Integrated Annual
                        Report (IAR), which
                        includes voluntary
                        information to the
                        extent possible
                        in accordance
                        with the reporting
                        framework developed
                        and designed by
                        the International
                        Integrated Reporting
                        Council (IIRC).</h2>
                </div>
                <div className="">
                    <div className='text-xl pb-10 pr-10'>
                        This report is intended to address the
                        information needs of our stakeholders
                        while maintaining transparency and
                        relevance to all key audiences. This
                        report communicates information about
                        Bharat Aluminium Company Limited’s
                        governance framework, value creation
                        plan, opportunity evaluation, material
                        risks, operational highlights and financial
                        performance for financial year 2024-25
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                        {/* 1 */}
                        <div className=" shadow-md rounded-xl p-4">
                            <h1 className="font-bold text-xl mb-2">Reporting period and framework</h1>
                            <p className="text-sm text-gray-800">
                                The reporting period for the IAR is from 1st April 2024 to 31st March 2025. It provides an overview of the operations and business development activities of the Company for the financial year 2024-25.
                            </p>
                        </div>

                        {/* 2 */}
                        <div className=" shadow-md rounded-xl p-4">
                            <h1 className="font-bold text-xl mb-2">Alignment with regulatory standards includes:</h1>
                            <ul className="list-none text-sm text-gray-800 space-y-2 mt-2">
                                <li>🟢 The Companies Act, 2013</li>
                                <li>🟢 Indian Accounting standards</li>
                                <li>🟢 SEBI (LODR) Regulations, 2015</li>
                                <li>🟢 IIRC Frameworks</li>
                                <li>🟢 Global Reporting Initiative Standards, 2021</li>
                                <li>🟢 UN SDG Principles</li>
                            </ul>
                        </div>

                        {/* 3 */}
                        <div className=" shadow-md rounded-xl p-4">
                            <h1 className="font-bold text-xl mb-2">Approach to materiality</h1>
                            <p className="text-sm text-gray-800">
                                We embrace the concept of materiality to identify information most relevant to stakeholders. This report addresses key issues and opportunities impacting business operations and long-term value creation.
                            </p>
                        </div>

                        {/* 4 */}
                        <div className=" shadow-md rounded-xl p-4">
                            <h1 className="font-bold text-xl mb-2">Reporting Scope and Boundary</h1>
                            <p className="text-sm text-gray-800">
                                This report outlines BALCO’s strategy for value creation over the short, medium, and long term. It assesses performance and governance to highlight strategic execution.
                            </p>
                        </div>

                        {/* 5 */}
                        <div className="shadow-md rounded-xl p-4">
                            <h1 className="font-bold text-xl mb-2">Forward looking statement</h1>
                            <p className="text-sm text-gray-800">
                                This report may contain forward-looking statements. These are based on assumptions believed to be reasonable. However, actual results may differ. We do not commit to update any forward-looking statements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative border border-amber-50 h-full w-full mb-20 pt-10 pb-10'>
                <img src="About/Main-Circle.png" alt="main-circle" className='h-100' />
                <div className='absolute top-[56%] left-[30%] -translate-y-1/2 flex gap-6 font-bold'>
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
                            <span className='text-xs mt-2 text-center w-24'>{img.title}</span>
                        </motion.div>
                    ))}
                </div>
            </div>


            <div className="bg-[#f3eae3] bg-[url('/About/AboutBG.png')] bg-no-repeat bg-cover h-screen w-full">
                <div className='marginal'>
                    <h1 className='font-bold text-xl pb-2 py-20'>Sustainable Development Goals:</h1>
                    <div className="h-0.5 bg-black mr-10 sm:mr-20 md:mr-40 lg:mr-60 xl:mr-80 2xl:mr-[190px]"></div>
                    <div className="flex flex-wrap gap-3 pt-10 ">
                        {icons.map((num, idx) => (
                            <motion.img
                                key={idx}
                                src={`About/${num}.png`}
                                alt={`SDG_${num}`}
                                className="h-20 w-20 object-contain cursor-pointer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onHoverStart={() => console.log(`hover on SDG_${num}`)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs