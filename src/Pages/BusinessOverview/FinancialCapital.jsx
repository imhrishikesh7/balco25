import React from 'react';
import { motion } from 'framer-motion';

const FinancialCapital = () => {
    return (
        <div>
            {/* Background Section */}
            <div className='bg-[#0080b6]'>
                <div className="bg-[url('BusinessOverview/FinancialCapital/Page-42-Img-2.webp')] bg-contain bg-no-repeat bg-left w-full min-h-[50vh] md:min-h-screen">
                    <div className="px-4 sm:px-6 lg:px-12 py-10 flex items-center">
                        {/* Commented content remains as is */}
                    </div>
                </div>
            </div>

            {/* Financial Highlights Section */}
            <div className='marginal'>
                <h1 className='text-[#005b94] text-3xl font-extrabold'>
                    Financial highlights during FY 2024-25
                </h1>
                <div className="overflow-x-auto">
                    <img src="BusinessOverview/FinancialCapital/Page-44-Img.webp" alt="" className='min-w-[900px] md:min-w-[1200px] lg:min-w-[1400px] mt-2 p-10' />
                </div>
                <div>
                    <p className='text-xl'>During FY 2025, we have achieved credit rating of AA/Stable
                        (pronounced as Crisil Double A Stable) for the long-term
                        borrowing, as rated by CRISIL Ratings Limited. This progression
                        marks a noteworthy achievement in BALCO's commitment
                        to enhancing its financial health, governance standards, and
                        compliance practices. </p>

                    <h1 className='text-[#005b94] text-2xl font-bold mt-8'>Committed to strategic capital investment</h1>
                    <p className='text-xl mt-2'>
                        BALCO remains aligned to strategic capital investment to
                        expand operational capacity and drive long-term growth. With
                        an estimated CAPEX of approximately H11,816 crores, the
                        expansion project is designed to optimise resource allocation
                        across different phases. This investment will position BALCO
                        among the elite 1 million Tonnes Per Annum (MnTPA) aluminium
                        smelter club at a single location, making it the second-largest
                        aluminium smelting unit in India, following our Jharsuguda plant.
                    </p>

                    <h1 className='text-3xl text-[#005b94] font-[900] mt-6'>₹11,816 crores</h1>
                    <p className='text-xl'>Capital investment</p>

                    <h1 className='text-[#005b94] text-2xl font-bold mt-8'>Creating holistic value</h1>
                    <p className='text-xl mt-2'>
                        Our investment strategy is designed to enhance long-term value
                        creation while optimising profitability. A key initiative driving this
                        effort is our increased focus on Value-Added Products (VAP).
                        Following the expansion, BALCO is set to achieve over 100%
                        VAP portfolio coverage, a significant leap from the current 57%,
                        ensuring enhanced profitability and a diversified product portfolio.
                        Moreover, the expansion is projected to contribute over USD 2
                        billion in revenue, marking a substantial growth milestone. Our
                        approach remains deeply rooted in balancing immediate financial
                        gains with sustainable value creation for all stakeholders.
                    </p>

                    <h1 className='text-[#005b94] text-2xl font-bold mt-8'>Driving Stability Amid Input Cost Pressures</h1>
                    <p className='text-xl mt-2'>
                        BALCO sustained strong operational and financial performance.
                        Strategic focus on domestic sales, value-added product
                        contribution, and the commencement of rolled product output
                        reflect the company's preparedness for long-term growth.
                    </p>
                </div>

                {/* Building Financial Resilience Section - Made Responsive */}
                <div className='flex flex-col lg:flex-row gap-5'>
                    {/* Image comes first on mobile, text second */}
                    <div className='flex-1 order-1 lg:order-2'>
                        <img src="BusinessOverview/FinancialCapital/Page-45-Img-2.webp" alt="" className="w-full h-auto" />
                    </div>
                    <div className='flex-2 order-2 lg:order-1'>
                        <h1 className='text-[#005b94] text-2xl font-bold mt-8 lg:mt-8'>Building Financial Resilience Through Performance
                            & Investment Discipline</h1>
                        <p className='text-xl mt-2'>
                            A year marked by expansion, BALCO's strategy focused on
                            scaling responsibly, managing costs, and improving operational
                            productivity. While aluminium demand continues to grow,
                            especially from infrastructure, renewables, and electric mobility,
                            our focus has remained on sustainable cost reduction and
                            market diversification.
                        </p>
                    </div>
                </div>

                <div className='mt-5'>
                    <h1 className='text-[#000000] text-xl font-bold mt-8'>Strategic Efficiency Gains</h1>
                    <p className='text-xl mt-2'>Through targeted initiatives in production efficiency, supply
                        chain optimisation, and benchmarking, BALCO made significant
                        progress in aligning cost structures with long-term growth.</p>
                    <h1 className='text-[#000000] text-xl font-bold mt-8'>Key Outcome</h1>
                    <p className='text-xl mt-2'>We successfully mitigated input cost volatility and maintained
                        profitability, with a consistent focus on domestic sales and valueadded output.</p>
                </div>

                {/* Barra Coal Block Section - Made Responsive */}
                <div className='flex flex-col lg:flex-row gap-5'>
                    {/* Image comes first on mobile, text second */}
                    <div className='flex-1 order-1 lg:order-2'>
                        <h1 className='text-[#000000] text-lg font-bold mb-2 lg:mt-7'>Operational Highlights FY25</h1>
                        <img src="BusinessOverview/FinancialCapital/Page-45-Img.webp" alt="" className="w-full h-auto" />
                    </div>
                    <div className='flex-2 order-2 lg:order-1'>
                        <h1 className='text-[#005b94] text-2xl font-bold mt-12 lg:mt-12'>Barra Coal Block: Unlocking Cost Advantage</h1>
                        <p className='text-xl mt-2'>
                            BALCO is advancing development of the Barra Coal Block,
                            a long-term strategic move to ensure fuel security and lower
                            power generation costs. Once operational, it is expected to
                            reduce power costs substantially, supporting margin stability
                            amid market volatility.
                        </p>
                    </div>
                </div>

                <div className=''>
                    <h1 className='text-[#005b94] text-2xl font-bold mt-8'>Free cash flow</h1>
                    <p className='text-xl mt-2'>
                        BALCO demonstrated strong internal funding capability in FY25
                        by generating a positive Free Cash Flow (FCF) of H106 crore,
                        despite a growth capex outlay of H3,258 crore This showcases
                        our ability to self-finance major expansion projects, with project
                        cost being funded through internal accruals. This positions
                        BALCO as financially resilient even during high-investment
                        cycles, ensuring no compromise on capital discipline.
                    </p>
                </div>

                <div className=''>
                    <h1 className='text-[#005b94] text-2xl font-bold mt-8'>Strategic Financial Architecture for De-risked growth</h1>
                    <p className='text-xl mt-2'>
                        BBALCO's growth is anchored in a well-planned financial and
                        operational architecture that emphasises self-sufficiency, risk
                        insulation, and long-term capital efficiency. As the Company
                        undertakes a large-scale expansion, it has already secured
                        critical enablers such as captive power, water, and logistics
                        infrastructure to support future operations without additional
                        cost burden or execution delays.
                        This strategic foresight ensures that growth is not dependent
                        on volatile external inputs. With minimal reliance on external
                        borrowings and strong internal accruals, BALCO is able to fund
                        progress while maintaining financial stability. The combination
                        of operational readiness and disciplined capital allocation
                        places the Company in a unique position to scale without
                        compromising financial strength.
                    </p>
                </div>

                {/* Managing Financial Risk Section - Made Responsive */}
                <div className='flex flex-col lg:flex-row gap-5'>
                    {/* Image comes first on mobile, text second */}
                    <div className='flex-1 order-1 lg:order-2'>
                        <img src="BusinessOverview/FinancialCapital/Page-45-Img-3.webp" alt="" className="w-full h-auto mt-4 lg:mt-10" />
                    </div>
                    <div className='flex-2 order-2 lg:order-1'>
                        <h1 className='text-[#005b94] text-2xl font-bold mt-8'>Managing financial risk at BALCO</h1>
                        <p className='text-xl mt-2'>
                            Financial resilience is at the core of our strategy. We implement
                            a structured risk management framework to safeguard our
                            financial health, ensuring stability amid market fluctuations.
                            Our approach prioritises disciplined capital allocation, stringent
                            financial controls and debt management to maintain a strong
                            balance sheet and prevent covenant breaches.
                            By continuously monitoring key financial parameters, we
                            mitigate risks associated with operational disruptions and
                            market volatility. We ensure a robust Debt-to-EBITDA ratio
                            and optimise asset utilisation to sustain profitability. Through
                            proactive financial governance, BALCO remains committed to
                            long-term stability, operational excellence and sustainable value
                            creation for stakeholders.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancialCapital;