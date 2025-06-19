import React from 'react';
import { motion } from 'framer-motion';

const FinancialCapital = () => {
    return (
        <div>
            {/* Background Section */}
            <div className='bg-[#9b92c7]'>
                <div className="bg-[url('BusinessOverview/IntellectualCapital/Page-60-Img..webp')] bg-contain bg-no-repeat bg-left w-full min-h-[50vh] md:min-h-screen">
                    <div className="px-4 sm:px-6 lg:px-12 py-10 flex items-center">
                        {/* Commented content remains as is */}
                    </div>
                </div>
            </div>

            {/* Financial Highlights Section */}
            <div className='marginal px-6 sm:px-12'>
                {/* Building Financial Resilience Section */}
                <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-center py-8'>
                    <div className='w-full lg:w-1/2 order-2 lg:order-1'>
                        <div className='space-y-4'>
                            <p className='text-xl lg:text-2xl'>
                                New products added <br />
                                in FY 2025 (Nos)
                            </p>
                            <h1 className='text-3xl lg:text-4xl text-[#9b92c6] font-[900]'>1</h1>
                            <p className='text-lg lg:text-xl'>
                                Successfully developed new product EC Grade
                                Aluminium Wire Rods, engineered for fine wire
                                drawing up to 0.1mm, catering to critical applications
                                in fine winding segments.
                            </p>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 order-1 lg:order-2'>
                        <img
                            src="BusinessOverview/IntellectualCapital/Page-62-Img..webp"
                            alt=""
                            className="w-full h-auto rounded-lg p-10"
                        />
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-center py-8'>
                    <div className='w-full lg:w-3/5 order-1'>
                        <img
                            src="BusinessOverview/IntellectualCapital/Page-62-Img-1.webp"
                            alt=""
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className='w-full lg:w-2/5 order-2'>
                        <h1 className='text-[#9b92c6] text-2xl lg:text-3xl font-bold mb-4 lg:mb-6'>Research and Development</h1>
                        <p className='text-lg lg:text-xl'>
                            We shape possibilities. We are dedicated to capitalising on emerging opportunities through focused R&D initiatives. With
                            the growing demand for aluminium in India, we recognise the importance of developing innovative, high-quality products
                            tailored to industry needs. Our efforts are aligned with the ‘Make in India’ initiative, aiming to reduce import dependence
                            and promote indigenous aluminium alloy manufacturing.
                            This strategic focus enables us to cater to diverse sectors such as defence, aerospace, marine, railways and electric vehicles,
                            enabling self-reliance and technological advancement across the country
                        </p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-center py-8 border-b'>
                    <div className='w-full lg:w-3/5 order-2'>
                        <img
                            src="BusinessOverview/IntellectualCapital/Page-63-Img.webp"
                            alt=""
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                    <div className='w-full lg:w-2/5 order-1'>
                        <h1 className='text-[#9b92c6] text-2xl lg:text-3xl font-bold mb-4 lg:mb-6'>Data analytics and advance data driven decision making</h1>
                        <p className='text-lg lg:text-xl'>
                            We leverage cutting-edge digital technologies to enhance operational efficiency, drive innovation and strengthen safety
                            measures. By integrating advanced data analytics, automation and AI-driven solutions, we are transforming our processes to
                            achieve greater precision, reliability and sustainability to redefine excellence at every step of the way.
                            The table below highlights key technological advancements and their applications across our operations, showcasing our
                            commitment to continuous improvement and innovative practices.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-6 items-start py-6'>
                    <div className='w-full lg:w-2/5 self-stretch'>
                        <img
                            src="BusinessOverview/IntellectualCapital/Page-63-Img-1.webp"
                            alt=""
                            className="w-full h-full max-h-[600px] object-contain rounded-lg"
                        />
                    </div>
                    <div className='w-full lg:w-3/5'>
                        <h1 className='text-[#9b92c6] text-2xl lg:text-3xl font-bold mb-4'>
                            AI & Emerging Technologies Driving Smart Transformation
                        </h1>
                        <p className='text-lg lg:text-xl'>
                            We continue to integrate cutting-edge technologies
                            to improve process efficiency, enhance workforce
                            capability, and strengthen asset reliability. The focus
                            has now moved beyond conventional digitisation
                            to strategic adoption of AI, machine learning, video
                            analytics, and immersive training technologies forming
                            the backbone of BALCO's digital transformation
                            roadmap.
                        </p>
                    </div>
                </div>
                <div className='mt-10 lg:mt-20'>
                    {/* Full width top image */}
                    <div className='w-full mb-10 lg:mb-16'>
                        <img
                            src="BusinessOverview/IntellectualCapital/Page-64-Img-.webp"
                            alt="Main Technology"
                            className="w-full h-auto max-h-[600px] object-contain rounded-lg"
                        />
                    </div>

                    {/* Bottom two images - responsive grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
                        <div className='space-y-4'>
                            <img
                                src="BusinessOverview/IntellectualCapital/Page-64-Img-1.webp"
                                alt="AR/VR Training"
                                className="w-full h-auto max-h-[300px] object-contain rounded-lg"
                            />
                            <h1 className='text-lg md:text-xl font-medium text-center md:text-left'>
                                Augmented and virtual reality based training
                            </h1>
                        </div>

                        <div className='space-y-4'>
                            <img
                                src="BusinessOverview/IntellectualCapital/Page-64-Img-2.webp"
                                alt="Refractory Management"
                                className="w-full h-auto max-h-[300px] object-contain rounded-lg"
                            />
                            <h1 className='text-lg md:text-xl font-medium text-center md:text-left'>
                                Refractory Management
                            </h1>
                        </div>
                    </div>
                    <div className='mt-10 px-4 lg:px-0'>
                        {/* Heading and intro paragraph */}
                        <h1 className='text-[#9b92c6] text-2xl lg:text-3xl font-bold mb-4 lg:mb-6'>Digitalisation</h1>
                        <p className='text-lg lg:text-xl mb-8 lg:mb-10'>
                            Digitalisation has become a driving force enabling our business to
                            optimise operations, improve productivity, and gain a competitive
                            edge. By embracing digital technologies and integrating them into
                            plant processes, we can unlock new levels of efficiency, connectivity
                            and data-driven decision-making. Innovation and adoption of
                            new technology are indispensable for the growth of an enterprise.
                            Our IT systems and processes are aligned to business operations
                            ensuring confidentiality, integrity and availability of the data.
                        </p>

                        {/* Content section with image */}
                        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
                            {/* Text content - comes first on mobile */}
                            <div className='w-full lg:w-3/5'>
                                <h2 className='text-black text-xl lg:text-2xl font-bold mb-4 lg:mb-6'>Building Digital Capability</h2>
                                <p className='text-lg lg:text-xl mb-6 lg:mb-8'>
                                    As part of its ongoing digital transformation journey, we
                                    have focused on strengthening internal capabilities through
                                    structured training programmes. Over 200 employees across
                                    levels including shopfloor teams and senior leadership have
                                    been trained on AI-driven applications in operations and
                                    maintenance
                                </p>

                                <h2 className='text-black text-xl lg:text-2xl font-bold mb-4 lg:mb-6'>Collaborations to enhance digitalisation efforts</h2>
                                <p className='text-lg lg:text-xl'>
                                    Collaborations with leading technology providers such as
                                    Microsoft and Google have supported these efforts, including
                                    sessions on generative AI tools like Microsoft Copilot. The
                                    initiative has not only enhanced digital fluency but also led to
                                    the identification of 40+ potential use cases, paving the way for
                                    smarter, tech-enabled operations.
                                </p>
                            </div>

                            {/* Image - comes second on mobile */}
                            <div className='w-full lg:w-2/5 flex justify-center items-start'>
                                <img
                                    src="BusinessOverview/IntellectualCapital/Page-64-Img-3.webp"
                                    alt="Digital Transformation"
                                    className='w-full h-auto max-w-[600px] lg:max-w-none object-contain rounded-lg shadow-sm'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <p className='text-lg lg:text-xl mb-3'>We have initiated digitalisation projects for new product development focusing on the following areas:</p>
                        <h1 className='text-[#9b92c6] text-2xl lg:text-3xl font-bold mb-4 lg:mb-6'>Key Projects</h1>
                        <div className="">
                            {/* Main grid container */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                                {/* Finance - Related Party Transaction Card */}
                                <div className="bg-[#f3f2f7] p-6 rounded-lg">
                                    <h3 className="font-bold text-lg mb-3">Finance - Related Party Transaction (RPT) & Taxation portal</h3>
                                    <ul className="space-y-2">
                                        <li>1. Deployed automated workflows for Related Party Transactions and taxation compliance.</li>
                                        <li>2. Improved accuracy and transparency in financial reporting and regulatory adherence.</li>
                                        <li>3. Reduces manual intervention through seamless SAP integrations.</li>
                                    </ul>
                                </div>
                                <div className="bg-[#f3f2f7] p-6 rounded-lg">
                                    <h3 className="font-bold text-lg mb-3">Power Plant Condition Based Monitoring (CBM)
                                        Dashboards</h3>
                                    <ul className="space-y-2">
                                        <li>1.AI-enabled system for real-time monitoring of power
                                            plant health parameters.</li>
                                        <li>2.Enables predictive maintenance and reduces
                                            unplanned downtimes.</li>
                                        <li>3.Supports energy efficiency and performance
                                            optimization.</li>
                                    </ul>
                                </div>
                                <div className="bg-[#f3f2f7] p-6 rounded-lg">
                                    <h3 className="font-bold text-lg mb-3">SIMS (Store Inventory Management System)
                                        for Growth Project</h3>
                                    <ul className="space-y-2">
                                        <li>1.Launched Store Inventory Management System for
                                            unmanned zone safety compliance.</li>
                                        <li>2.Enabled real-time observation logging to eliminate
                                            unsafe acts.</li>
                                        <li>3.Centralized dashboard improved air quality tracking
                                            and safety governance.</li>
                                    </ul>
                                </div>
                                <div className="bg-[#f3f2f7] p-6 rounded-lg">
                                    <h3 className="font-bold text-lg mb-3">SIMS (Store Inventory Management System)
                                        for Growth Project</h3>
                                    <ul className="space-y-2">
                                        <li>1.Launched Store Inventory Management System for
                                            unmanned zone safety compliance.</li>
                                        <li>2.Enabled real-time observation logging to eliminate
                                            unsafe acts.</li>
                                        <li>3.Centralized dashboard improved air quality tracking
                                            and safety governance.</li>
                                    </ul>
                                </div>
                                <div className="bg-[#f3f2f7] p-6 rounded-lg">
                                    <h3 className="font-bold text-lg mb-3">BIEP (Business Innovation &
                                        Excellence Portal)</h3>
                                    <ul className="space-y-2">
                                        <li>1.Internal platform to track and evaluate innovative
                                            ideas and excellence initiatives.</li>
                                        <li>2.Drives a culture of continuous improvement across
                                            departments.</li>
                                        <li>3.Facilitates structured review and implementation of
                                            high-impact suggestions.</li>
                                    </ul>
                                </div>
                                <div className="bg-[#f3f2f7] p-6 rounded-lg">
                                    <h3 className="font-bold text-lg mb-3">One day vehicle Movement</h3>
                                    <ul className="space-y-2">
                                        <li>1.Rolled out a digital portal for end-to-end vehicle
                                            entry and exit tracking.</li>
                                        <li>2.Improved logistics coordination with real-time
                                            updates for all stakeholders.</li>
                                        <li>3.Enhanced compliance and reduced delays in plant
                                            movement logistics.</li>
                                    </ul>
                                </div>
                                <div className="bg-[#f3f2f7] p-6 rounded-lg">
                                    <h3 className="font-bold text-lg mb-3">Interlock bypass
                                        protection</h3>
                                    <ul className="space-y-2">
                                        <li>1.Digitized the process of interlock bypass
                                            management with real-time tracking.</li>
                                        <li>2.Enhanced safety compliance with automated
                                            approvals and audit-ready logs.</li>
                                        <li>3.Centralized platform reduced human error and
                                            improved process transparency</li>
                                    </ul>
                                </div>
                                <div className="bg-[#f3f2f7] p-6 rounded-lg">
                                    <h3 className="font-bold text-lg mb-3">Robotic Process Automation
                                        for Finance</h3>
                                    <ul className="space-y-2">
                                        <li>1.Automated ~40 smelter closing files for faster
                                            financial consolidation.</li>
                                        <li>2.Achieved near real-time reporting accuracy within
                                            24 hours.</li>
                                        <li>3.Advanced BALCO’s digital finance transformation
                                            with minimal manual intervention.</li>
                                    </ul>
                                </div>
                                <div className="bg-[#f3f2f7] p-6 rounded-lg">
                                    <h3 className="font-bold text-lg mb-3">Payroll Input Automation</h3>
                                    <ul className="space-y-2">
                                        <li>1.Streamlined payroll input processing through full
                                            system integration.</li>
                                        <li>2.Improved data accuracy and operational efficiency in
                                            HR and finance.</li>
                                        <li>3.Eliminated repetitive manual processes in salary
                                            computations.</li>
                                    </ul>
                                </div>
                                <div className="bg-[#f3f2f7] p-6 rounded-lg">
                                    <h3 className="font-bold text-lg mb-3">Ash Control Tower</h3>
                                    <ul className="space-y-2">
                                        <li>1.Centralized digital dashboard for monitoring and
                                            managing ash handling systems.</li>
                                        <li>2.Enhances environmental compliance and
                                            operational control.</li>
                                        <li>3.Supports timely dispatches and inventory tracking of
                                            ash disposal.</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="p-6 rounded-lg ">
                                        <img src="BusinessOverview/IntellectualCapital/Page-65-Img.webp" alt="" />
                                        <h1>Ash control Tower</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-center py-8 border-b'>
                        <div className='w-full lg:w-3/5 order-2'>
                            <img
                                src="BusinessOverview/IntellectualCapital/Page-66-Img.webp"
                                alt=""
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>

                        <div className='w-full lg:w-2/5 order-1'>
                            <h1 className='text-[#9b92c6] text-2xl lg:text-3xl font-bold mb-4 lg:mb-6'>Optimising legal activities with Roznama tool </h1>
                            <p className='text-lg lg:text-xl'>
                                BALCO has enhanced its legal management capabilities by implementing the Roznama Legal Management Tool, ensuring real-time
                                updates, comprehensive oversight and risk mitigation. The tool enables efficient case management, secures legal data and provides
                                access to an extensive network of legal experts.
                            </p>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <img src="BusinessOverview/IntellectualCapital/Page-66-Img-1.webp" alt="" className='mb-20' />
                        <img src="BusinessOverview/IntellectualCapital/Page-66-Img-2.webp" alt="" />
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-[#9b92c6] text-2xl lg:text-3xl font-bold mb-4 lg:mb-6'>Optimising legal activities with Roznama tool </h1>
                        <img src="BusinessOverview/IntellectualCapital/Page-67-img.webp" alt="" />

                        <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 items-start py-6 border-b mt-10'>
                            {/* Text Content - Always comes first in DOM */}
                            <div className='w-full lg:w-2/5'>
                                <h1 className='text-[#9b92c6] text-2xl lg:text-3xl font-bold mb-4'>Information technology</h1>
                                <p className='text-lg lg:text-xl'>
                                    We believe that progress is powered by collaboration and
                                    innovation. We seamlessly integrate new initiatives into our
                                    business plan through collaborative discussions with senior
                                    management and various departments. This synergy ensures
                                    that every step aligns with our vision for growth. Throughout the
                                    year, we systematically implement audit recommendations to
                                    enhance governance and efficiency. Regular capacity planning
                                    exercises optimise resource utilisation, while proactive measures
                                    address hardware and software obsolescence, ensuring
                                    technological resilience.
                                    With continuous advancements in SAP, automation and IT
                                    infrastructure, we are strengthening our digital backbone to
                                    support business growth and sustainability with highlights for
                                    the initiatives in our IT segments.
                                </p>
                            </div>

                            {/* Image - Comes second in DOM but appears on right */}
                            <div className='w-full lg:w-3/5'>
                                <img
                                    src="BusinessOverview/IntellectualCapital/Page-67-img-1.webp"
                                    alt="IT Infrastructure"
                                    className="w-full h-auto max-h-[600px] lg:max-h-[500px] object-contain "
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 md:gap-10 w-full mt-10">
                            {/* Card 1 */}
                            <div className="flex-1 flex flex-col bg-white  overflow-hidden">
                                <div className="p-4 md:p-5 pb-0">
                                    <h3 className="text-xl font-bold text-gray-800 flex justify-center">Infrastructure</h3>
                                </div>
                                <div className="h-64 md:h-72 w-full overflow-hidden">
                                    <img
                                        src="BusinessOverview/IntellectualCapital/Page-67-img-2.webp"
                                        alt="Infrastructure"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="p-4 md:p-5 pt-3">
                                    <p className="text-gray-600">
                                        Smart racks, precision AC, 5G upgrade, enhanced security
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="flex-1 flex flex-col bg-white overflow-hidden">
                                <div className="p-4 md:p-5 pb-0">
                                    <h3 className="text-xl font-bold text-gray-800 flex justify-center">SAP</h3>
                                </div>
                                <div className="h-64 md:h-72 w-full overflow-hidden">
                                    <img
                                        src="BusinessOverview/IntellectualCapital/Page-67-img-3.webp"
                                        alt="SAP"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="p-4 md:p-5 pt-3">
                                    <p className="text-gray-600">
                                        Migration to SAP RISE, Ariba 2.0, AI-based Vendor Invoice Management (VIM)
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="flex-1 flex flex-col bg-white overflow-hidden">
                                <div className="p-4 md:p-5 pb-0">
                                    <h3 className="text-xl font-bold text-gray-800 flex justify-center">Cybersecurity</h3>
                                </div>
                                <div className="h-64 md:h-72 w-full overflow-hidden">
                                    <img
                                        src="BusinessOverview/IntellectualCapital/Page-67-img-4.webp"
                                        alt="Cybersecurity"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="p-4 md:p-5 pt-3">
                                    <p className="text-gray-600">
                                        Next-gen firewall, Data Leakage Prevention, SCADA upgrades, periodic
                                        audits, AI-based threat detection
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-[#9b92c6] text-2xl lg:text-3xl font-bold mb-4'>Customer development </h1>
                            <p className='text-lg lg:text-xl'>
                                BALCO continued to strengthen its customer-centric development approach by expanding its product portfolio, penetrating new
                                markets, and supporting key domestic and international clients with specialized aluminium solutions
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 w-full mt-10">
                                <div className="w-full md:w-1/2 h-[800px]">
                                    <img
                                        src="BusinessOverview/IntellectualCapital/Page-68-img.webp"
                                        alt="First Image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 h-[800px] overflow-hidden">
                                    <img
                                        src="BusinessOverview/IntellectualCapital/Page-69-img.webp"
                                        alt="Second Image"
                                        className="w-full h-full object-cover object-center" // crops from top
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-xl">
                                <ul className="space-y-3 list-disc pl-5">
                                    <li>Successfully completed the homologation of AlSi with M/s. Tata Steel, Khopoli.</li>
                                    <li>Produced Cu-doped primary foundry alloys for cylinder head applications for M/s. Craftsman Automation for the first time.</li>
                                    <li>Achieved first-time export of AlSi T-ingot from BALCO to Duferco, Africa (25 MT) and Abul Khair, Bangladesh (50 MT).</li>
                                    <li>Established T4 alloy rods in the domestic market, increasing sales volume to 13 KT in FY25 from 10.8 KT in FY25.</li>
                                    <li>Expanded PFA market penetration into the 4-wheeler segment by establishing quality benchmarks with SSWL, Maxion Wheels, Uno Minda, and Maruti.</li>
                                </ul>

                                <ul className="space-y-3 list-disc pl-5">
                                    <li>Successfully developed RP 5XXX series alloys for defense, maritime, and silo applications, achieving a higher Net Economic Price (NEP).</li>
                                    <li>Developed AA 1070 rolled products with enhanced structural integrity for nitric acid storage applications for M/s. John Galt International, delivering improved NEP.</li>
                                    <li>Created AA 3105 rolled products for fan blade applications for M/s. Orient Electric.</li>
                                    <li>Developed AA 3003 circles for cookware applications for M/s. Hawkins.</li>
                                    <li>Developed O-tempered rolled products for LED lamp cap applications for M/s. Sun LED.</li>
                                    <li>Introduced a new rolled product (RP) sheet with PVC film coating.</li>
                                    <li>Completed first-stage qualification with M/s. Ola Electric for the supply of battery bus bars.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancialCapital;