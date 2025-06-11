import React from 'react'

const PuttingESG = () => {
    return (
        <div className='bg-[#f7f3f4]'>
            <div className='marginal'>
                <div className='pb-20'>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-light pb-6 sm:pb-8'>
                        Putting ESG at the core
                    </h1>

                    {/* First Block */}
                    <div className='w-full lg:w-[80vw] flex flex-col gap-6'>
                        <div className='flex-1'>
                            <h2 className='text-2xl sm:text-4xl text-[#a37b5b] pb-6 sm:pb-8'>
                                We uphold environmental sustainability, social responsibility
                                and strong governance in all our operations. We strive to
                                reduce our environmental footprint, promote the wellbeing of our people and communities, and strengthen
                                transparency and accountability in decision-making.
                            </h2>
                            <h3 className='text-base sm:text-3xl text-[#333] pb-5'>
                                Our strong ESG strategy helps us to align our business practices with evolving stakeholder expectations while making a meaningful impact on the environment and our communities.
                            </h3>
                        </div>
                    </div>

                    {/* ESG Governance with Image */}
                    <div className="w-full lg:w-[80vw] flex flex-col lg:flex-row items-start gap-8 mt-10 pb-10 border-b-1">
                        {/* Text Content */}
                        <div className='flex-1'>
                            <h4 className='text-[#005b94] text-2xl sm:text-3xl font-bold'>
                                ESG governance
                            </h4>
                            <h5 className='text-base sm:text-2xl text-[#333] pt-5'>
                                As part of our ESG efforts, we have implemented a standardised governance framework aligned with the Vedanta Group. The Vedanta ESG Committee, in collaboration with our Group Sustainability and ESG function, oversees the execution and monitoring of initiatives under our 'Transforming for Good' agenda.
                                <br /><br />
                                To ensure accountability and effective execution, we have established dedicated forums for management oversight and ESG-focused communities across all business units — ensuring accountability and ownership, while driving timely execution of sustainability initiatives.
                            </h5>
                        </div>

                        {/* Right Side Image */}
                        <div className="w-full lg:w-[45%] overflow-x-auto">
                            <img
                                src="BusinessOverview/ESGCore/Page-IMG-34.webp"
                                alt=""
                                className='rounded-2xl w-full h-auto'
                            />
                        </div>
                    </div>
                    <div className='mt-10'>
                        <img src="BusinessOverview/ESGCore/Page-IMG-34-1.webp" alt="IMG-34-1.webp" />
                    </div>
                    <div className='mt-10'>
                        <img src="BusinessOverview/ESGCore/Page-IMG-35.webp" alt="" />
                    </div>
                    <div className='mt-10'>
                        <h4 className='text-[#005b94] text-2xl sm:text-3xl font-bold'>
                            About Sustainability Policies
                        </h4>
                        <h5 className='text-base sm:text-2xl text-[#333] pt-5'>
                            To uphold sustainability and align with ESG principles, we have introduced a comprehensive set of policies designed to enable a healthy environment and promote social well-being, both within our organisation and the communities we serve.

                        </h5>
                    </div>
                    <div className='mt-10'>
                        <img src="BusinessOverview/ESGCore/Page-IMG-35-2.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PuttingESG
