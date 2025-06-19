import React from 'react';
import { motion } from 'framer-motion';

const Social = () => {
    const stats = [
        {
            number: "200+",
            description: "Community Members Benefited (Health Camp)"
        },
        {
            number: "21",
            description: "Awareness Camps Conducted"
        },
        {
            number: "97",
            description: "Health Workers Trained"
        },
        {
            number: "90%",
            description: "TB Patient Recovery Rate"
        },
        {
            number: "11",
            description: "Community Awareness Sessions on TB"
        },
        {
            number: "32",
            description: "TB Patients Supported (Nutritional & Financial Aid)"
        },
        {
            number: "214",
            description: "Community Members Engaged (TB Sessions)"
        },
        {
            number: "140+",
            description: "Individuals Screened for Cancer"
        },
        {
            number: "33",
            description: "Suspected Cancer Cases Screened"
        },
        {
            number: "1,000+",
            description: "Pregnant & Lactating Mothers Benefited (Anaemia)"
        },
        {
            number: "1,000+",
            description: "Youth Sensitised (De-addiction & Health Education)"
        },
        {
            number: "5",
            description: "Individuals Referred for Advanced Cancer Consultation"
        }
    ];
    return (
        <div className="">
            <div className='bg-[#b382ba]'>
            <div className="bg-[url('BusinessOverview/Social/Page-82-Image.png')] bg-cover bg-no-repeat bg-center w-full min-h-screen">
            </div>
                {/* <div className="px-4 sm:px-6 lg:px-12 py-6 sm:py-10 flex items-center">
                    <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end gap-6 lg:gap-10 w-full">
                        <div className="w-full lg:max-w-md text-white space-y-4">
                            <img
                                src="BusinessOverview/Social/Financial-Circle.webp"
                                alt="Financial Icon"
                                className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] mx-auto lg:mx-0"
                            />
                            <p className="text-sm sm:text-base lg:text-xl font-bold leading-relaxed text-center lg:text-left">
                                We strive to maximise the efficiency of our financial resources to drive long-term returns on investments. Our focus remains on benchmarking financial performance, mitigating risks and creating greater value for stakeholders. This strategic approach has led to well-planned investments while ensuring prudent fund to support our growth aspirations.
                            </p>
                        </div>
                        <div className="w-full bg-white text-black lg:bg-transparent lg:text-white space-y-4 lg:space-y-6 p-4 lg:p-0 rounded-md lg:rounded-none">
                            <div>
                                <h3 className="text-lg lg:text-xl font-bold mb-2">Material Topic</h3>
                                <ul className="space-y-1 text-sm border-l-2 border-current pl-4">
                                    <li className='border-b border-current pb-1'>Long-term growth and profitability</li>
                                    <li className='border-b border-current pb-1'>Responsible advocacy</li>
                                    <li className='border-b border-current pb-1'>Macro economical and geopolitical context</li>
                                    <li className='border-b border-current pb-1'>Risk management and controls</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base lg:text-lg font-bold mb-2">SDGs covered</h3>
                                <div className="flex gap-4 justify-center lg:justify-start">
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
                                        src="/BusinessOverview/Social/8.webp"
                                        alt="SDG 8"
                                        className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]"
                                    />
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
                                        src="/BusinessOverview/Social/12.webp"
                                        alt="SDG 12"
                                        className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div> */}
            </div>

            {/* Financial Highlights Section */}
            <div className=' marginal px-4 sm:px-6 lg:px-12 py-6 lg:py-10'>
                <h1 className='text-[#a3238b] text-2xl sm:text-3xl font-extrabold'>
                    Our CSR footprint
                </h1>
                <div className="overflow-x-auto mt-4">
                    <img src="BusinessOverview/Social/Page-84-Image.png" alt="" className='min-w-[600px] sm:min-w-[900px] md:min-w-[1200px] lg:min-w-[1400px]' />
                </div>

                <div className="mt-6 lg:mt-8">
                    <h1 className='text-[#a3238b] text-xl sm:text-2xl font-bold'>Empowering communities</h1>
                    <p className='text-base sm:text-lg lg:text-xl mt-4 leading-relaxed'>
                        At BALCO, we believe that true progress is achieved when
                        communities grow alongside us. Our approach to community
                        engagement is rooted in empathy, innovation and sustainability,
                        fostering meaningful connections and positive change.
                        <br />
                        <br />
                        We prioritize understanding the unique needs and aspirations
                        of the people we serve, enabling us to design targeted
                        interventions across critical areas such as healthcare, sustainable
                        livelihoods, water and sanitation, women's empowerment,
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
                    <img src="BusinessOverview/Social/Page-84-Image-1.png" alt="" className='rounded-2xl lg:rounded-4xl w-full' />

                    <div className='flex flex-col sm:flex-row mt-6 lg:mt-10 gap-4 lg:gap-10'>
                        <div className="flex-1">
                            <img src="BusinessOverview/Social/85-img-2.png" alt="" className='rounded-2xl lg:rounded-3xl w-full' />
                        </div>
                        <div className="flex-1">
                            <img src="BusinessOverview/Social/Page-85-Image.png" alt="" className="w-full" />
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row mt-6 lg:mt-10 gap-4 lg:gap-10'>
                        <div className='flex-1 order-2 sm:order-2'>
                            <img src="BusinessOverview/Social/85-img-1.png" alt="" className='rounded-2xl lg:rounded-3xl w-full' />
                        </div>
                        <div className='flex-1 flex items-center order-1 sm:order-1'>
                            <img src="BusinessOverview/Social/Page-85-Image-1.png" alt="" className='rounded-2xl lg:rounded-3xl w-full' />
                        </div>
                    </div>

                    <h1 className='text-[#7d4786] text-xl sm:text-2xl font-bold mt-6 lg:mt-8'>CSR Policy</h1>
                    <p className='text-base sm:text-lg lg:text-xl mt-2'>
                        BALCO has a CSR Policy aligned
                        with section 135 of Companies Act,
                        2013 mandates, covering framework,
                        governance, monitoring, expenditure
                        and compliance responsibilities.
                    </p>
                </div>

                {/* Building Financial Resilience Section - Made Responsive */}
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-5 mt-6 lg:mt-8'>
                    {/* Image comes first on mobile, text second */}
                    <div className='flex-1 order-1 lg:order-2 flex items-center'>
                        <img src="BusinessOverview/Social/Page-85-Image-3.png" alt="" className="w-full h-auto" />
                    </div>
                    <div className='flex-2 order-2 lg:order-1'>
                        <h1 className='text-[#7d4786] text-xl sm:text-2xl font-bold mt-4 lg:mt-8'>Standard Operating Procedure (SOP)</h1>
                        <p className='text-base sm:text-lg lg:text-xl mt-2'>
                            At BALCO, we have well-drafted SOP
                            outlines protocols for community
                            profiling, stakeholder analysis, CSR
                            programme development, monitoring,
                            evaluation, reporting, communication,
                            implementation and governance. These
                            SOP outlines are signed by the CEO and
                            senior management.
                        </p>
                        <div className='mt-6 lg:mt-12'>
                            <h1 className='text-[#7d4786] text-xl sm:text-2xl font-bold'>CSR Committee</h1>
                            <p className='text-base sm:text-lg lg:text-xl mt-2'>
                                BALCO's CSR committee convenes
                                annually to review and recommend the
                                CSR plan and budget to the Board,
                                ensuring compliance with policies
                                and monitoring activity progress. The
                                Directors' Report certifies the CSR
                                expenditure.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-4 lg:gap-5 mt-6'>
                    <div className='flex-1'>
                        <img src="BusinessOverview/Social/Page-45-Img.webp" alt="" className="w-full h-auto" />
                    </div>
                </div>

                <div className='mt-6 lg:mt-8'>
                    <h1 className='text-[#7d4786] text-xl sm:text-2xl font-bold'>Compliance to audits</h1>
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
                                    className="w-4 h-4 mt-1 flex-shrink-0"
                                />
                                <span className="text-sm sm:text-base lg:text-lg text-gray-800">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-6 lg:mt-8">
                    <h1 className='text-[#a3238b] text-xl sm:text-2xl font-bold'>CSR Initiatives at BALCO</h1>
                    <p className='text-base sm:text-lg lg:text-xl mt-2 leading-relaxed'>
                        At BALCO, transparency lies at the heart of our corporate governance practices. We uphold this commitment through robust systems and processes that are regularly reviewed and refined in line with our CSR policy.
                        To ensure the effectiveness of our CSR efforts, we conduct third-party and impact assessments every three years. This comprehensive evaluation helps us chart the roadmap for future initiatives and make mid-course corrections when needed.In addition, we implement regular monitoring mechanisms to maintain accountability and drive continuous improvement in our CSR efforts.
                    </p>
                    <br />
                    <img src="BusinessOverview/Social/Page-86-Image.png" alt="" className='rounded-2xl lg:rounded-4xl w-full' />

                    <div className='flex flex-col lg:flex-row mt-6 lg:mt-8 gap-6'>
                        <div className='flex-1 lg:w-2/3'>
                            <h1 className='text-[#7d4786] text-xl sm:text-2xl font-bold'>Healthcare</h1>
                            <p className='text-base sm:text-lg lg:text-xl mt-2'>
                                We are dedicated to improving community health and well-being through a range of targeted healthcare initiatives. We hope to improve access to high-quality healthcare services, increase health awareness and enable people to make informed decisions about their well-being by emphasising both preventive and curative approaches.
                            </p>
                        </div>
                        <div className='flex-1 lg:w-1/3 flex flex-col justify-center items-center text-center'>
                            <p className='text-base sm:text-lg lg:text-xl mb-2'>
                                People Served
                            </p>
                            <h1 className='text-[#7d4786] text-4xl sm:text-5xl lg:text-7xl font-bold'>1,72,302</h1>
                        </div>
                    </div>

                    <div className='bg-[#7d4786] p-4 sm:p-6 lg:p-8 mt-5 rounded-lg'>
                        <h1 className='text-2xl sm:text-3xl lg:text-5xl text-white font-semibold leading-tight'>
                            BALCO MEDICAL CENTRE (BMC)- STATE OF THE ART CANCER CARE FACILITY
                        </h1>
                        <p className='text-sm sm:text-base lg:text-xl text-white mt-5 leading-relaxed'>
                            BALCO Medical Centre (BMC), a 170-bed tertiary oncology facility - a flagship initiative of the Vedanta Medical Research Foundation (VMRF). Aims to bring ultra-modern, multi-modality diagnostic and therapeutic facilities within easy reach of India's population at an affordable cost. It is in Naya Raipur, Chhattisgarh, and patients from different parts of the country visit the centre.
                            <br />
                            <br />
                            During the year, 13,261 people availed healthcare services from the hospital. BMC served in remote regions through Health screenings, camps, health talks and diagnostic services, going above and beyond. 2,690 surgeries, 15,538 chemotherapy sessions, 1,705 radiation therapies and 100+ Bone Marrow Transplants.
                            <br />
                            <br />
                            Launched HPV Vaccination Drive on Cervical Cancer Elimination Day of Action. Expanded the Bone Marrow Transplantation unit from 2 to 5 beds. More than 75 Screening Camps & Health Talks in remote areas of Central India through Mobile Cancer Detection Van.
                        </p>
                    </div>
                </div>

                <div className='mt-6 lg:mt-8'>
                    <h1 className='text-[#a3238b] text-xl sm:text-2xl font-bold'>Case Stories for Healthcare</h1>
                    <img src="BusinessOverview/Social/Page-87-Image.png" alt="" className='rounded-2xl lg:rounded-4xl mt-6 lg:mt-10 w-full' />
                    <img src="BusinessOverview/Social/Page-87-Image-1.png" alt="" className='rounded-2xl lg:rounded-4xl mt-6 lg:mt-10 w-full' />
                    <img src="BusinessOverview/Social/Page-87-Image-1.png" alt="" className='rounded-2xl lg:rounded-4xl mt-6 lg:mt-10 w-full' />

                    <div className='bg-[#7d4786] p-4 sm:p-6 lg:p-8 mt-5 rounded-lg'>
                        <h1 className='text-2xl sm:text-3xl lg:text-5xl text-white font-semibold leading-tight'>
                            AROGYA & MOBILE HEALTH VAN
                            (MHV)- MAKING HEALTHCARE SERVICES
                            AFFORDABLE AND ACCESSIBLE
                        </h1>
                        <p className='text-sm sm:text-base lg:text-xl text-white mt-5 leading-relaxed'>
                            BALCO's Arogya initiative is a comprehensive healthcare programme aimed at providing quality primary healthcare services both preventive & curative to rural communities. through Doorstep Mobile Health van services, Rural Health Posts, Maternal & Child Health with special focus on reduction of malnourishment & anemia, awareness campaigns on HIV, TB and De-addiction. Through Projects Arogya & Mobile Health Van, BALCO is committed to enhancing community well-being by ensuring healthcare services are both accessible and affordable.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 p-4 lg:p-6 mt-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 lg:p-6 rounded-lg shadow-sm flex flex-col justify-between min-h-[120px] lg:min-h-[140px]"
                        >
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#a3238b] mb-3">
                                {stat.number}
                            </div>
                            <div className="text-gray-700 text-sm sm:text-base lg:text-lg leading-5 font-medium">
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-5'>
                    <h1 className='text-[#a3238b] text-xl sm:text-2xl font-bold'>Case Stories for Arogya </h1>
                    <img src="BusinessOverview/Social/Page-89-Image.png" alt="" className='rounded-2xl lg:rounded-4xl mt-6 lg:mt-10 w-full' />
                </div>

                <div className='flex flex-col lg:flex-row mt-6 lg:mt-10 gap-4 lg:gap-5'>
                    <div className='bg-[#7d4786] w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 rounded-lg'>
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl text-white font-semibold'>
                            NAYI KIRAN
                        </h1>
                        <h2 className='text-xl sm:text-2xl lg:text-3xl text-white font-medium mt-6 lg:mt-10'>
                            (Menstrual Health Management- MHM)
                        </h2>
                        <p className='text-sm sm:text-base lg:text-xl text-white mt-5'>
                            The project focuses on Sensitising and informing
                            communities on Sustainable Menstrual Health
                            Management, product choice and practices to
                            ensure safe reproductive health and hygiene.
                            The programme also expanded its roots
                            across the district to widen the discussion and
                            understanding of the topic.
                        </p>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <img src="BusinessOverview/Social/Page-89-Image2.png" alt="" className="w-full h-auto" />
                    </div>
                </div>

                <div className="mx-auto p-4 lg:p-6 mt-6">
                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 lg:mb-8">
                        MHM Friendly school initiatives
                    </h2>

                    {/* First Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
                        {/* MHM friendly environment at schools */}
                        <div>
                            <div className="bg-[#7d4786] text-white px-4 lg:px-6 py-3 lg:py-4 rounded-full text-center font-semibold text-sm sm:text-base lg:text-lg mb-4">
                                MHM friendly environment at schools
                            </div>
                            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-6">
                                MHM Awareness sessions were held at 106 Govt middle, secondary & Higher secondary schools of Korba District (50% coverage at Sec & High Sec. Schools of Korba District) sensitizing 18,000+ Adolescents, on the subject matter. 70+ Teachers across district capacitated as 'MHM Sathis' for enabling MHM-friendly environment at schools driving awareness and change.
                            </p>
                        </div>

                        {/* Stitch My Own Pad Campaign */}
                        <div>
                            <div className="bg-[#7d4786] text-white px-4 lg:px-6 py-3 lg:py-4 rounded-full text-center font-semibold text-sm sm:text-base lg:text-lg mb-4">
                                Stitch My Own Pad Campaign
                            </div>
                            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-6">
                                Created awareness and trained over 3,900 women and adolescent girls from villages & schools, also involving Men in the campaign as Master Trainers for stitching reusable cloth pads, providing a sustainable menstrual health management alternative.
                            </p>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                        {/* Left Column - Promoting inclusivity with image */}
                        <div>
                            <div className="bg-[#7d4786] text-white px-4 lg:px-6 py-3 lg:py-4 rounded-full text-center font-semibold text-sm sm:text-base lg:text-lg mb-4">
                                Promoting inclusivity
                            </div>
                            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-6 mb-4">
                                Conducted MHM sessions and pad stitching workshops with 103 visually, speech, and hearing-impaired children and trainers at Divya Jyoti School, the only government school for disability in Korba.
                            </p>
                            <div className="overflow-hidden bg-[#ddd4d6] rounded-lg p-2">
                                <img
                                    src="BusinessOverview/Social/Page-90-Image.png"
                                    alt="MHM workshop with disabled children"
                                    className="w-full h-48 sm:h-56 lg:h-64 object-contain"
                                />
                            </div>
                        </div>

                        {/* Right Column - Sensitization Across Communities */}
                        <div>
                            <div className="bg-[#7d4786] text-white px-4 lg:px-6 py-3 lg:py-4 rounded-full text-center font-semibold text-sm sm:text-base lg:text-lg mb-4">
                                Sensitization Across Communities
                            </div>
                            <div className="text-gray-700 text-sm sm:text-base lg:text-lg leading-6 space-y-4">
                                <p>
                                    Over 5,000, adolescents sensitized on Menstrual Health & hygiene, Community Cleanliness & Sanitation, and Deaddiction awareness. To bring about a sustained behavioral change, trained 150 Frontline workers (Anganwadi workers & ASHA) across the district as Master trainers- Torchbearers cum leaders of change in the community. These frontline workers have further sensitized 6,000+ adolescent girls & women, fostering the change at grassroot levels.
                                </p>
                                <p>
                                    BALCO's MHM initiative reached people at the grassroot levels through group meetings, Anganwadi-led sessions, NGO collaborations, and self-help group interactions, celebrating MHM week.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 mt-6'>
                    <div className='w-full lg:w-1/2'>
                        <h1 className='text-[#7d4786] text-xl sm:text-2xl font-bold'>Healthcare</h1>
                        <p className='text-base sm:text-lg lg:text-xl mt-2'>
                            We are dedicated to improving community health and well-being through a range of targeted healthcare initiatives. We hope to improve access to high-quality healthcare services, increase health awareness and enable people to make informed decisions about their well-being by emphasising both preventive and curative approaches.
                        </p>
                        <div className='bg-[#7d4786] p-4 sm:p-6 lg:p-8 mt-5 rounded-lg'>
                            <h1 className='text-3xl sm:text-4xl lg:text-5xl text-white font-semibold'>
                                NAYI KIRAN
                            </h1>
                            <h2 className='text-xl sm:text-2xl lg:text-3xl text-white font-medium mt-6 lg:mt-10'>
                                (Menstrual Health Management- MHM)
                            </h2>
                            <p className='text-sm sm:text-base lg:text-xl text-white mt-5'>
                                The project focuses on Sensitising and informing
                                communities on Sustainable Menstrual Health
                                Management, product choice and practices to
                                ensure safe reproductive health and hygiene.
                                The programme also expanded its roots
                                across the district to widen the discussion and
                                understanding of the topic.
                            </p>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                        <div className="text-center lg:text-left">
                            <img src="BusinessOverview/Social/Page-90-Image-2.png" alt=""
                                className='w-20 h-20 sm:w-24 sm:h-24 lg:w-25 lg:h-25 mx-auto lg:mx-0'
                            />
                            <h1 className='text-[#7d4786] text-xl sm:text-2xl lg:text-3xl font-semibold mt-5'>Our Mission:</h1>
                            <h2 className='text-lg sm:text-xl lg:text-2xl font-semibold mt-5'>Empowering Women through self-help group (SHGs)</h2>
                            <h3 className='text-2xl sm:text-3xl lg:text-5xl text-[#7d4786] mt-5 leading-tight'>Our mission focuses on
                                empowering women through Self
                                Help Groups (SHGs), providing
                                them with the tools and
                                expertise for entrepreneur and
                                sustainable livelihoods.</h3>
                        </div>
                    </div>
                </div>

                <div className='mt-6 lg:mt-10'>
                    <img src="BusinessOverview/Social/Page-91-Image.png" alt="" className="w-full" />
                    <img src="BusinessOverview/Social/Page-91-Image-2.png" alt="" className='mt-6 lg:mt-10 w-full' />
                </div>

                <div className='mt-6 lg:mt-10'>
                    <h1 className='text-[#a3238b] text-xl sm:text-2xl font-bold'>Case Stories for Women empowerment </h1>
                    <img src="BusinessOverview/Social/Page-92-Image.png" alt="" className='rounded-2xl lg:rounded-4xl mt-6 lg:mt-10 w-full' />
                </div>

                <div className='flex flex-col lg:flex-row gap-5 mt-10'>
                <div className='w-full lg:w-1/2'>
                    <div className='bg-[#7d4786] p-6 lg:p-15'>
                        <h1 className='text-4xl lg:text-7xl text-white font-medium'>
                            MOR JAL <br />
                            MOR MAATI
                        </h1>
                        <p className='text-lg lg:text-2xl text-white mt-5'>
                            Our project drives water security and efficiency
                            through surface water management and
                            irrigation. We promote farm-based livelihoods,
                            livestock development, horticulture and crop
                            diversification, while promoting market-linked
                            enterprises under Farmer Producer Organisations
                            (FPOs) to ensure sustainable agricultural growth
                            and rural prosperity
                        </p>
                    </div>
                    <div className='flex flex-row gap-10 lg:gap-40 mt-10 justify-center lg:justify-start'>
                        <div className='text-center lg:text-left'>
                            <h1 className='text-[#a3238b] text-5xl lg:text-7xl font-bold'>7,368</h1>
                            <p className='text-lg lg:text-xl'>
                                Farmers benefitted
                            </p>
                        </div>
                        <div className='text-center lg:text-left'>
                            <h1 className='text-[#a3238b] text-5xl lg:text-7xl font-bold'>50%</h1>
                            <p className='text-lg lg:text-xl'>
                                Average increase in
                                Farmers income
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 mt-5 lg:mt-0'>
                    <img src="BusinessOverview/Social/Page-92-Image-1.png" alt="" className="w-full h-auto" />
                </div>
            </div>

            <div className='mt-10'>
                <img src="BusinessOverview/Social/Page-93-Image.png" alt="" className="w-full h-auto" />
            </div>

            <div className='mt-10'>
                <h1 className='text-[#a3238b] text-xl lg:text-2xl font-bold'>Case Stories for Mor Jaal Mor Maati</h1>
                <img src="BusinessOverview/Social/Page-94-Image.png" alt="" className='rounded-4xl mt-10 w-full h-auto' />
            </div>

            {/* Vedanta Skill School Section - Made Responsive */}
            <div className='flex flex-col lg:flex-row gap-5 mt-10'>
                <div className='bg-[#7d4786] w-full lg:w-1/2 p-6 lg:p-15'>
                    <h1 className='text-3xl lg:text-5xl text-white font-medium'>
                        VEDANTA
                        SKILL SCHOOL
                    </h1>
                    <p className='text-lg lg:text-xl text-white mt-5'>
                        Our project empowers rural youth, school dropouts
                        and the unemployed in Chhattisgarh through
                        vocational training at 3 skilling centres in Korba,
                        Kawardha and Surguja. We equip individuals with
                        job-ready skills and create employment opportunities,
                        driving economic growth and regional prosperity.
                    </p>
                </div>
                <div className='w-full lg:w-1/2 mt-5 lg:mt-0'>
                    <img src="BusinessOverview/Social/Page-94-Image-1.png" alt="" className="w-full h-auto" />
                </div>
            </div>

            {/* Skills Section Images - Made Responsive */}
            <div className='flex flex-col lg:flex-row gap-5 mt-5'>
                <div className='w-full lg:w-1/2'>
                    <img src="BusinessOverview/Social/Page-94-Image-2.png" alt="" className='mt-5 w-full h-auto' />
                    <img src="BusinessOverview/Social/Page-95-Image.png" alt="" className='mt-5 w-full h-auto' />
                    <div className='flex flex-row gap-10 lg:gap-40 mt-10 justify-center lg:justify-start'>
                        <div className='text-center lg:text-left'>
                            <h1 className='text-[#a3238b] text-4xl lg:text-5xl font-bold'>1,414</h1>
                            <p className='text-lg lg:text-xl'>
                                Youth Skilled
                            </p>
                        </div>
                        <div className='text-center lg:text-left'>
                            <h1 className='text-[#a3238b] text-4xl lg:text-5xl font-bold'>78%</h1>
                            <p className='text-lg lg:text-xl'>
                                Youth Placed
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 mt-5 lg:mt-0'>
                    <img src="BusinessOverview/Social/Page-94-Image-3.png" alt="" className='mt-5 w-full h-auto' />
                    <img src="BusinessOverview/Social/Page-95-Image-1.png" alt="" className='mt-5 w-full h-auto' />
                </div>
            </div>

            <div className='mt-10'>
                <img src="BusinessOverview/Social/Page-95-Image-2.png" alt="" className="w-full h-auto" />
                <img src="BusinessOverview/Social/Page-95-Image-3.png" alt="" className='mt-10 w-full h-auto' />
                <img src="BusinessOverview/Social/Page-96-Image.png" alt="" className='mt-10 w-full h-auto' />
                <img src="BusinessOverview/Social/Page-96-Image-2.png" alt="" className='mt-10 w-full h-auto' />
            </div>

            <div className='mt-10'>
                <h1 className='text-[#a3238b] text-xl lg:text-2xl font-bold'>Case Stories for Sustainable livelihood</h1>
                <img src="BusinessOverview/Social/Page-97-Image.png" alt="" className='rounded-4xl mt-10 w-full h-auto' />
            </div>

            {/* Education Section - Made Responsive */}
            <div>
                <h1 className='text-[#a3238b] text-xl lg:text-2xl font-bold mt-8'>Education</h1>
                <p className='text-lg lg:text-xl mt-2'>
                    Education is the foundation of an empowered society. Guided by India's vision of an educated and empowered society, we are
                    committed to ensuring equitable access to quality education. Through initiatives like Project Connect and Nand Ghar, we support
                    government schools and modern Anganwadis, creating nurturing learning environments that shape the children's future.
                </p>
                <h1 className='text-[#a3238b] text-4xl lg:text-5xl font-bold mt-5'>2,500+</h1>
                <p className='text-lg lg:text-xl mb-2'>
                    Students benefited
                </p>
                <div className='flex flex-col lg:flex-row gap-5 mt-10'>
                    <div className='bg-[#7d4786] w-full lg:w-1/2 p-6 lg:p-15 order-2 lg:order-2'>
                        <h1 className='text-3xl lg:text-5xl text-white font-medium'>
                            PROJECT
                            CONNECT
                        </h1>
                        <p className='text-lg lg:text-xl text-white mt-5'>
                            We believe in quality education for all and
                            strive to enhance learning opportunities
                            through Project Connect, improving the
                            educational environment in neighbouring
                            government schools and deliver growth to
                            educate children in India.
                        </p>
                    </div>
                    <div className='w-full lg:w-1/2 order-1 lg:order-1'>
                        <img src="BusinessOverview/Social/Page-97-Image-1.png" alt="" className="w-full h-auto" />
                    </div>
                </div>
            </div>

            {/* Enhancing Educational Support - Made Responsive */}
            <div className='flex flex-col lg:flex-row gap-5 mt-20'>
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-[#7d4786] text-xl lg:text-2xl font-bold'>Enhancing Educational Support</h1>
                    <p className='text-lg lg:text-xl mt-2'>
                        We are committed to academic excellence through regular
                        and remedial classes, benefiting over 1,470 students across
                        government schools and learning centres.
                        <br />
                        <br />
                        Career counselling guided <span className='font-bold'>1,150 students,</span> while
                        <span className='font-bold'> 54 dropouts</span> were re-enrolled with financial aid.
                        <br />
                        <br />
                        Launched Hands-On Science & Maths experiment Kits &
                        Study Material (21 Workbooks) & to help 1,200+ students refer
                        beyond textbooks and assess their own progress in learning.
                    </p>
                </div>
                <div className='w-full lg:w-1/2 mt-5 lg:mt-0'>
                    <img src="BusinessOverview/Social/Page-98-Image.png" alt="" className="w-full h-auto" />
                </div>
            </div>

            {/* Education Enhancement Interventions - Made Responsive */}
            <div className='flex flex-col lg:flex-row gap-5 mt-20'>
                <div className='w-full lg:w-1/2 order-2 lg:order-2'>
                    <h1 className='text-[#7d4786] text-xl lg:text-2xl font-bold'>Education Enhancement Interventions</h1>
                    <p className='text-lg lg:text-xl mt-2'>
                        Our early childhood stimulation sessions empowered parents to
                        create nurturing home environments that support their children's
                        cognitive, physical, and emotional development.
                        <br />
                        <br />
                        At Nand Ghars, playful learning methods such as number
                        games, crafts, and rhymes cultivated curiosity and built
                        foundational skills among young children.
                        <br />
                        <br />
                        Capacity-building workshops equipped Anganwadi workers with
                        innovative techniques, transforming learning spaces into vibrant
                        hubs that inspire creativity and support holistic child growth.
                    </p>
                </div>
                <div className='w-full lg:w-1/2 order-1 lg:order-1 mt-5 lg:mt-0'>
                    <img src="BusinessOverview/Social/Page-98-Image-1.png" alt="" className="w-full h-auto" />
                </div>
            </div>

            {/* Nand Ghar Section - Made Responsive */}
            <div className='flex flex-col lg:flex-row gap-5 mt-20'>
                <div className='w-full lg:w-1/2 order-2 lg:order-2'>
                    <div className='bg-[#7d4786] p-6 lg:p-15'>
                        <h1 className='text-3xl lg:text-5xl text-white font-medium'>
                            NAND GHAR
                        </h1>
                        <p className='text-lg lg:text-xl text-white mt-5'>
                            A Vedanta initiative with MoWCD, Nand Ghars in Korba
                            district empower children and mothers through BALA
                            paintings, digital learning and modern facilities. Enhancing
                            pre-school education, nutrition awareness and community
                            development, 33 Nand Ghars have improved attendance,
                            cognitive skills, and school readiness.
                        </p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 order-1 lg:order-1'>
                    <h1 className='text-[#7d4786] text-xl lg:text-2xl font-bold'>Ensuring Holistic Development</h1>
                    <ul className="space-y-5 lg:space-y-10 mt-4">
                        {[
                            "National Education Day marked the First ever Book Festival for government schools, (2,000+ books & 3,500+ participants) & held series of Reading Melas.",
                            "Mega Science & Maths exhibition to promote activity-based learning.",
                            "Winter camp for board preparation and a series of Career Counselling sessions to guide students towards making informed academic and career-oriented decisions.",
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <img
                                    src="home/pointer.webp"
                                    alt="pointer"
                                    className="w-4 h-4 mt-1 flex-shrink-0"
                                />
                                <span className="text-base lg:text-xl text-gray-800">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className='flex flex-row gap-10 lg:gap-40 mt-10 justify-center lg:justify-start'>
                        <div className='text-center lg:text-left'>
                            <h1 className='text-[#a3238b] text-4xl lg:text-5xl font-bold'>4,007</h1>
                            <p className='text-lg lg:text-xl'>
                                Children and mothers benefited
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Health Enhancement Interventions - Made Responsive */}
            <div className='flex flex-col lg:flex-row gap-5 mt-10'>
                <div className='w-full lg:w-1/2 order-2 lg:order-2'>
                    <h1 className='text-[#7d4786] text-xl lg:text-2xl font-bold'>Health Enhancement Interventions</h1>
                    <p className='text-lg lg:text-xl mt-5'>
                        Nand Ghars serve as vibrant community hubs, empowering
                        mothers and caregivers with knowledge on nutrition, health and
                        early childhood development.
                        <br />
                        <br />
                        Through initiatives like Positive Deviance Hearth sessions,
                        Take Home Rations training, and Suposhan Chaupals, we
                        promote better childcare practices and sustainable nutrition.
                        Awareness drives on breastfeeding, handwashing and seasonal
                        diseases ensure healthier families, while kitchen gardens and
                        environmental campaigns enable self-reliance and community
                        stewardship, creating lasting social impact.
                    </p>
                    <ul className="space-y-3 mt-4">
                        {[
                            "Up to 60% increase in participation was observed at Nandghars with enhanced engagement & learning activities.",
                            "54% children observed improvement in their health status.",
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <img
                                    src="home/pointer.webp"
                                    alt="pointer"
                                    className="w-4 h-4 mt-1 flex-shrink-0"
                                />
                                <span className="text-base lg:text-xl text-gray-800">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='w-full lg:w-1/2 order-1 lg:order-1 mt-5 lg:mt-0'>
                    <img src="BusinessOverview/Social/Page-98-Image-2.png" alt="" className="w-full h-auto" />
                </div>
            </div>

            <div className='mt-10'>
                <img src="BusinessOverview/Social/Page-99-Image.png" alt="" className="w-full h-auto" />
                <div className='mt-10'>
                    <h1 className='text-[#a3238b] text-xl lg:text-2xl font-bold'>Case Stories for Education and Skill Development Vedanta</h1>
                    <img src="BusinessOverview/Social/Page-99-Image-1.png" alt="" className='rounded-4xl mt-5 w-full h-auto' />
                </div>
            </div>
        </div>
    </div>
    );
};

export default Social;