import React from 'react';

const GrowthProject = () => {
    return (
        <div className="bg-[url('BusinessOverview/GrowthProject/23-Page-IMG.webp')] bg-no-repeat bg-cover min-h-screen w-full">
            <div className='marginal px-4 sm:px-6 lg:px-8 py-8 lg:py-16'>
                <div className='pb-12 lg:pb-20'>
                    <div className=''>
                        <h1 className='text-xl sm:text-2xl lg:text-5xl font-medium pb-4 sm:pb-6 lg:pb-2 leading-tight'>
                            BALCO's growth project
                        </h1>

                        {/* Content Row */}
                        <div className='w-full flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12'>
                            {/* Text Block */}
                            <div className='flex-1 lg:flex-[1.2]'>
                                <h2 className='text-base sm:text-lg lg:text-3xl text-[#a37b5b] pb-4 sm:pb-6 mt-4 lg:mt-6 leading-relaxed'>
                                    With a clear vision of reaching 1 million tonne per annum aluminium production, we are shaping a sustainable future, driving progress and empowering the nation's growth.
                                </h2>
                                <h3 className='text-sm sm:text-base lg:text-2xl text-[#333] leading-relaxed'>
                                    With an emphasis on encouraging indigenous production and the usage of aluminium within the country, we
                                    aim to meet the increasing demand for aluminium across industries and support the country's goal of self-sufficiency in important sectors such as infrastructure, energy and manufacturing.
                                </h3>
                            </div>

                            {/* Did You Know Image */}
                            <div className='w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center lg:justify-end mt-6 lg:mt-0'>
                                <img 
                                    src="BusinessOverview/GrowthProject/Page-23-Img.png" 
                                    alt="Did You Know" 
                                    className='w-full max-w-sm lg:max-w-full h-auto object-contain' 
                                />
                            </div>
                        </div>
                        
                        {/* Bottom Section */}
                        <div className='mt-8 lg:mt-10'>
                            <h1 className='text-xl sm:text-2xl lg:text-3xl text-white sm:text-[#0064a8] font-extrabold mb-2'>
                                USD 1.4 Billion
                            </h1>
                            <h2 className='text-sm sm:text-base lg:text-xl text-white sm:text-black mb-4 lg:mb-6'>
                                Estimated capex for expansion
                            </h2>
                            <img 
                                src="BusinessOverview/GrowthProject/Page-22-Infographic.webp" 
                                alt="Infographic" 
                                className='w-full max-w-xs sm:max-w-sm md:max-w-md  h-auto object-contain'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrowthProject;