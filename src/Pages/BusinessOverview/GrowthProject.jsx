import React from 'react';

const GrowthProject = () => {
    return (
        <div className="bg-[url('BusinessOverview/GrowthProject/23-Page-IMG.webp')] bg-no-repeat bg-cover h-screen w-full">
            <div className='marginal'>
                <div className='pb-20'>
                    <div className=''>
                        <h1 className='text-2xl sm:text-2xl lg:text-5xl font-medium pb-6 sm:pb-2'>
                            BALCO’s growth project
                        </h1>

                        {/* Content Row */}
                        <div className='w-full lg:w-[80vw] flex flex-col lg:flex-row gap-6'>
                            {/* Text Block */}
                            <div className=' flex-1'>
                                <h2 className='text-lg sm:text-2xl text-[#a37b5b] pb-6 sm:pb-10'>
                                    With a clear vision of reaching 1 million tonne per annum aluminium production, we are shaping a sustainable future, driving progress and empowering the nation’s growth.
                                </h2>
                                <h3 className='text-base sm:text-lg text-[#333]'>
                                    With an emphasis on encouraging indigenous production and the usage of aluminium within the country, we
                                    aim to meet the increasing demand for aluminium across industries and support the country’s goal of self-sufficiency in important sectors such as infrastructure, energy and manufacturing.
                                </h3>
                            </div>

                            {/* Did You Know Image */}
                            <div className=' w-full lg:w-[300px] flex items-center'>
                                <img src="BusinessOverview/GrowthProject/Did-You-IMG.webp" alt="Did You Know" className='w-full h-auto' />
                            </div>
                        </div>
                        <div className='mt-10'>
                            <h1 className='text-3xl text-[#0064a8] font-extrabold'>USD 1.4 Billion</h1>
                            <h2>Estimated capex for expansion</h2>
                            <img src="BusinessOverview/GrowthProject/Page-22-Infographic.webp" alt="" className='w-[20vw] mt-5'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrowthProject;
