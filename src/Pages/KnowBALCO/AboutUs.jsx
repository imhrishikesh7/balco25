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
                <div className='text-6xl font-light pb-10'>
                    <h1>About our integrated annual report </h1>
                </div>
                <div className='text-3xl text-[#a37b5b] font-medium pb-10 pr-10'>
                    <h2>We are pleased to present our third Integrated Annual Report (IAR), which includes voluntary information to the extent possible in accordance with the reporting framework developed and designed by the International Integrated Reporting Council (IIRC).</h2>
                </div>
                <div className="">
                    <div className='text-2xl pb-10 pr-10'>
                        This report is intended to address the information needs of our stakeholders while maintaining transparency and relevance to all key audiences. This report communicates information about Bharat Aluminium Company Limited’s governance framework, value creation plan, opportunity evaluation, material risks, operational highlights and financial performance for financial year 2024-25
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="  rounded-xl p-4">
                            <h1 className="font-bold text-2xl mb-2">Reporting period and framework</h1>
                            <p className="text-base text-gray-800">
                                The reporting period for the IAR is from 1st April 2024 to 31st March 2025. It provides an overview of the operations and business development activities of the Company for the financial year 2024-25.
                            </p>
                        </div>
                        <div className="rounded-xl p-4">
                            <h1 className="font-bold text-2xl mb-2">Alignment with regulatory standards includes:</h1>
                            <ul className="list-none text-base text-gray-800 space-y-2 mt-2">
                                <li>1. The Companies Act, 2013</li>
                                <li>2. Indian Accounting standards</li>
                                <li>3. The Securities and Exchange Board of
                                    India (Listing Obligations and Disclosure
                                    Requirements) Regulations, 2015</li>
                                <li>4. h International Integrated Reporting
                                    Council (IIRC) Frameworks</li>
                                <li>5. Global Reporting Initiative Standards,
                                    2021</li>
                                <li>6. United Nations Sustainable Development
                                    Goals Principles (UN SDGs)</li>
                            </ul>
                        </div>
                        <div className="  rounded-xl p-4">
                            <h1 className="font-bold text-2xl mb-2">Approach to materiality</h1>
                            <p className="text-base text-gray-800">
                                We embrace the concept of materiality to
                                identify information that is most relevant
                                to our stakeholders, including it in our
                                Integrated Report. This report focuses
                                on addressing key issues, opportunities
                                and challenges that significantly impact
                                our business operations and our ability to
                                create lasting value for our shareholders
                                and key stakeholders.
                            </p>
                        </div>
                        <div className="  rounded-xl p-4">
                            <h1 className="font-bold text-2xl mb-2">Reporting Scope and Boundary</h1>
                            <p className="text-base text-gray-800">
                                This report outlines BALCO’s strategic
                                framework for value creation across the
                                short, medium and long term. It offers
                                a concise assessment of the company’s
                                performance and governance over the
                                past year, highlighting how these efforts
                                have contributed to executing our
                                strategy
                            </p>
                        </div>
                        <div className=" rounded-xl p-4">
                            <h1 className="font-bold text-2xl mb-2">Forward looking statement</h1>
                            <p className="text-base text-gray-800">
                                Some information in this report may contain
                                forward-looking statements which include
                                statements regarding Company’s expected
                                financial position and results of operations,
                                business plans and prospects etc. and are
                                generally identified by forward-looking words
                                such as ‘believe,’ ‘plan,’ ‘anticipate,’ ‘continue,’
                                ‘estimate,’ ‘expect,’ ‘may,’ ‘will’ or other
                                similar words. Forward looking statements are
                                dependent on assumptions or basis underlying
                                such statements. We have chosen these
                                assumptions or basis in good faith, and we
                                believe that they are reasonable in all material
                                respects. However, we caution that actual results,
                                performances or achievements could differ
                                materially from those expressed or implied in
                                such forward-looking statements. We undertake
                                no obligation to update or revise any forwardlooking statement, whether as a result of new
                                information, future events, or otherwise
                            </p>
                        </div>
                        <div className=" rounded-xl p-4">
                            <h1 className="font-bold text-2xl mb-2">Auditor’s report </h1>
                            <p className="text-base text-gray-800">
                                To ensure the integrity of facts and
                                information, the financial statements are
                                audited by M/s. S. R. Batliboi, Chartered
                                Accountants, and the ‘Independent
                                Auditor’s Report’ has been duly
                                incorporated as part of this report
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative border border-amber-50 h-full w-full mb-20'>
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

            <div className="bg-[#f3eae3] bg-[url('/About/AboutBG.webp')] bg-no-repeat bg-cover h-screen w-full">
                <div className='marginal'>
                    <h1 className='font-bold text-2xl pb-2'>Sustainable Development Goals:</h1>
                    <div className="h-0.5 bg-black mr-10 sm:mr-20 md:mr-40 lg:mr-60 xl:mr-80 2xl:mr-[190px]"></div>
                    <div className="flex flex-wrap gap-3 pt-10 ">
                        {icons.map((num, idx) => (
                            <motion.img
                                key={idx}
                                src={`About/${num}.webp`}
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
    );
};

export default AboutUs;
