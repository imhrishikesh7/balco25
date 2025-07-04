import React from 'react'

const EngagingStakeholders = () => {
    return (
        <div className='bg-[#f7f3f4]'>
            <div className='marginal'>
                <div className='pb-20'>
                    <h1 className='text-2xl sm:text-4xl lg:text-5xl font-light pb-6 sm:pb-5'>
                        Engaging with our stakeholders
                    </h1>
                    {/* Content Row */}
                    <div className='w-full lg:w-[80vw] flex flex-col lg:flex-row gap-6'>
                        {/* Text Block */}
                        <div className='flex-1'>
                            <h2 className='text-xl sm:text-2xl text-[#a37b5b] pb-6 sm:pb-5'>
                                We consider our stakeholders as essential partners in our
                                mission to create enduring value.
                            </h2>
                            <h3 className='text-base sm:text-xl text-[#333] pb-5'>
                                This belief drives us to maintain consistent and effective communication across multiple platforms and to understand the evolving needs of our stakeholders. We seek their feedback on our performance and offerings to enhance our operational efficiency and deliver greater impact.
                            </h3>
                            <h4 className='text-[#005b94] text-xl sm:text-2xl font-bold mt-10'>
                            Stakeholder engagement procedure
                            </h4>
                        </div>
                    </div>

                    {/* Scrollable Image */}
                    <div className="overflow-x-auto mt-5">
                        <img
                            src="BusinessOverview/EngagingStakeholders/Page-IMG-28.webp"
                            alt=""
                            className='min-w-[900px] md:min-w-auto rounded-2xl mt-8'
                        />
                    </div>
                    <div className="overflow-x-auto mt-5">
                        <img
                            src="BusinessOverview/EngagingStakeholders/Page-28-IMG.webp"
                            alt=""
                            className=' md:min-w-auto rounded-2xl mt-18'
                        />
                    </div>
                    <div className="overflow-x-auto mt-5">
                        <img
                            src="BusinessOverview/EngagingStakeholders/Page-IMG-29.webp"
                            alt=""
                            className='min-w-[900px] md:min-w-auto rounded-2xl mt-18'
                        />
                    </div>
                    <div className="overflow-x-auto mt-5">
                        <img
                            src="BusinessOverview/EngagingStakeholders/Page-IMG-30.webp"
                            alt=""
                            className='min-w-[900px] md:min-w-auto rounded-2xl mt-18'
                        />
                    </div>
                    <div className="overflow-x-auto mt-5">
                        <img
                            src="BusinessOverview/EngagingStakeholders/Page-IMG-31.webp"
                            alt=""
                            className='md:min-w-auto rounded-2xl mt-18'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EngagingStakeholders