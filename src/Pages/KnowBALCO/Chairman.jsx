import React from 'react';

const Chairman = () => {
  return (
    <div className='bg-[#f7f3f4] py-10 px-4 sm:px-6 lg:px-20'>
      <div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl text-black font-medium pb-6 text-center sm:text-left'>
          Chairman’s Communique
        </h1>

        {/* Chairman Section */}
        <div className='bg-[#a27b5b] flex flex-col lg:flex-row rounded-2xl overflow-hidden'>
          {/* Image */}
          <div className='w-full lg:w-[40%] flex items-center justify-center max-h-[400px] lg:max-h-[70vh]'>
            <img
              src="public/Chairman/MR.-S-K-R.png"
              alt="chairman"
              className='w-full h-full object-contain lg:object-cover'
            />
          </div>

          {/* Text */}
          <div className='bg-[#e3d1c2] p-6 sm:p-8 lg:p-10 w-full lg:w-[60%] flex flex-col justify-center'>
            <p className='text-base sm:text-lg lg:text-2xl xl:text-3xl text-[#0064a8] font-bold leading-relaxed'>
              "We believe in enhancing long-term value creation through adaptation, innovation and sustainability.
              Our customer-centric approach, coupled with our expertise in understanding their evolving needs,
              enables us to maintain a competitive edge in this dynamic environment."
            </p>

            <div className='pt-6 text-right'>
              <h1 className='text-xl sm:text-2xl font-bold text-[#0064a8]'>S.K. Roongta</h1>
              <h2 className='text-sm sm:text-base font-medium text-black'>Chairman & Independent Director</h2>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className='space-y-12 mt-10 text-[#1a1a1a]'>
          {/* Section Block Template */}
          {[
            {
              heading: 'Dear Shareholders,',
              text: `The financial year 2024-25 presented both significant opportunities and notable challenges for the global and Indian Aluminium sector. While the global economy navigated a myriad of challenges, the Indian economy demonstrated remarkable resilience, achieving a growth rate of 6.5%. Driven by robust private consumption and a surge in rural demand, India maintained its position as one of the fastest-growing economies. With India’s ongoing economic expansion, BALCO has remained steadfast in its commitment to contributing to India’s growth story. As we present to you the annual report for FY25, we are eager to share our performance and articulate our strategic goals for the future.`
            },
            {
              heading: 'Built to excel',
              text: `With the Indian government focusing on infrastructure development through initiatives such as the National Infrastructure Pipeline, coupled with the ‘Make in India’ campaign, ‘Housing for All’ and the ‘Smart Cities Mission’, it has provided a substantial boost to the aluminium sector. Further, emphasis on renewable energy projects and promotion of electric mobility through schemes such as FAME, alongside rising FDI, have collectively propelled both demand and production capacity within the industry. Leveraging our decades of expertise, BALCO has consistently maintained agility in capitalising on emerging growth opportunities. We have optimised production efficiency, invested in cutting-edge technology and pursued diversification of our product portfolio. Our achievement of record-breaking potline amperage and increased throughput in the Wire Rod Mill are tangible reflections of our dedication to meet the evolving demands of the market.`
            },
            {
              heading: 'Mapping our growth through numbers',
              text: `The strength of an organisation is reflected in its balance sheets, and this year, our financial prudence has yielded exceptional results. We have significantly improved profitability and increased our margins by focusing on reducing conversion costs. Our revenue expanded by a commendable 20%, reaching H 15,808 crore for FY25. On the other hand, standalone EBITDA for the year reached H 4,534 crore with a margin of 29%. Profit After Tax (PAT) stood at H 2,969 crore, compared to H 1,385 crore in the previous year. These figures uphold our commitment to sound financial management and sustainable growth.`
            },
            {
              heading: 'Nurturing Our Growth Drivers',
              text: `The success of an organisation is written by its employees. At BALCO, the determination, hardwork and indomitable zeal of our result-driven team enable us to achieve new milestones each time. To ensure our employees feel safe in the workplace, we undertake robust initiatives to promote safety and well-being. We have partnered with a leading organisation to cultivate an interdependent safety culture within the organisation. Our “Suraksha Sankalp” programme continues to be instrumental in raising safety awareness and promoting best practices. To further enhance our safety management, we have digitised our Daily Safety Report and Uncontrolled Cases on Power BI, enabling better monitoring and record-keeping. We believe that a workplace should make their employees feel valued and connected. Through cultural integration events, appreciation days, new employee engagement initiatives and various other bonding activities, we foster joy and camaraderie, driving inclusive growth. Acknowledging the importance of physical and mental wellness of our employees, we provide comprehensive growth through our Occupational Health Centre, well-being webinars and sports initiatives.`
            },
            {
              heading: 'Embracing a sustainability-first approach',
              text: `At BALCO, sustainability transcends mere corporate responsibility, it represents a commitment to building a better tomorrow for the generations to come. We have implemented significant measures to reduce Scope 3 emissions by increasing the percentage of railmix in our alumina and coal logistics and transitioning a portion of our daily vehicle fleet to EVs. In our ongoing efforts to optimise ash utilisation, we have equipped 100% of our ash movement vehicles with GPS tracking devices, facilitating real-time monitoring through our Ash Control Tower. We are also harnessing the transformative power of technology to improve efficiency and streamline operations. This includes the development of applications for tracking truck turnaround time and material-wise coal unloading, as well as systems for boiler tube leakage prediction, parameter tracking, online hotspot monitoring and coal conveyor belt monitoring. As a responsible corporate citizen, we planted 51,523 saplings in the year, contributing to the cumulative total of over 8 lakhs planted since 2002. Further, our Corporate Social Responsibility initiatives, guided by our leadership, focused on creating long-term value for communities in key areas such as education, sustainable livelihoods, health, water and sanitation, women’s empowerment, environment and safety, sports and culture and community asset creation`
            },
            {
              heading: 'Driving long-term value creation',
              text: `We are committed to enhancing longterm value creation through adaption, innovation and sustainability. Our customer-centric approach, coupled with our expertise in understanding their evolving needs, enables us to maintain a competitive edge in this dynamic environment. Digitisation plays a vital role in efficient resource management, facilitated through real-time monitoring and optimised supply chain management. We also recognise significant opportunities in emerging sectors such as EVs and renewable energy. The increasing adoption of EVs necessitates lightweight and durable materials such as aluminium for vehicle bodies and battery casings. Similarly, the renewable energy sector, particularly solar energy, requires substantial quantities of aluminium for solar panel frames and supporting structures. We are actively exploring and developing tailored strategies to capitalise on the growing demand from these sectors.`
            },
            {
              heading: 'Building a better tomorrow',
              text: `True progress requires consistent hard work, strategic agility and an unswerving drive to surpass set expectations. For BALCO, FY25 has been a year of significant progress and robust performance. We have successfully navigated the evolving industry landscape, optimised operational efficiencies and advanced our sustainability agenda, all while contributing meaningfully to India’s development. I extend my heartfelt gratitude to my stakeholders for their unswerving support. We remain confident in our ability to capitalise on growing opportunities and create long-term value for all. Let us stride ahead with confidence, together.`
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
              "Our achievement of record-breaking potline amperage and increased throughput in the Wire Rod Mill are
              tangible reflections of our dedication to meet the evolving demands of the market."
            </h1>
          </div>

          {/* Final Sign-off */}
          <div className='text-right pt-6'>
            <p className='text-base sm:text-lg'>Regards,</p>
            <h1 className='text-lg sm:text-2xl font-bold text-[#0064a8]'>S.K. Roongta</h1>
            <h2 className='text-sm sm:text-base font-bold text-black'>Chairman & Independent Director</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chairman;
