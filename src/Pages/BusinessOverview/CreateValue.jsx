import React from 'react'

const CreateValue = () => {
    return (
        <div>
            <div className='marginal'>
                <div className='pb-20'>
                    <h1 className='text-2xl sm:text-2xl lg:text-5xl font-medium pb-6 sm:pb-2'>
                        How we create value
                    </h1>

                    {/* Content Row */}
                    <div className='w-full lg:w-[80vw] flex flex-col lg:flex-row gap-6'>
                        {/* Text Block */}
                        <div className='flex-1'>
                            <h2 className='text-lg sm:text-2xl text-[#a37b5b] pb-6 sm:pb-10'>
                                With a strong emphasis on encouraging domestic production and driving
                                aluminium use in India, we want to reduce our dependency on imports while
                                driving economic growth.
                            </h2>
                            <h3 className='text-base sm:text-lg text-[#333]'>
                                Our objective is to improve manufacturing quality by integrating new technologies,
                                driving innovation and embracing sustainable practices to maximise value for our stakeholders.
                            </h3>
                        </div>
                    </div>

                    {/* Scrollable Image */}
                    <div className="overflow-x-auto mt-5">
                        <img
                            src="BusinessOverview/CreateValues/Page-25-IMG.png"
                            alt=""
                            className='min-w-[900px] md:min-w-[1200px] lg:min-w-[1500px] rounded-2xl'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateValue
