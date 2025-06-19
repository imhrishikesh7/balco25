import React from 'react'

const MaterialityMatters = () => {
    return (
        <div>
            <div className='marginal'>
                <div className='pb-20'>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-light pb-6 sm:pb-8'>
                        Materiality matters
                    </h1>

                    {/* Content Row */}
                    <div className='w-full flex flex-col lg:flex-row gap-6'>
                        {/* Text Block */}
                        <div className='flex-1'>
                            <h2 className='text-2xl sm:text-3xl text-[#a37b5b] pb-6 sm:pb-6'>
                                We identify and prioritise key issues through a double materiality assessment,
                                engaging internal stakeholders across departments to gain diverse insights.
                            </h2>
                            <h3 className='text-base sm:text-2xl text-[#333] pb-10'>
                                This approach helps align our sustainability efforts with stakeholder expectations, fostering greater transparency and trust. By
                                assessing how these issues affect our operations and value creation, we are better positioned to refine strategies, manage risks, and
                                capitalise on opportunities for long-term growth. This marked our first experience with a Double Materiality Assessment.
                            </h3>
                            <h4 className='text-[#005b94] text-2xl sm:text-3xl font-bold'>
                                Double Materiality Assessment Process
                            </h4>
                        </div>
                    </div>
                    

                    {/* First Image - with overflow-x-auto */}
                    <div className="overflow-x-auto mt-20 mb-30">
                        <img
                            src="BusinessOverview/MaterialityMatters/Page-26-IMG.webp"
                            alt=""
                            className='min-w-[900px] md:min-w-auto rounded-2xl w-full'
                        />
                    </div>
                    
                    {/* Second Image - with overflow-x-auto */}
                    <div className="overflow-x-auto mt-5">
                        <img
                            src="BusinessOverview/MaterialityMatters/Page-IMG-26.webp"
                            alt=""
                            className='min-w-[900px] md:min-w-auto rounded-2xl w-full'
                        />
                    </div>
                    
                    <div>
                        <h4 className='text-[#005b94] text-2xl sm:text-3xl font-bold mt-20 pl-2'>
                            MATERIAL TOPICS IDENTIFIED FOR BALCO
                        </h4>
                    </div>
                    
                    {/* Third Image - with overflow-x-auto */}
                    <div className="overflow-x-auto mt-10">
                        <img
                            src="BusinessOverview/MaterialityMatters/Page-IMG-27.webp"
                            alt=""
                            className='min-w-[900px] md:min-w-auto rounded-2xl w-full'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MaterialityMatters