import React from 'react';
import { motion } from 'framer-motion';

const ManufacturedCapital = () => {
    return (
        <div>
            {/* Background Section */}
            <div className="bg-[url('BusinessOverview/ManufacturedCapital/Page-46-Img-1.webp')] bg-cover bg-no-repeat bg-center w-full min-h-screen">
                <div className="marginal px-6 sm:px-12 py-10 flex items-center">
                    <div className="flex flex-col lg:flex-row justify-start items-end gap-10 w-full">

                        {/* Left Side - Icon + Description */}
                        <div className="max-w-md text-white space-y-4">
                            <img
                                src="BusinessOverview/ManufacturedCapital/Manufactured-Circle.webp"
                                alt="Manufactured Icon"
                                className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]"
                            />
                            <p className="text-base sm:text-xl font-bold leading-relaxed">
                                We strive to maximise the efficiency of our Manufactured resources to drive long-term returns on investments. Our focus remains on benchmarking Manufactured performance, mitigating risks and creating greater value for stakeholders. This strategic approach has led to well-planned investments while ensuring prudent fund to support our growth aspirations.
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
                                <div className="flex flex-wrap gap-2 md:gap-4">
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
                                        src="BusinessOverview/ManufacturedCapital/8.webp"
                                        alt="SDG 8"
                                        className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
                                    />
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
                                        src="BusinessOverview/ManufacturedCapital/9.webp"
                                        alt="SDG 9"
                                        className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
                                    />
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
                                        src="BusinessOverview/ManufacturedCapital/12.webp"
                                        alt="SDG 12"
                                        className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
                                    />
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
                                        src="BusinessOverview/ManufacturedCapital/13.webp"
                                        alt="SDG 13"
                                        className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
                                    />
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
                                        src="BusinessOverview/ManufacturedCapital/16.webp"
                                        alt="SDG 16"
                                        className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Manufactured Highlights Section */}
            <div className='marginal px-4 sm:px-6'>
                <div className="overflow-x-auto">
                    <img src="BusinessOverview/ManufacturedCapital/Page-47-Img.webp" alt="" className='min-w-[900px] md:min-w-[1200px] lg:min-w-[1400px] mt-2' />
                </div>
                <div className='mt-10 md:mt-20'>
                    <img src="BusinessOverview/ManufacturedCapital/Page-47-Img-1.webp" alt="" className='w-full h-auto' />
                </div>

                {/* Manufacturing Excellence Section - Responsive */}
                <div className='flex flex-col lg:flex-row gap-5 mt-8'>
                    <div className='flex-2'>
                        <h1 className='text-[#a37b5b] text-xl md:text-2xl font-bold mt-8 lg:mt-25'>Manufacturing Excellence</h1>
                        <p className='text-base md:text-xl mt-2'>
                            As a fully integrated aluminium manufacturer, we oversee the entire
                            production process—from bauxite mining to smelting. Our advanced
                            manufacturing facility in Korba, Chhattisgarh, is supported by highquality bauxite reserves in Kawardha and Mainpat. Over the years,
                            we have steadily increased our smelting capacity, reinforcing our
                            commitment to efficiency and quality
                        </p>
                    </div>
                    <div className='flex-1'>
                        <div className='grid grid-cols-2 gap-2 md:gap-4 h-full mt-4 lg:mt-8'>
                            {/* Box 1 */}
                            <div className='bg-white border border-gray-200 rounded-lg p-2 md:p-4 flex flex-col justify-center items-center text-center shadow-sm'>
                                <div className='text-[#a37b5b] text-xl md:text-3xl font-bold'>3</div>
                                <div className='text-black text-xs md:text-sm mt-1 md:mt-2'>Manufacturing plants</div>
                            </div>

                            {/* Box 2 */}
                            <div className='bg-white border border-gray-200 rounded-lg p-2 md:p-4 flex flex-col justify-center items-center text-center shadow-sm'>
                                <div className='text-[#a37b5b] text-xl md:text-3xl font-bold'>30th</div>
                                <div className='text-black text-xs md:text-sm mt-1 md:mt-2'>Global aluminium producer</div>
                            </div>

                            {/* Box 3 */}
                            <div className='bg-white border border-gray-200 rounded-lg p-2 md:p-4 flex flex-col justify-center items-center text-center shadow-sm'>
                                <div className='text-[#a37b5b] text-xl md:text-3xl font-bold'>558 KT</div>
                                <div className='text-black text-xs md:text-sm mt-1 md:mt-2'>Designed Capacity of BALCO</div>
                            </div>

                            {/* Box 4 */}
                            <div className='bg-white border border-gray-200 rounded-lg p-2 md:p-4 flex flex-col justify-center items-center text-center shadow-sm'>
                                <div className='text-[#a37b5b] text-xl md:text-3xl font-bold'>15%</div>
                                <div className='text-black text-xs md:text-sm mt-1 md:mt-2'>Market Share</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section - Responsive */}
                <div className='mt-5'>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div className='flex-1 flex flex-col lg:flex-row gap-4 items-center'>
                            <div className='flex justify-center w-full lg:w-auto'>
                                <img
                                    src="BusinessOverview/ManufacturedCapital/Page-48-Img.webp"
                                    alt=""
                                    className='w-full max-w-[300px] lg:w-[20vw] h-auto object-cover rounded-lg'
                                />
                            </div>
                            <div className='flex flex-col space-y-2 md:space-y-3 text-sm md:text-lg w-full lg:w-auto'>
                                <div className='flex items-center gap-2'>
                                    <div className='w-2 h-2 md:w-3 md:h-3 bg-[#005b94] rounded-full flex-shrink-0'></div>
                                    <span className='text-[#005b94] font-semibold'>Coal mines</span>
                                    <span className='text-black'>Chotia • Barra</span>
                                </div>

                                <div className='flex items-center gap-2'>
                                    <div className='w-2 h-2 md:w-3 md:h-3 bg-[#74c044] rounded-full flex-shrink-0'></div>
                                    <span className='text-[#74c044] font-semibold'>Manufacturing facility</span>
                                    <span className='text-black'>Korba</span>
                                </div>

                                <div className='flex items-center gap-2'>
                                    <div className='w-2 h-2 md:w-3 md:h-3 bg-[#f9a556] rounded-full flex-shrink-0'></div>
                                    <span className='text-[#f9a556] font-semibold'>Bauxite mines</span>
                                    <span className='text-black'>Mainpat • Kawardha</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex-1 flex justify-center lg:justify-end items-center mt-4 lg:mt-8 p-4 lg:p-10'>
                            <img
                                src="BusinessOverview/ManufacturedCapital/Page-48-Img-1.webp"
                                alt=""
                                className='w-full max-w-[300px] lg:w-[20vw] h-auto object-cover rounded-lg'
                            />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row mt-8 gap-4 lg:gap-8 lg:items-stretch'>
                    {/* First Image - Wider */}
                    <div className='flex-[1.5] order-1 lg:order-1'>
                        <img src="BusinessOverview/ManufacturedCapital/Page-48-Img-2.webp" alt="" className="w-full h-full object-contain mt-4 lg:mt-2" />
                    </div>

                    {/* Text Content Section - Middle */}
                    <div className='flex-2 order-2 lg:order-2 flex flex-col justify-center'>
                        <div className='flex flex-col items-center lg:items-center text-center h-full justify-center'>
                            <h1 className='text-[#a37b5b] text-2xl md:text-4xl font-medium mt-4 lg:mt-8'>We have Achieved….</h1>
                            <h2 className='mt-4 lg:mt-10 text-base md:text-lg'>Reduction in turnaround time from </h2>
                            <h1 className='text-[#835c3e] text-2xl md:text-4xl font-bold mt-2 lg:mt-3'>15.5 hrs to 5.5 hrs </h1>

                            {/* Additional Achievement Sections - Side by Side */}
                            <div className='w-full mt-6 lg:mt-8 flex flex-col lg:flex-row gap-4'>
                                <div className='border-t border-gray-300 pt-4 flex-1'>
                                    <h2 className='text-base md:text-lg font-medium'><span className='text-[#835c3e] text-2xl md:text-4xl font-bold'>0</span><br />legacy waste spent in pot lining - carbon</h2>
                                </div>
                                <div className='border-t border-gray-300 pt-4 flex-1'>
                                    <h2 className='text-base md:text-lg font-medium'>Increased ARC percentage by <br /> <span className='text-[#835c3e] text-2xl md:text-4xl font-bold'>97%</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Third Image */}
                    <div className='flex-1 order-3 lg:order-3'>
                        <img src="BusinessOverview/ManufacturedCapital/Page-48-Img-3.webp" alt="" className="w-full h-full object-cover mt-4 lg:mt-2" />
                    </div>
                </div>

                {/* Responsive Section - Made responsive */}
                <div className='flex flex-col md:flex-row mt-10 md:mt-20 gap-8 md:gap-20 lg:gap-40 border-b-1 pb-10'>
                    <div className='flex flex-col items-center md:items-start'>
                        <img src="BusinessOverview/ManufacturedCapital/Page-50-Img.webp" alt="" className='w-full max-w-[300px] md:max-w-none' />
                        <h2 className='text-base md:text-lg font-medium mt-6 md:mt-10 text-center md:text-left md:ml-5'>
                            <span className='text-[#835c3e] text-2xl md:text-4xl font-bold'>3,696</span><br />
                            Individuals rewarded for their contributions
                        </h2>
                    </div>
                    <div className='flex justify-center md:justify-start'>
                        <img src="BusinessOverview/ManufacturedCapital/Page-50-Img-1.webp" alt="" className='w-full max-w-[400px] md:max-w-none' />
                    </div>
                </div>

                <div className='mt-10'>
                    <h1 className='text-lg md:text-xl font-bold mb-5'>Advanced logistics </h1>
                    <img src="BusinessOverview/ManufacturedCapital/Page-50-Img-2.webp" alt="" className='w-full h-auto' />
                    <h1 className='text-lg md:text-xl font-bold mb-5 mt-10'>Asset Management</h1>
                    <p className='text-base md:text-lg'>BALCO adopts a structured approach to asset optimisation,
                        focusing on enhancing asset longevity, improving throughput
                        and reliability, and achieving these goals in a cost-effective and
                        sustainable manner. This policy applies to all personnel involved
                        in the operation and maintenance of BALCO's assets.
                        To drive efficiency, we have implemented a systematic
                        framework for assessing equipment performance and
                        managing assets across Strategic Business Units (SBUs). This approach includes criticality analysis, condition appraisals and
                        refurbishment planning to ensure optimal asset utilisation.
                        Our comprehensive maintenance strategy covers key areas
                        such as plant and equipment maintenance, utility operations,
                        infrastructure maintenance, security, and environmental and safety
                        compliance, ensuring seamless and sustainable operations. </p>
                </div>

                <div className='border-b-1 pb-10'>
                    <h1 className='text-lg md:text-xl font-bold mb-5 mt-10 text-[#835c3e]'>Smelter</h1>
                    <p className='text-base md:text-lg mb-10'>BALCO has increased potline volume by 105% of its design capacity without any CAPEX investment. This achievement has also led to a significant boost in productivity.
                        Looking ahead, BALCO plans to leverage digitalisation-driven manpower optimisation during the installation of its new smelter.
                        This strategic initiative is expected to enhance production per person by 32%, further strengthening operational efficiency and
                        workforce productivity.</p>
                    <img src="BusinessOverview/ManufacturedCapital/Page-51-Img.webp" alt="" className='w-full h-auto' />
                </div>

                <div className='flex flex-col lg:flex-row gap-5'>
                    {/* Image comes first on mobile, text second */}
                    <div className='flex-1 order-1 lg:order-2 flex items-center justify-center lg:ml-10'>
                        <img src="BusinessOverview/ManufacturedCapital/Page-51-Img-2.webp" alt="" className="w-full max-w-[400px] lg:max-w-none h-auto mt-4 lg:mt-10" />
                    </div>
                    <div className='flex-2 order-2 lg:order-1 mt-8'>
                        <h1 className='text-[#000000] text-xl md:text-2xl font-bold mt-8'>Digitalisation steps to improve technological
                            advancements</h1>
                        <p className='text-base md:text-xl mt-2 mb-8 md:mb-13'>
                            Digitalisation has become a driving force enabling our business
                            to optimise operations, improve productivity, and maintain a
                            competitive edge. By embracing digital technologies and
                            seamlessly integrating them into plant processes, we can
                            unlock new levels of efficiency, connectivity, and data-driven
                            decision-making.
                            Innovation and adoption of new technology are indispensable
                            for the sustained growth of an enterprise. Our IT systems and
                            processes are strategically aligned to business operations,
                            ensuring the confidentiality, integrity and availability of the data/
                            information at all times.
                        </p>
                        <img src="BusinessOverview/ManufacturedCapital/Page-51-Img-3.webp" alt="" className='w-full h-auto' />
                    </div>
                </div>

                <div className='mt-10'>
                    <h1 className='text-lg md:text-xl font-bold mb-5 mt-10'>TSF management </h1>
                    <p className='text-base md:text-lg mb-10'>The safe and responsible management of TSF (Tailing Storage Facility) is at the core of our operational philosophy. We uphold the highest standards of care in the design, construction, operation and the closure of this infrastructure. Additionally, By continually improving the management of our facilities by developing and incorporating best practices which includes:</p>
                    <img src="BusinessOverview/ManufacturedCapital/Page-52-Img.webp" alt="" className='mb-20 w-full h-auto' />
                    <img src="BusinessOverview/ManufacturedCapital/Page-52-Img-1.webp" alt="" className='mb-10 w-full h-auto' />
                </div>

                <div className='mt-10'>
                    <h1 className='text-lg md:text-xl font-bold mb-5 mt-10'>Energy efficiency and sustainability at BALCO</h1>
                    <p className='text-base md:text-lg'>BALCO's current production scale ranks it among the top 30 aluminium producers globally. With the upcoming expansion, BALCO is set to become one of the top five aluminium smelters operating at a single location. Potline 1—already recognised as a globa benchmark for specific power consumption— will further elevate BALCO's position by achieving over 1 million metric tonnes of
                        production while maintaining the industry's lowest specific power consumption. This commitment will not only reinforce BALCO's
                        operational efficiency but also position it as a global leader in greenhouse gas (GHG) reduction initiatives.
                        As part of its capacity expansion plan, to further optimise power consumption through targeted projects and innovative solutions.
                        A structured roadmap has been developed to achieve specific reductions in energy usage, incorporating initiatives such as pot
                        controller upgrades, anode drop reduction and process optimisation. These advancements align with BALCO's commitment to
                        sustainability, ensuring enhanced efficiency while minimising its environmental footprint.</p>

                    {/* Energy Section - Made responsive */}
                    <div className='flex flex-col lg:flex-row gap-8 lg:gap-40 border-b-1 mt-10'>
                        <div className='flex items-center justify-center lg:justify-start w-full lg:w-1/2'>
                            <img
                                src="BusinessOverview/ManufacturedCapital/Page-53-Img.webp"
                                alt=""
                                className='w-full max-w-[400px] lg:max-w-none object-cover aspect-square lg:aspect-auto lg:h-[400px]'
                            />
                        </div>
                        <div className='flex-1 w-full lg:w-1/2'>
                            <h1 className='text-lg md:text-xl font-bold mb-6 md:mb-10 mt-6 md:mt-5 text-[#835c3e]'>
                                BALCO Y-o-Y specific power consumption roadmap
                            </h1>
                            <img
                                src="BusinessOverview/ManufacturedCapital/Page-53-Img-1.webp"
                                alt=""
                                className='mb-10 w-full h-[400px] object-contain'
                            />
                        </div>
                    </div>

                    {/* Power Section - Made responsive */}
                    <div className='flex flex-col lg:flex-row mt-10 md:mt-20 gap-6 pb-10'>
                        <div className='flex flex-col justify-around space-y-6'>
                            <img src="BusinessOverview/ManufacturedCapital/Page-54-Img.webp" alt="" className='w-full h-auto' />
                            <div className='border-b border-r border-[#835c3f] rounded-2xl p-4'>
                                <h1 className='text-lg md:text-xl font-bold mb-5'>Power and energy milestones</h1>
                                <p className='text-base md:text-lg'>We believe in achieving operational excellence,
                                    improving energy efficiency and adopting
                                    sustainable practices to strengthen our power
                                    generation capabilities. Our thermal power
                                    plants reached significant milestones in power
                                    production, turbine efficiency and environmental
                                    sustainability.</p>
                            </div>
                        </div>
                        <div className='flex justify-center lg:justify-start'>
                            <img src="BusinessOverview/ManufacturedCapital/Page-54-Img-1.webp" alt="" className='rounded-3xl w-full max-w-[500px] lg:max-w-none h-auto' />
                        </div>
                    </div>

                    <div className='mt-10'>
                        <img src="BusinessOverview/ManufacturedCapital/Page-55-Img.webp" alt="" className='w-full h-auto' />
                    </div>

                    <div>
                        <div>
                            <h1 className='text-lg md:text-xl font-bold mb-5 mt-10'>Ensuring operational excellence at every step</h1>
                            <p className='text-base md:text-lg'>BALCO continues to drive operational efficiency and sustainability through strategic investments, technological advancements and process optimisations. Our approach focuses on maximising power generation efficiency, optimising resource utilisation and leveraging digital tools for real-time monitoring and predictive maintenance.</p>
                            <h1 className='text-lg md:text-xl font-bold mb-5 mt-10'>Operational process improvement</h1>
                            <img src="BusinessOverview/ManufacturedCapital/Page-56-Img.webp" alt="" className='w-full h-auto' />
                            <p className='text-base md:text-lg mb-10 mt-5'>Throughout the year, we advanced our goals of sustainability and continuous improvement by implementing several key initiatives:</p>
                            <img src="BusinessOverview/ManufacturedCapital/Page-56-Img-1.webp" alt="" className='w-full h-auto' />
                            <h1 className='text-lg md:text-xl font-bold mb-5 mt-10'>Initiatives for FY 2025 to enhance operations</h1>
                            <img src="BusinessOverview/ManufacturedCapital/Page-56-Img-2.webp" alt="" className='w-full h-auto' />
                        </div>
                    </div>

                    <div className='border-b-1 pb-10'>
                        <h1 className='text-lg md:text-xl font-bold mb-5 mt-10 text-[#835c3e]'>Raising the bar on quality </h1>
                        <p className='text-base md:text-lg mb-10'>We maintain the highest quality standards
                            across our manufacturing operations.
                            By implementing strict quality control
                            systems and continuously improving our
                            metal casting operations, we ensure the
                            production of superior-grade products.
                            These approaches improve our operating
                            efficiency and also help maintain our
                            strong reputation within the industry.</p>
                        <h1 className='text-lg md:text-xl font-bold mb-5 mt-10'>Technological Integration in Quality control</h1>
                        <p className='text-base md:text-lg'>We harness the power of technology to set new benchmarks in quality and efficiency.
                            It plays a key role in improving quality control across all stages of production. By
                            continuously innovating and integrating advanced solutions, we turn challenges into
                            opportunities by e optimising time, reducing effort and enhancing efficiency.
                            We also focus on optimising logistics costs by improving operational efficiency and
                            promoting sustainable practices. By embracing smarter processes and better resource
                            management, we ensure a cost-effective and environmentally responsible supply chain..</p>

                        {/* Quality Images - Made responsive */}
                        <div className='flex flex-col md:flex-row gap-6 mt-10'>
                            <div className='flex items-center justify-center'>
                                <img src="BusinessOverview/ManufacturedCapital/Page-57-Img-1.webp" alt="" className='w-full max-w-[400px] md:max-w-none h-auto' />
                            </div>
                            <div className='flex items-center justify-center'>
                                <img src="BusinessOverview/ManufacturedCapital/Page-57-Img.webp" alt="" className='mb-6 md:mb-10 w-full max-w-[400px] md:max-w-none h-auto' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-5 mt-10'>
                        {/* Image comes first on mobile, text second */}
                        <div className='flex-1 order-1 lg:order-2 flex items-center'>
                            <img src="BusinessOverview/ManufacturedCapital/Page-58-Img.-3png.webp" alt="" className="w-full h-auto" />
                        </div>
                        <div className='flex-2 order-2 lg:order-1'>
                            <h1 className='text-[#000000] text-2xl font-bold'>Quality control process</h1>
                            <p className='text-xl mt-2'>
                                We uphold stringent quality standards across the manufacturing process, from
                                hot metal intake to final product delivery. Precision alloying enhances mechanical
                                properties, with Magnesium (Mg) and Silicon (Si) improving hardness, Manganese
                                (Mn) boosting corrosion resistance, and Titanium (Ti) and Boron (B) refining grain
                                structure. Wire rods benefit from Tibal (Ti, B, Al) Rod for superior performance.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row mt-10 md:mt-20 gap-8 md:gap-20 lg:gap-40 '>
                    <div className='flex flex-col items-center md:items-start '>
                        <img src="BusinessOverview/ManufacturedCapital/Page-58-Img.webp" alt="" className='w-full max-w-[300px] md:max-w-none' />
                    </div>
                    <div className='flex justify-center md:justify-start'>
                        <img src="BusinessOverview/ManufacturedCapital/Page-58-Img-2.webp" alt="" className='w-full max-w-[400px] md:max-w-none' />
                    </div>
                    <div>
                        <img src="BusinessOverview/ManufacturedCapital/Page-58-Img-3.webp" alt="" />
                    </div>
                </div>
                <div>
                    <h1 className='text-lg md:text-2xl font-bold mb-5 mt-10'>Strategic Investments</h1>
                    <p className='text-base md:text-xl'>To enhance operational efficiency, we have undertaken various initiatives and projects which align with the strategic goals of the
                        Company, modernise the operational infrastructure and minimise waste to prioritise long term growth. The project that are currently
                        in process are as follows:</p>
                    <div className='flex flex-col md:flex-row mt-10 md:mt-10 gap-8 md:gap-4 lg:gap-6 '>
                        <div className='flex flex-col items-center md:items-start '>
                            <img src="BusinessOverview/ManufacturedCapital/Page-59-Img..webp" alt="" className='w-full max-w-[300px] md:max-w-none' />
                        </div>
                        <div className='flex justify-center md:justify-start'>
                            <img src="BusinessOverview/ManufacturedCapital/Page-59-Img.webp" alt="" className='w-full max-w-[400px] md:max-w-none' />
                        </div>
                    </div>
                    <div className='border border-[#835c3e] p-4 rounded-2xl mt-10'>
                        <p className='text-base md:text-xl'>Highest Ever Ash Utilization in Cement Plant: 152.9 KT of fly ash dispatched to Cement Plants of sustainable ash utilization (Last Best 87.58 KT in FY22).</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManufacturedCapital;