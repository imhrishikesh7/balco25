import React from 'react'

const RiskProofing = () => {
    return (
        <div className='bg-[#f7f3f4]'>
            <div className='marginal'>
                <div className='pb-20'>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-light pb-6 sm:pb-10'>
                        Risk-proofing our journey
                    </h1>
                    {/* Content Row */}
                    <div className='w-full lg:w-[80vw] flex flex-col lg:flex-row gap-6'>
                        {/* Text Block */}
                        <div className='flex-1'>
                            <h2 className='text-2xl sm:text-4xl text-[#a37b5b] pb-6 sm:pb-8'>
                                We have implemented a robust risk management framework
                                that seamlessly aligns with our operational strategies,
                                allowing us to effectively address potential risks and reduce
                                performance volatility.
                            </h2>
                            <h3 className='text-base sm:text-3xl text-[#333] pb-5 font-light'>
                                Our ability to comply with regulatory requirements empowers us to develop efficient risk mitigation strategies, thus protecting our business’s reputation and resilience.
                            </h3>
                            <h4 className='text-[#005b94] text-2xl sm:text-3xl font-bold mt-10'>
                                Risk Management Matrix
                            </h4>
                        </div>
                    </div>

                    {/* Scrollable Image */}
                    <div className="overflow-x-auto mt-5">
                        <img
                            src="BusinessOverview/RiskProofing/Page-32-IMG.png"
                            alt=""
                            className='min-w-[900px] md:min-w-[1200px] lg:min-w-[1400px] mt-8'
                        />
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-2xl text-[#005b94] font-bold mb-3'>Risk identification and assessment</h1>
                        {[
                            'Assessment of risk is based on ‘Risk Matrix’ which is prepared after considering various quantitative as well as qualitative parameters. Risks are documented in ‘Risk Register’ after evaluation of risk statements and its contributing factors.',
                            'Risk are categorized basis 6 factors i.e., ‘Financial, Health, Safety, Environment, Legal and Regulatory, Brand and Reputational’.',

                        ].map((item, index) => (
                            <li
                                key={index}
                                className="relative pl-6 text-base font-light sm:text-2xl mb-2"
                            >
                                <span className=""></span>
                                {item}
                            </li>
                        ))}
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-2xl text-[#005b94] font-bold mb-3'>Risk evaluation scales and scores</h1>
                        {[
                            'Risk assessment scale is a 5 X 5 matrix (Impact X Likelihood and occurrence in the scale of 1 to 5) which defines the various risk as ‘Critical’, ‘Significant’, ‘Moderate’ and ‘Acceptable’ (risk appetite) levels.',
                            'Overall risk rating is arrived basis matrix followed across groups ‘Risk Score < 5 – Acceptable, Risk Score between 6 to 14 – Moderate, Risk Score between 15 to 24 – Significant, Risk Score between = 25 - Critical’.',

                        ].map((item, index) => (
                            <li
                                key={index}
                                className="relative pl-6 text-base font-light sm:text-2xl mb-2"
                            >
                                <span className=""></span>
                                {item}
                            </li>
                        ))}
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-2xl text-[#005b94] font-bold mb-3'>Risk mitigation and response</h1>
                        {[
                            'Risk identified are mapped with mitigation measures already taken by risk owners and proposed plan which will be taken in coming future',
                            'Each risk has a Risk Owner and Risk Mitigation owner who monitors and mitigates the risks on an ongoing basis.',

                        ].map((item, index) => (
                            <li
                                key={index}
                                className="relative pl-6 text-base font-light sm:text-2xl mb-2"
                            >
                                <span className=""></span>
                                {item}
                            </li>
                        ))}
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-2xl text-[#005b94] font-bold mb-3'>Risk monitoring</h1>
                        {[
                            'All risks documented as part of Risk management framework will be reviewed on quarterly basis. Status of mitigation plan will be presented quarterly to Management and reviewed half-yearly by the Board of Directors.'
                        ].map((item, index) => (
                            <li
                                key={index}
                                className="relative pl-6 text-base font-light sm:text-2xl mb-2"
                            >
                                <span className=""></span>
                                {item}
                            </li>
                        ))}
                    </div>
                    <div className='mt-20'>
                        <img src="public/BusinessOverview/RiskProofing/Page-IMG-33.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RiskProofing