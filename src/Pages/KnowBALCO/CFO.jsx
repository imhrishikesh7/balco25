import React from 'react';

const CFO = () => {
    return (
        <div className='bg-[#f7f3f4] py-10 px-4 sm:px-6 lg:px-20'>
            <div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl text-black font-medium pb-6 text-center sm:text-left'>
                    Letter from CEO
                </h1>

                {/* Chairman Section */}
                <div className='flex flex-col lg:flex-row rounded-2xl overflow-hidden'>
                    {/* Image */}
                    <div className='w-full lg:w-[40%] flex items-center justify-center max-h-[400px] lg:max-h-[70vh]'>
                        <img
                            src="KnowBALCO/CFO/CFO.png"
                            alt="chairman"
                            className='w-full h-full object-contain lg:object-cover'
                        />
                    </div>

                    {/* Text */}
                    <div className='bg-[#016b71] p-6 sm:p-8 lg:p-10 w-full lg:w-[60%] flex flex-col justify-center'>
                        <p className='text-base sm:text-lg lg:text-2xl xl:text-3xl text-[#ffffff] font-bold leading-relaxed'>
                            "We aim to reach 1 MTPA hot metal production, sourcing 30% alumina from Vedanta’s Lanjigarh refinery and transitioning to 100% value-added product sales domestically via online and ex-works channels."
                        </p>

                        <div className='pt-6 text-right'>
                            <h1 className='text-xl sm:text-2xl font-bold text-[#ffffff]'>Amit Gupta</h1>
                            <h2 className='text-sm sm:text-base font-medium text-white'>Chief Financial Officer</h2>
                        </div>
                    </div>
                </div>

                {/* Additional Sections */}
                <div className='space-y-12 mt-10 text-[#1a1a1a]'>
                    {/* Section Block Template */}
                    {[
                        {
                            heading: 'Dear Shareholders,',
                            text: `I am pleased to share that financial year 2024–25 was a strong one for BALCO, both operationally and financially. We exceeded our performance targets and laid a solid foundation for future growth. Our focus remained on creating longterm value for all stakeholders. This year, we followed a disciplined approach to capital allocation, made strategic investments, and worked on improving operational efficiency. These efforts have strengthened our financial position and prepared us for sustainable growth.`
                        },
                        {
                            heading: 'Financial Wizards at Work',
                            text: `During the year under review, we prioritised financial prudence along with strategic growth initiatives. We focused on financial discipline, cost control, and efficient cash flow management. This helped us manage input cost volatility and strengthen our balance sheet. Key steps included consolidating OEMs, common procurement, and sourcing linkage coal efficiently. We also achieved a significant milestone with a 20% revenue growth, reaching H 15,808 crore. The company’s operational profitability was strong, with EBITDA reaching H 4,534 crore, delivering an EBITDA margin of 29%. Ultimately, BALCO’s PAT for FY25 stood at H 2,969 crore, reflecting a solid year of financial performance. Our emphasis on financial discipline has laid the groundwork for an enhanced credit rating to CRISIL AA (Stable), and increasing business valuation. These efforts represent our commitment to delivering long-term value to our stakeholders.`
                        },
                        {
                            heading: 'Growth is in the Numbers',
                            text: `As India’s leading aluminium producer, we’re focused on building our strengths to support the country’s growth. We’ve invested heavily in expanding capacity and driving innovation. A key example is the BALCO Expansion Project, which includes India’s first 500+ kA potline and a fully integrated plant. With advanced automated systems for alumina and coke handling, the project boosts efficiency and modernisation. Further, we have invested in the exploration of the Barra Coal Block and partnered with Serentica Renewable (India) Private Limited (“Serentica Entities”) to procure over 218 MW of Renewable Energy (RE) power. Other key upgrades include a 400 kV GIS system to improve power reliability at the smelter and automated ingot loading to boost safety and productivity. These efforts aim to raise our hot metal capacity to 1 MTPA next year, while improving efficiency and reliability for better returns.`
                        },
                        {
                            heading: 'Unlocking Fiscal Alchemy',
                            text: `Evolving with time Our partnership with Serentica Entities highlights our commitment to sustainable energy solutions. We’ve also improved operations through double grid connectivity, utilization of cost-effective coal, and smart procurement strategies. Digitalisation plays a pivotal role in ensuring seamless business operations. We have implemented advanced tools such as Coal, Ash and Finished Goods Control Tower, Technological Fleet Optimisation System and AI-enabled crack detection to improve decisionmaking and enhance cost efficiency. These advancements, coupled with process improvements such as anode design enhancements and transition from HFO (Heavy Furnace Oil) to LSHS (Low Sulphur Heavy Stock), have reduced costs while maintaining compliance with emission norms.`
                        },
                        {
                            heading: 'Prepared for Tomorrow',
                            text: `Our organisation has unlocked robust financial performance due to the tireless efforts of our exceptionally efficient team, and I am truly grateful to them. I would also like to thank our strong governance team for expert guidance, enabling the Company to emerge stronger with each challenge. Finally, I convey my deepest appreciation to our stakeholders for their unswerving support. I am optimistic of the future that lies ahead of us. By leveraging financial discipline, targeted investments and advanced digital tools, we are building a future-ready organisation. I am confident that these concerted efforts will drive long-term value and further strengthen your trust in BALCO’s journey.`
                        }
                    ].map(({ heading, text }, i) => (
                        <div key={i}>
                            <h1 className='text-2xl sm:text-3xl text-[#016b71] font-bold pb-3'>{heading}</h1>
                            <p className='text-base sm:text-lg text-justify'>{text}</p>
                        </div>
                    ))}

                    {/* Quote Block */}
                    <div className='bg-[#016b7122] p-6 sm:p-10 rounded-xl text-center'>
                        <h1 className='text-xl sm:text-2xl lg:text-3xl text-[#016b71] font-semibold italic'>
                            "We will focus on operationalising the Barra Coal Block, targeting a potential output of 4 MTPA within two years. Finally, we will maintain a robust balance sheet through strategic debt reduction initiatives. To achieve these objectives, we will leverage data integration, budgeting and forecasting tools to enhance financial efficiency and build stakeholder confidence."
                        </h1>
                    </div>

                    {/* Final Sign-off */}
                    <div className='text-right pt-6'>
                        <p className='text-base sm:text-lg'>Warm Regards,</p>
                        <h1 className='text-lg sm:text-2xl font-bold text-[#016b71]'>Amit Gupta</h1>
                        <h2 className='text-sm sm:text-base font-bold text-black'>Chief Financial Officer</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CFO;
