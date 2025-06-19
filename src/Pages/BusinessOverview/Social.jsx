import React from 'react';
import { motion } from 'framer-motion';

const Social = () => {
    return (
        <div>
            {/* Background Section */}
            <div className="bg-[url('BusinessOverview/Social/Page-82-Image-1.webp')] bg-cover bg-no-repeat bg-center w-full min-h-screen">
                <div className="marginal px-6 sm:px-12 py-10 flex items-center">
                    <div className="flex flex-col lg:flex-row justify-start items-end gap-10 w-full">

                        {/* Left Side - Icon + Description */}
                        <div className="max-w-md text-white space-y-4">
                            <img
                                src="BusinessOverview/Social/Financial-Circle.webp"
                                alt="Financial Icon"
                                className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]"
                            />
                            <p className="text-base sm:text-xl font-bold leading-relaxed">
                                We strive to maximise the efficiency of our financial resources to drive long-term returns on investments. Our focus remains on benchmarking financial performance, mitigating risks and creating greater value for stakeholders. This strategic approach has led to well-planned investments while ensuring prudent fund to support our growth aspirations.
                            </p>
                        </div>

                        {/* Right Side - Material Topics & SDGs */}
                        <div className="bg-white text-black lg:bg-transparent lg:text-white space-y-6 p-4 lg:p-0 rounded-md lg:rounded-none">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Material Topic</h3>
                                <ul className="space-y-1 text-sm border-l-1 border-current pl-4">
                                    <li className='border-b-1 border-current'>Long-term growth and profitability</li>
                                    <li className='border-b-1 border-current'>Responsible advocacy</li>
                                    <li className='border-b-1 border-current'>Macro economical and geopolitical context</li>
                                    <li className='border-b-1 border-current'>Risk management and controls</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-2">SDGs covered</h3>
                                <div className="flex gap-4">
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
                                        src="/BusinessOverview/Social/8.webp"
                                        alt="SDG 8"
                                        className="w-[60px] h-[60px]"
                                    />
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
                                        src="/BusinessOverview/Social/12.webp"
                                        alt="SDG 12"
                                        className="w-[60px] h-[60px]"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Financial Highlights Section */}
            <div className='marginal'>
                <h1 className='text-[#a3238b] text-3xl font-extrabold'>
                    Our CSR footprint
                </h1>
                <div className="overflow-x-auto">
                    <img src="BusinessOverview/Social/Page-84-Image.webp" alt="" className='min-w-[900px] md:min-w-[1200px] lg:min-w-[1400px] mt-2' />
                </div>
                <div>
                    <h1 className='text-[#a3238b] text-2xl font-bold mt-8'>Empowering communities</h1>
                    <p className='text-xl mt-2'>
                        At BALCO, we believe that true progress is achieved when
                        communities grow alongside us. Our approach to community
                        engagement is rooted in empathy, innovation and sustainability,
                        fostering meaningful connections and positive change.
                        <br />
                        <br />
                        We prioritize understanding the unique needs and aspirations
                        of the people we serve, enabling us to design targeted
                        interventions across critical areas such as healthcare, sustainable
                        livelihoods, water and sanitation, women’s empowerment,
                        environment and safety, sports and culture, and community
                        asset creation.
                        Through collaboration with government agencies, NGOs, and
                        local stakeholders, we create scalable, long-term solutions that
                        uplift communities and promote inclusive growth.
                        <br />
                        <br />
                        A key focus of our efforts is empowering women, youth
                        and marginalised groups, helping them build skills, gain
                        opportunities to thrive. By nurturing partnerships and embracing
                        sustainable practices, we strive to create a lasting impact that
                        benefits the community we serve.
                    </p>
                    <br />
                    <img src="BusinessOverview/Social/Page-84-Image-1.webp" alt="" className='rounded-4xl' />
                    <div className='flex flex-row mt-10 gap-10 '>
                        <div>
                            <img src="BusinessOverview/Social/85-img-2.webp" alt="" className='rounded-3xl' />
                        </div>
                        <div>
                            <img src="BusinessOverview/Social/Page-85-Image.webp" alt="" />
                        </div>
                    </div>
                    <div className='flex flex-row mt-10 gap-10 '>
                        <div className='order-2'>
                            <img src="BusinessOverview/Social/85-img-1.webp" alt="" className='rounded-3xl' />
                        </div>
                        <div className='flex items-center'>
                            <img src="BusinessOverview/Social/Page-85-Image-1.webp" alt="" className='rounded-3xl' />
                        </div>
                    </div>
                    <h1 className='text-[#7d4786] text-2xl font-bold mt-8'>CSR Policy</h1>
                    <p className='text-xl mt-2'>
                        BALCO has a CSR Policy aligned
                        with section 135 of Companies Act,
                        2013 mandates, covering framework,
                        governance, monitoring, expenditure
                        and compliance responsibilities.
                    </p>
                </div>

                {/* Building Financial Resilience Section - Made Responsive */}
                <div className='flex flex-col lg:flex-row gap-5'>
                    {/* Image comes first on mobile, text second */}
                    <div className='flex-1 order-1 lg:order-2 flex items-center'>
                        <img src="public/BusinessOverview/Social/Page-85-Image-3.webp" alt="" className="w-full h-auto" />
                    </div>
                    <div className='flex-2 order-2 lg:order-1'>
                        <h1 className='text-[#7d4786] text-2xl font-bold mt-8 lg:mt-8'>Standard Operating Procedure (SOP)</h1>
                        <p className='text-xl mt-2'>
                            At BALCO, we have well-drafted SOP
                            outlines protocols for community
                            profiling, stakeholder analysis, CSR
                            programme development, monitoring,
                            evaluation, reporting, communication,
                            implementation and governance. These
                            SOP outlines are signed by the CEO and
                            senior management.
                        </p>
                        <div className='flex-2 order-2 lg:order-1'>
                            <h1 className='text-[#7d4786] text-2xl font-bold mt-12 lg:mt-12'>CSR Committee</h1>
                            <p className='text-xl mt-2'>
                                BALCO’s CSR committee convenes
                                annually to review and recommend the
                                CSR plan and budget to the Board,
                                ensuring compliance with policies
                                and monitoring activity progress. The
                                Directors’ Report certifies the CSR
                                expenditure.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-5'>
                    {/* Image comes first on mobile, text second */}
                    <div className='flex-1 order-1 lg:order-2'>
                        <img src="BusinessOverview/Social/Page-45-Img.webp" alt="" className="w-full h-auto" />
                    </div>
                </div>

                <div className=''>
                    <h1 className='text-[#7d4786] text-2xl font-bold mt-8'>Free cash flow</h1>
                    <ul className="space-y-3 mt-4">
                        {[
                            "Third-party CSR audits",
                            "Concurrent audits & Due diligences",
                            "Vedanta Sustainability Assurance Program (VSAP)",
                            "Management Assurance System Audit (MAS)",
                            "GRI Assurance Audit",
                            "Business Responsibility and Sustainability Reporting (BRSR) Audit",
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <img
                                    src="home/pointer.webp"
                                    alt="pointer"
                                    className="w-4 h-4 mt-1"
                                />
                                <span className="text-base lg:text-lg text-gray-800">{item}</span>
                            </li>
                        ))}
                    </ul>

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
                        <img src="BusinessOverview/Social/Page-45-Img-3.webp" alt="" className="w-full h-auto mt-4 lg:mt-10" />
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

export default Social;