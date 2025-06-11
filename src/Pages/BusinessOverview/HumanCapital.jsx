import React from 'react';
import { motion } from 'framer-motion';

const FinancialCapital = () => {
    return (
        <div>
            {/* Background Section */}
            <div className="bg-[url('BusinessOverview/HumanCapital/Page-70-img-1.png')] bg-cover bg-no-repeat bg-center w-full min-h-screen">
                <div className="marginal px-6 sm:px-12 py-10 flex items-center">
                    <div className="flex flex-col lg:flex-row justify-start items-end gap-6 lg:gap-10 w-full">

                        {/* Left Side - Icon + Description */}
                        <div className="max-w-md text-white space-y-4">
                            <img
                                src="BusinessOverview/HumanCapital/Human-Circle.png"
                                alt="Financial Icon"
                                className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]"
                            />
                            <p className="text-base sm:text-xl font-bold leading-relaxed">
                                Our human capital, which
                                represents the collective
                                talent, expertise and
                                innovation of our people,
                                is the key to BALCO’s
                                success. We strive to
                                provide a conducive work
                                environment, encourage
                                diversity, ensure continuous
                                learning opportunities
                                and enable a culture of
                                collaboration and respect,
                                ensuring our team is
                                well-equipped to meet
                                challenges and drive our
                                strategic goals.
                            </p>
                        </div>

                        {/* Right Side - Material Topics & SDGs */}
                        <div className="bg-white text-black lg:bg-transparent lg:text-white space-y-6 p-4 lg:p-0 rounded-md lg:rounded-none">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Material Topic</h3>
                                <ul className="space-y-1 text-sm border-l-1 border-current pl-4 w-fit">
                                    <li className='border-b-1 border-current'>Health, Safety and Well-being</li>
                                    <li className='border-b-1 border-current'>Labour Practices</li>
                                    <li className='border-b-1 border-current'>Talent Attraction and Retention</li>
                                    <li className='border-b-1 border-current'>Diversity, Equal Opportunity, and Inclusion</li>
                                    <li className='border-b-1 border-current'>Learning and Development</li>
                                    <li className='border-b-1 border-current'>Pandemic Response and Preparedness</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-2">SDGs covered</h3>

                                {/* Responsive Grid: 3 columns on mobile, auto layout on lg screens */}
                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:flex lg:gap-4">
                                    {[
                                        "BusinessOverview/HumanCapital/3.png",
                                        "BusinessOverview/HumanCapital/5.png",
                                        "/BusinessOverview/FinancialCapital/8.png",
                                        "BusinessOverview/HumanCapital/10.png",
                                        "BusinessOverview/HumanCapital/15.png",
                                        "BusinessOverview/HumanCapital/16.png",
                                    ].map((src, idx) => (
                                        <motion.img
                                            key={idx}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
                                            src={src}
                                            alt={`SDG ${idx}`}
                                            className="w-[60px] h-[60px] mx-auto my-2"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Financial Highlights Section */}
            <div className='marginal px-6 sm:px-12'>
                <div>
                    <h1 className='text-[#01a7e1] text-2xl lg:text-3xl font-bold mb-4 lg:mb-6'>Our people</h1>
                    <img src="BusinessOverview/HumanCapital/Page-72.png" alt="" />
                </div>
                <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-center py-8'>
                    <div className='w-full lg:w-2/5 order-2'>
                        <img
                            src="BusinessOverview/HumanCapital/Page-72-Image-2.png"
                            alt=""
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className='w-full lg:w-3/5 order-1'>
                        <h1 className='text-[#01a7e1] text-2xl lg:text-3xl font-bold mb-4 lg:mb-6'>Building a resilient and empowered team</h1>
                        <p className='text-lg lg:text-xl'>
                            We believe that a strong workforce is the foundation of a thriving organisation. Our People Strategy is designed to attract, engage,
                            develop and empower employees, ensuring that BALCO remains an employer of choice in the industry. Rooted in operational
                            excellence, innovation and inclusivity, our approach is aligned with both evolving business needs and employee aspirations.
                        </p>
                    </div>
                </div>

                <div className='mt-10 lg:mt-20'>
                    <div className='mt-10 px-4 lg:px-0'>
                        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
                            <div className='w-full lg:w-3/5 order-2'>
                                <h2 className='text-black text-xl lg:text-2xl font-bold mb-4 lg:mb-6'>Talent Hiring and Onboarding: Building a Future-Ready Workforce</h2>
                                <p className='text-lg lg:text-xl mb-6 lg:mb-8'>
                                    We are believe to strengthening our talent pipeline by maintaining relationships with leading academic institutions and enhancing
                                    our employer value proposition. Our early engagement with campuses allows us to recruit top-tier graduate and postgraduate
                                    trainees, equipping them with structured onboarding experiences and skill-building programmes.
                                </p>
                            </div>
                            <div className='w-full lg:w-2/5 order-1 flex justify-center items-start'>
                                <img
                                    src="BusinessOverview/HumanCapital/Page-73-Image.png"
                                    alt="Digital Transformation"
                                    className='w-full h-auto max-w-[600px] lg:max-w-none object-contain rounded-lg shadow-sm'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-20">
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div>
                                    <div className="rounded-2xl bg-[url('BusinessOverview/HumanCapital/Page-73-Image-1.png')] bg-cover bg-no-repeat bg-center w-full h-full">
                                        <p className='text-white text-2xl p-6 font-bold text-center'>Recognising the need for diversity
                                            and equal opportunities, we continue
                                            to drive inclusive hiring practices. In
                                            a landmark step, BALCO welcomed
                                            LGBTQ+ employee, reinforcing our
                                            determination to an equitable and
                                            diverse workplace. Additionally,
                                            our transgender inclusion initiative
                                            remains a core focus, ensuring
                                            sustained employment and career
                                            progression for all.</p>
                                    </div>
                                </div>
                                <div className="bg-[#e8f1fa] p-6 rounded-3xl border-1 border-[#01a7e1]">
                                    <p className='text-lg text-center'>Our Drishti programme is an interactive platform
                                        where new lateral hires present their KPIs, which are
                                        jointly agreed upon and signed by their managers.
                                        The programme encourages active participation,
                                        encouraging brainstorming sessions that drive
                                        innovative ideas, identify improvement areas and
                                        provide clarity on the path to success.</p>
                                </div>
                                <div className="bg-[#e8f1fa] p-6 rounded-3xl border-1 border-[#01a7e1]">
                                    <p className='text-lg text-center'>To enhance retention, we have expanded exclusive
                                        facilities for GETs and PGETs, offering dedicated
                                        hostels, specialised engagement programmes, and
                                        mentorship-driven career development plans. These
                                        efforts contribute to higher retention rates and a more
                                        engaged young workforce.</p>
                                </div>
                                <div className="bg-[#e8f1fa] p-6 rounded-3xl border-1 border-[#01a7e1]">
                                    <p className='text-lg text-center'>To strengthen our talent pipeline, we introduced advanced
                                        LinkedIn training to identify and attract high-potential
                                        candidates. We engage with recruitment partners to
                                        facilitate the hiring of global experts and specialists.
                                        Additionally, Day 0 hiring at premier institutes, financespecific recruitment and internship programmes with PPO
                                        opportunities ensure we secure top-tier talent early.</p>
                                </div>
                                <div className="bg-[#e8f1fa] p-6 rounded-3xl border-1 border-[#01a7e1]">
                                    <p className='text-lg text-center'>We onboarded over 250 freshers, each paired with a buddy
                                        mentor to ensure a seamless transition. This helped new
                                        joinees familiarise themselves with BALCO and Korba even
                                        before their joining date.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-center py-8'>
                        <div className='w-full lg:w-2/5 order-2'>
                            <img
                                src="BusinessOverview/HumanCapital/Page-74-Image.png"
                                alt=""
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>

                        <div className='w-full lg:w-3/5 order-1'>
                            <h1 className='text-[#01a7e1] text-2xl lg:text-3xl font-bold mb-4 lg:mb-6'>Enabling a culture of learning</h1>
                            <p className='text-lg lg:text-xl'>
                                We believe that learning is the spark that fuels innovation and drives success. To enable a culture of perpetual learning, we have instituted a
                                range of training and development programmes for our people. Our Learning and Development (L&D) framework is more than just training —
                                it is a journey of transformation. With programmes designed to sharpen functional, technical, safety, statutory and behavioural competencies,
                                we are shaping leaders who are ready to take on the future with confidence and purpose.
                                BALCO’s Learning and Development (L&D) framework is designed to provide employees with the skills and knowledge needed to excel,
                                adapt and thrive. Our approach is categorised into four key areas.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full mt-10">
                        {/* Technical Training */}
                        <div className="flex-1 min-w-0">
                            <div className='bg-[#436cb4] w-full rounded-3xl p-3'>
                                <h1 className='text-xl md:text-2xl text-white font-semibold text-center'>Technical <br /> training</h1>
                            </div>
                            <p className='p-3 text-base md:text-lg text-center rounded-b-lg'>
                                At BALCO, growth is not just an opportunity — it is a mindset.
                                Our training programmes are thoughtfully designed to
                                keep employees updated on the latest technologies and
                                methodologies. On the technical and operational front,
                                we offer advanced training in supply chain management
                                incorporating Six Sigma principles, along with essential courses
                                in operational maintenance, rolling and casting technologies
                            </p>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className='bg-[#436cb4] w-full rounded-3xl p-3'>
                                <h1 className='text-xl md:text-2xl text-white font-semibold text-center'>Safety and compliance training</h1>
                            </div>
                            <p className='p-3 text-base md:text-lg text-center rounded-b-lg'>
                                As part of our commitment to safety and sustainability, we
                                provide comprehensive training programmes aligned with
                                our Zero Harm vision and environmental protection goals.
                            </p>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className='bg-[#436cb4] w-full rounded-3xl p-3'>
                                <h1 className='text-xl md:text-2xl text-white font-semibold text-center'>Behavioural and leadership training</h1>
                            </div>
                            <p className='p-3 text-base md:text-lg text-center rounded-b-lg'>
                                We prioritise the emotional well-being of our workforce by
                                offering targeted training programmes. These include time,
                                conflict and anxiety management, along with our Vedanta
                                Core Competency programme and the C.A.P.S. initiative,
                                which focuses on Communication, Assertiveness and
                                Presentation Skills
                            </p>
                        </div>

                        {/* Human Rights Training */}
                        <div className="flex-1 min-w-0">
                            <div className='bg-[#436cb4] w-full rounded-3xl p-3'>
                                <h1 className='text-xl md:text-2xl text-white font-semibold text-center'>Human rights and ethics training</h1>
                            </div>
                            <p className='p-3 text-base md:text-lg text-center rounded-b-lg'>
                                To uphold our ethical standards and ensure compliance,
                                we conduct mandatory trainings throughout the year
                                covering topics such as the Code of Conduct, Prevention
                                of Sexual Harassment (POSH), Human Rights and Cyber
                                Security for all employees.
                            </p>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <p className='text-base md:text-xl'>In FY 2025, we expanded our digital learning ecosystem with self-paced certification programmes, allowing employees to upskill
                            at their convenience. But it is not just about skills — it is about values too. Our focus on ESG-related training nurtures a culture of
                            sustainability, inclusivity, and social responsibility. By raising awareness around diversity and unconscious bias, we are building a
                            workplace that is both high-performing and socially responsible</p>
                    </div>
                    <div className='mt-10'>
                        <div className='bg-[#f4f9fd] w-full rounded-4xl'>
                            <h1 className='text-xl font-bold text-center p-3'>Learning Opportunities through digital platforms.</h1>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full mt-10">
                            {/* Technical Training */}
                            <div className="flex-1 min-w-0">
                                <div className='w-full rounded-3xl p-3'>
                                    <h1 className='text-xl md:text-2xl text-[#01a7e1] font-semibold text-center'>E-LEARNING MODULES</h1>
                                </div>
                                <div className="flex flex-col items-center space-y-6 py-4">
                                    <div className="w-fit text-center border-b pb-2">
                                        <h3 className="text-xl font-light">40 modules</h3>
                                    </div>
                                    <div className="w-fit text-center border-b pb-2">
                                        <h3 className="text-xl font-light">Behavioral skills</h3>
                                    </div>
                                    <div className="w-fit text-center border-b pb-2">
                                        <h3 className="text-xl font-light">Technical knowledge</h3>
                                    </div>
                                    <div className="w-fit text-center border-b pb-2">
                                        <h3 className="text-xl font-light">Safety and quality</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className='w-full rounded-3xl p-3'>
                                    <h1 className='text-xl md:text-2xl text-[#436cb4] font-semibold text-center'>GAMIFICATION </h1>
                                </div>
                                <div className="flex flex-col items-center space-y-6 py-4">
                                    <div className="w-fit text-center border-b pb-2">
                                        <h3 className="text-xl font-light">Game like elements</h3>
                                    </div>
                                    <div className="w-fit text-center border-b pb-2">
                                        <h3 className="text-xl font-light">Interactive </h3>
                                    </div>
                                    <div className="w-fit text-center border-b pb-2">
                                        <h3 className="text-xl font-light">Enjoyable</h3>
                                    </div>
                                    <div className="w-fit text-center border-b pb-2">
                                        <h3 className="text-xl font-light">Critical cybersecurity knowledge</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className='w-full rounded-3xl p-3'>
                                    <h1 className='text-xl md:text-2xl text-[#1a3866] font-semibold text-center'>MENTOR-MENTEE MAPPING</h1>
                                </div>
                                <div className="flex flex-col items-center space-y-6 py-4">
                                    <div className="w-fit text-center border-b pb-2">
                                        <h3 className="text-xl font-light">Organised </h3>
                                    </div>
                                    <div className="w-fit text-center border-b pb-2">
                                        <h3 className="text-xl font-light">Transparent</h3>
                                    </div>
                                    <div className="w-fit text-center border-b pb-2">
                                        <h3 className="text-xl font-light">Efficient</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6 w-full mt-10 border-b pb-10">
                        {/* Text Content - 2/5 width */}
                        <div className="w-full lg:w-2/5">
                            <div className='bg-[#436cb4] w-full rounded-3xl p-3'>
                                <h1 className='text-xl md:text-2xl text-white font-semibold text-center'>WILP (Work Integrated Learning programme)</h1>
                            </div>
                            <p className='p-4 text-base md:text-lg'>
                                BALCO has introduced Work Integrated Learning
                                Programme (WILP), offering employees the
                                opportunity to enhance professional skills as a part
                                of their individual development plans. This initiative
                                can be further utilised for succession planning and
                                job rotation. The programme is closely aligned with
                                work profiles, leading to enhancement of academic
                                qualification and professional development as it is
                                industry focused with customized course support
                                for broader exposure.
                            </p>
                        </div>
                        <div className="w-full lg:w-3/5 flex items-center">
                            <img
                                src="/BusinessOverview/HumanCapital/Page-75-Image.png"
                                alt="Work Integrated Learning Programme"
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <div className='mt-10'>
                        <h1 className='text-[#01a7e1] text-2xl lg:text-3xl font-bold mb-4 lg:mb-6'>Driving a culture of collaboration and community</h1>
                        <p className='text-lg lg:text-xl'>
                            Employee engagement remains a strategic pillar of our HR philosophy. Our annual engagement calendar includes a diverse range of
                            initiatives, from sports tournaments to cultural celebrations, maintaining a deep sense of community across our workforce.
                        </p>
                        <h2 className='text-[#000000] text-xl lg:text-2xl font-bold mt-6'>In FY 2025, our engagement efforts saw record participation.</h2>
                        <div className="flex flex-col md:flex-row gap-8 md:gap-10 w-full">
                            <div className="flex-1 flex flex-col bg-white  overflow-hidden">
                                <div className="p-4 md:p-5 pb-0">
                                </div>
                                <div className="h-64 md:h-72 w-full overflow-hidden">
                                    <img
                                        src="BusinessOverview/HumanCapital/Page-75-Image-1.png"
                                        alt="Infrastructure"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="p-4 md:p-5 pt-3">
                                    <p className="text-xl">
                                        <span className='font-bold'>8,000+ employees</span> and
                                        business partners joined our
                                        Republic Day celebrations.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="flex-1 flex flex-col bg-white overflow-hidden">
                                <div className="p-4 md:p-5 pb-0">
                                </div>
                                <div className="h-64 md:h-72 w-full overflow-hidden">
                                    <img
                                        src="BusinessOverview/HumanCapital/Page-75-Image-2.png"
                                        alt="SAP"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="p-4 md:p-5 pt-3">
                                    <p className="text-xl">
                                        <span className='font-bold'>Festival events, </span> including Holi,
                                        Dussehra and Diwali witnessed
                                        large-scale involvement.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="flex-1 flex flex-col bg-white overflow-hidden">
                                <div className="p-4 md:p-5 pb-0">
                                </div>
                                <div className="h-64 md:h-72 w-full overflow-hidden">
                                    <img
                                        src="BusinessOverview/HumanCapital/Page-75-Image-3.png"
                                        alt="Cybersecurity"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="p-4 md:p-5 pt-3">
                                    <p className="text-xl">
                                        <span className='font-bold'>Our Vedanta Half Marathon
                                            (VDHM) </span> continued its legacy,
                                        securing the top position across the
                                        group for the third consecutive year.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-lg lg:text-xl'>
                                To further enhance collaboration, we have integrated <span className='font-bold'>women leaders into decision-making roles</span> across various business functions,
                                ensuring diverse perspectives in strategic planning.
                            </p>
                        </div>

                        {/* Mobile scrollable image row */}
                        <div className="mt-10 block lg:hidden overflow-x-auto">
                            <div className="flex gap-4 w-max">
                                <img src="BusinessOverview/HumanCapital/Page-76-Image1.png" alt="" className="w-64 flex-shrink-0" />
                                <img src="BusinessOverview/HumanCapital/Page-76-Image2.png" alt="" className="w-64 flex-shrink-0" />
                                <img src="BusinessOverview/HumanCapital/Page-76-Image3.png" alt="" className="w-64 flex-shrink-0" />
                            </div>
                        </div>

                        {/* Desktop static stacked images */}
                        <div className="hidden lg:block mt-10">
                            <img src="BusinessOverview/HumanCapital/Page-76-Image1.png" alt="" className="mb-10" />
                            <img src="BusinessOverview/HumanCapital/Page-76-Image2.png" alt="" className="mb-10" />
                            <img src="BusinessOverview/HumanCapital/Page-76-Image3.png" alt="" className="pb-10 border-b" />
                        </div>

                        {/* Employee Well Being */}
                        <div className='mt-10'>
                            <h1 className='text-[#01a7e1] text-2xl lg:text-3xl font-bold mb-4 lg:mb-6'>Employee well being</h1>

                            {/* Mobile scrollable */}
                            <div className='block lg:hidden overflow-x-auto'>
                                <div className="w-max">
                                    <img src="BusinessOverview/HumanCapital/Page-76-Image4.png" alt="" className="w-80" />
                                </div>
                            </div>

                            {/* Desktop static */}
                            <div className='hidden lg:block'>
                                <img src="BusinessOverview/HumanCapital/Page-76-Image4.png" alt="" />
                            </div>
                        </div>
                        <div className='mt-10 border-b pb-10'>
                            <h2 className='text-black text-xl lg:text-2xl font-bold mb-4 lg:mb-6'>
                                Initiatives for employee personal and professional challenges
                            </h2>
                            <div className='block lg:hidden overflow-x-auto'>
                                <div className="w-max">
                                    <img src="BusinessOverview/HumanCapital/Page-78-Image.png" alt="" className="w-96" />
                                </div>
                            </div>
                            <div className='hidden lg:block'>
                                <img src="BusinessOverview/HumanCapital/Page-78-Image.png" alt="" />
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-start py-8'>
                            <div className='w-full lg:w-2/5 order-2 flex justify-center'>
                                <img
                                    src="BusinessOverview/HumanCapital/Page-78-Image (2).png"
                                    alt=""
                                    className="w-[20vw] rounded-lg shadow-md"
                                />
                            </div>
                            <div className='w-full lg:w-3/5 order-1'>
                                <h1 className='text-[#01a7e1] text-2xl lg:text-3xl font-bold mb-4 lg:mb-6'>Prioritising Employee Well-being</h1>
                                <p className='text-lg lg:text-xl'>
                                    We believe that a thriving workforce is built on holistic wellbeing. To support this, we have introduced a range of initiatives
                                    designed to nurture the physical, mental and social health of our
                                    employees. These include mental health programmes such as
                                    yoga sessions, personal hygiene and cervical cancer awareness
                                    campaigns, and stress management workshops to promote a
                                    healthy work-life balance.
                                    To further enhance physical well-being, we organise fitness
                                    programmes and team sporting events, including football
                                    championships, marathons and Zumba sessions. These initiatives
                                    not only encourage active living but also encourage camaraderie
                                    and teamwork, building a vibrant and resilient workforce.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-black text-xl lg:text-2xl font-bold mb-4 lg:mb-6'>
                                Key initiatives in FY 2025 included:
                            </h2>
                            <div>
                                <img src="BusinessOverview/HumanCapital/Page-79-Image.png" alt="" className='mb-10' />
                                <img src="BusinessOverview/HumanCapital/Page-79-Image-2.png" alt="" className='mb-10' />
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-center py-8'>
                            <div className='w-full lg:w-2/5 order-2'>
                                <img
                                    src="BusinessOverview/HumanCapital/Page-80-Image.png"
                                    alt=""
                                    className="w-full h-auto rounded-lg mt-10"
                                />
                            </div>

                            <div className='w-full lg:w-3/5 order-1'>
                                <h1 className='text-[#01a7e1] text-2xl lg:text-3xl font-bold mb-4 lg:mb-6'>Ensuring a diverse and inclusive workplace</h1>
                                <p className='text-lg lg:text-xl'>
                                    At BALCO, we recognise that diversity and inclusion are key
                                    drivers of innovation and progress. By embracing a wide range
                                    of perspectives, experiences and skills, we enhance our ability
                                    to navigate the ever-evolving business landscape. Diversity
                                    is reflected across various dimensions, including gender,
                                    educational background, expertise, geographic origin, age,
                                    disability, family responsibilities, marital status, religion, and
                                    socioeconomic background. Our efforts to enable a diverse and
                                    inclusive workforce is reinforced through ongoing initiatives,
                                    which are highlighted in our Integrated Report for FY 2025.
                                </p>
                                <div className='bg-[#005b94] rounded-4xl mt-10'>
                                    <h1 className='text-white text-2xl p-10 font-[600]'>At BALCO, our diverse and
                                        inclusive workforce is not just a
                                        strength—it’s the foundation of our
                                        innovation and growth</h1>
                                </div>
                                <h1 className='text-[#01a7e1] text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 mt-10'>Ensuring a diverse and inclusive workplace</h1>
                                <ol className='text-xl'>
                                    <li className='mb-2'>1. Inclusive recruitment (seeking qualified female candidates).</li>
                                    <li className='mb-2'>2. Policy framework (Implementing supportive policies like
                                        flexible working arrangements and mentorship programmes).</li>
                                    <li className='mb-2'>3. Training and development (Offering leadership training
                                        for women).</li>
                                    <li className='mb-2'>4. Diversity Goals (Setting clear diversity targets and regularly
                                        reviewing progress to ensure accountability).</li>
                                </ol>
                            </div>
                        </div>
                        <div>
                            <img src="BusinessOverview/HumanCapital/Page-80-Image-2.png" alt="" />
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-black text-xl lg:text-2xl font-bold mb-4 lg:mb-6'>
                                Transgender hiring
                            </h2>
                            <p className='text-lg lg:text-xl mb-6 lg:mb-8'>
                                We are one of the few manufacturing companies in India that welcomes members of the LGBTQIA+ community. Our commitment to
                                encouraging workplace diversity and inclusion drives initiatives that create opportunities and empower the transgender community.
                                BALCO marked ‘Pride Month’ with a series of impactful initiatives, reinforcing its commitment to diversity and inclusion. A firstof-its-kind LGBTQ+ awareness workshop was conducted at the plant, fostering a culture of understanding and acceptance. The
                                celebrations extended beyond the workplace, reaching over 5 lakh people across the state through various outreach programmes.
                                Community sensitisation efforts spanned 45 villages, promoting inclusivity at the grassroots level. Engaging activities such as a pride
                                march, slogan and drawing competitions encouraged participation and expression. To ensure top-down inclusivity, the leadership
                                supported the initiative through video messages advocating for a more diverse and welcoming workplace. Through these efforts,
                                BALCO continues to champion a culture of equality, empowerment and belonging.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-start py-8'>
                        <div className='w-full lg:w-2/5 order-2'>
                            <img
                                src="BusinessOverview/HumanCapital/Page-81-Image-1.png"
                                alt=""
                                className="w-full h-auto rounded-lg "
                            />
                        </div>

                        <div className='w-full lg:w-3/5 order-1 flex-row items-start'>
                            <h2 className='text-black text-xl lg:text-2xl font-bold mb-4 lg:mb-6'>
                                Gender Reaffirmation policy
                            </h2>
                            <p className='text-lg lg:text-xl'>
                                We have introduced a Gender Reaffirmation Policy, offering
                                a unique initiative to support transgender employees.
                                BALCO offers a 30-day leave post-surgery and provides
                                medical reimbursement of up to H2 lakh for successful gender
                                reaffirmation surgery
                            </p>
                            <h2 className='text-black text-xl lg:text-2xl font-bold mb-4 lg:mb-6 mt-10'>
                                Gender neutral infrastructure set-up
                            </h2>
                            <p className='text-lg lg:text-xl'>
                                BALCO has upgraded its infrastructure to create a welcoming
                                and inclusive environment for new hires. As part of this initiative,
                                gender-neutral washrooms have been introduced, ensuring a
                                more supportive workplace for transgender employees.
                            </p>
                            <div className='flex flex-col justify-center'>
                                <h2 className='text-black text-xl lg:text-2xl font-bold mb-4 lg:mb-6 mt-10'>
                                    Certifications
                                </h2>
                                <img
                                    src="BusinessOverview/HumanCapital/Page-81-Image-.png"
                                    alt=""
                                    className='w-[35vw] mx-auto'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-start py-8'>
                        <div className='w-full lg:w-2/5 order-2 flex justify-center'>
                            <img
                                src="BusinessOverview/HumanCapital/Page-81-Image-2.png"
                                alt=""
                                className="w-[30vw]"
                            />
                        </div>
                        <div className='w-full lg:w-3/5 order-1'>
                            <h1 className='text-[#01a7e1] text-2xl lg:text-3xl font-bold mb-4 lg:mb-6'>Workforce enhancement</h1>
                            <p className='text-lg lg:text-xl'>
                                BALCO’s determination to <span className='font-bold'>continuous workforce
                                enhancement</span>is reinforced through strategic HR interventions.
                                <br />
                                Through these initiatives, we continue to redefine workplace
                                excellence, ensuring that BALCO remains at the forefront
                                of <span className='font-bold'>people-centric innovation, operational efficiency and
                                sustainable growth.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancialCapital;