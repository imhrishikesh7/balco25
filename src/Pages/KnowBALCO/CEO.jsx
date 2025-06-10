import React from 'react';

const CEO = () => {
    return (
        <div className='bg-[#f7f3f4] py-10 px-4 sm:px-6 lg:px-20'>
            <div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl text-black font-medium pb-6 text-center sm:text-left'>
                    Letter from CEO
                </h1>

                {/* Chairman Section */}
                <div className='flex flex-col lg:flex-row rounded-2xl overflow-hidden'>
                    {/* Image */}
                    <div className='bg-[#acd4f1] w-full lg:w-[40%] flex items-center justify-center max-h-[400px] lg:max-h-[70vh]'>
                        <img
                            src="public/CEO/Rajesh-Kumar.png"
                            alt="chairman"
                            className='w-full h-full object-contain lg:object-contain'
                        />
                    </div>

                    {/* Text */}
                    <div className='bg-[#1a3866] p-6 sm:p-8 lg:p-10 w-full lg:w-[60%] flex flex-col justify-center'>
                        <p className='text-base sm:text-lg lg:text-2xl xl:text-3xl text-[#acd4f1] font-bold leading-relaxed'>
                            "We are exploring and investing in cuttingedge technologies for both of our power and metal operations. This strategic focus aims to achieve a dual objectivefurther optimising operational processes and reducing our environmental footprint."
                        </p>

                        <div className='pt-6 text-right'>
                            <h1 className='text-xl sm:text-2xl font-bold text-[#ffffff]'>Rajesh Kumar</h1>
                            <h2 className='text-sm sm:text-base font-medium text-white'>Chief Executive Officer</h2>
                        </div>
                    </div>
                </div>

                {/* Additional Sections */}
                <div className='space-y-12 mt-10 text-[#1a1a1a]'>
                    {/* Section Block Template */}
                    {[
                        {
                            heading: 'Dear Shareholders,',
                            text: `The financial year 2024-25 presented a dynamic landscape for the aluminium industry. Globally, the industry recorded a surge in demand, driven by interest rate reductions in key economic regions such as the EU and the US. India experienced robust growth in aluminium demand, fuelled by increased infrastructure investments and the government’s proactive policies designed to support the nation’s growth as a global manufacturing hub as a part of Atmanirbhar Bharat. As India’s foremost aluminium producer, we have meticulously aligned our growth story with the nation’s ambitious developmental plans. I am happy to report that for the year, our aluminium smelter registered the highest ever production of 587 KT of hot metal, while our revenue grew by 20% from H 13,141 crore to H 15,808 crore, a testament to our dedication to driving sustainable growth of our company. Expanded our domestic sales to over 90% and diversified our portfolio with a 4% y-o-y increase in our value-added products and 32% y-o-y increase NEP recording the highest ever. To effectively meet the evolving demands of the market, we adopted a slew of initiatives to ensure resilience, effectively navigating the prevailing headwinds and charting a course for sustained progress.`
                        },
                        {
                            heading: 'Delivering an All-Round Performance',
                            text: `Our performance is achieved through operational efficiency, continuous innovation, and sustainable value creation by our workforce, which includes 23% diversity and inclusivity. Our potline production reached an impressive 587 KT with 105% capacity utilisation, contributing $2.4 million EBITDA, with a record amperage of 340.3 KA, pot life of 2,041 days and this achievement is coupled with reduction in our net carbon consumption by 3 kg/MT in the last financial year. In our Casthouse, the Wire Rod Mill demonstrated remarkable growth over the past three years, with production rising from 172 KT in FY23 to 196 KT in FY24 and reaching a record 217 KT in FY25. This growth was driven by operational excellence and mill throughput improvement from 12.5 TPH to 14.5 TPH, generating additional EBITDA of $8.5 million. Our Value-Added Product (VAP) production increased by 4% to 337 KT, with highest Alloy Wire rod, EC wire rod and high purity ingots production. Achieved operational agility and customer confidence by reducing Turnaround Time (TAT) in Finished Goods Logistics from 15.5 to 5.5 hours. Our Carbon operations delivered recordbreaking green anode production of above 336 thousand anodes with an inventory of 14 thousand anodes. We established an industry benchmark in Bake Oven specific fuel consumption of 42.1 L/MT. BALCO achieved a saving of H 9.5 crore annually through Anode weight reduction by 8 kg/MT (from 1,028 kg to 1,020 kg). Our Power operations registered record Power EBITDA reaching $65 Mn (H 560 crore), supported by double grid connectivity, highest IPP PLF of 79% and first low-cost IPP Shakti coal receipt. Power 1740 MW operations achieved highest ever PLF of 79% exceeding the previous best of 78.1% in FY20. Smelter Power operating cost reduced by 70 $/T achieving the lowest in last four years, by coal cost reduction through strategic coal biding, Chotia mines smooth closure, coal GCV improvement by 450~500 kCal by improving rail co-efficient mix from 45% to 61% in FY25 through induction 3 BOBRN rakes under GPWIS with GPS tracking system. BALCO started harnessing Renewable energy from Serentica Renewables from Oct’24, contributing 177 million units RE power in FY25. Our BALCO Power network reliability got strengthened by commissioning new gas-insulated switchyard (GIS) in Jan’25 and also the facility enhanced power redundancy for Smelters through Second Grid Connectivity via NTPC Birsinghpur LILO circuit. Ash and coal transportation were monitored through state-of-the-art Control Tower with 100% implementation of Geofencing and GPS tracking in vehicles and own BOBRN rakes.`
                        },
                        {
                            heading: 'Putting Sustainability First',
                            text: `At BALCO, we are deeply committed to building a sustainable tomorrow as responsible corporate citizen. In FY25, we achieved remarkable progress in environmental stewardship and operational excellence. We relined 47 pots in our smelter operations with indigenous Copper Onsert, saving 300 KWH/MT and achieving 100% graphitisation of cathode lining, reinforcing our dedication to Net Zero Carbon. We transformed our facility into a Zero Liquid Discharge (ZLD) site by enhancing our Effluent Treatment Plant (ETP) at the Power Plant with a 400 m³/ hr capacity and also began harnessing 40 MW of renewable solar power monthly from Serentica Renewables starting Oct’24. To ensure responsible waste management, we initiated the disposal of legacy hazardous waste to Treatment, Storage, and Disposal Facilities (TSDF) and started co-processing Spent Pot Lining (SPL) Refractory in the cement industry, achieving 100% dilution and detoxification of 19 KT of legacy SPLCarbon. Additionally, we implemented geofencing and GPS technology across all our ash transportation vehicles, monitored by our Ash Control Tower to prevent unauthorised dumping, and signed MoUs with Shree Cement and Ultratech Cement for sustainable ash utilisation, achieving 130% ash utilisation in sustainable avenues.`
                        },
                        {
                            heading: 'Creating the Blueprint for Future Success',
                            text: `Building on our commitment to delivering solutions that meet the needs of modern India, our future strategies are firmly rooted in expansion across multiple fronts—geographical reach, product diversification and operational capacity. We believe our ongoing project to increase our smelter capacity from 0.58 MTPA to 1 MTPA will enable us to establish a stronger global market presence. So far, we have funded 570 Mn$ approximately for our Growth Project through internal accruals. The introduction of new finishing lines empowers us to offer a wider range of products tailored to customer requirements. We are implementing responsible practices across all facets of our operations, ensuring our progress does not come at the cost of the planet’s health. We have set ambitious, yet vital targets for specific power consumption and become a carbon-free green aluminium manufacturer by FY 2050`
                        },
                        {
                            heading: 'What’s next',
                            text: `The word progress resonates deeply within our organisation. At BALCO, progress signifies growing from strengthto-strength, advancing towards our sustainability goals and contributing to our nation’s advancement. We remain resolute in our commitment to being an industrial catalyst and a societal ally. We ensure our CSR strategies extend our success far beyond the boundaries of our business. By following a valueaccretive approach, embracing sustainable practices and strengthening our foundation, we are confidently turbocharging towards the future. In the end I extend my sincere thanks to all the employees for their contribution in building a resilient and agile company. I also express my gratitude to all stakeholders for their support and hope the same shall continue in future also to take the company to even greater heights.`
                        }
                    ].map(({ heading, text }, i) => (
                        <div key={i}>
                            <h1 className='text-2xl sm:text-3xl text-[#005b94] font-bold pb-3'>{heading}</h1>
                            <p className='text-base sm:text-lg text-justify'>{text}</p>
                        </div>
                    ))}

                    {/* Quote Block */}
                    <div className='bg-[#e6f2fc] p-6 sm:p-10 rounded-xl text-center'>
                        <h1 className='text-xl sm:text-2xl lg:text-3xl text-[#005b94] font-semibold italic'>
                            "Our Carbon operations also achieved milestones, delivering record-breaking green anode production and single-day production. We established an industry benchmark in Bake Oven fuel consumption, while concurrently achieving a reduction in specific fuel consumption."
                        </h1>
                    </div>

                    {/* Final Sign-off */}
                    <div className='text-right pt-6'>
                        <p className='text-base sm:text-lg'>Regards,</p>
                        <h1 className='text-lg sm:text-2xl font-bold text-[#0064a8]'>Rajesh Kumar</h1>
                        <h2 className='text-sm sm:text-base font-bold text-black'>Chief Executive Officer &
                            Whole Time Director</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CEO;
