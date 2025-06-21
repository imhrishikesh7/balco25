import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Backbone = () => {
  const [selectedSection, setSelectedSection] = useState('coreValues');

  const data = [
    {
      img: '/StrentheningBackbone/Integrated.webp',
      title: 'Integrated Aluminium industry',
      subtitle: 'in India.',
    },
    {
      img: '/StrentheningBackbone/300.webp',
      title: '+300 kA',
      subtitle: 'to venture into',
      after: 'Prebake pots..',
    },
    {
      img: '/StrentheningBackbone/Captive.webp',
      title: 'Captive Power Plant.',
      subtitle: 'to establish a',
    },
    {
      img: '/StrentheningBackbone/To-roll.webp',
      title: 'to roll material',
      subtitle: 'for the aerospace sector in the country.',
    },
    {
      img: '/StrentheningBackbone/Alloy.webp',
      title: 'alloy rods for conductors',
      subtitle: 'to produce',
      after: 'used in the power transmission industry..',
    },
    {
      img: '/StrentheningBackbone/Largest.webp',
      title: 'the largest billet',
      subtitle: 'to produce',
      after: 'with a diameter of 800 mm and length of 6 meters.',
    },
    {
      img: '/StrentheningBackbone/Widest.webp',
      title: 'widest Hot Rolling Mill.',
      subtitle: 'to set up the',
    },
  ];

  const HoverShakeImage = ({ src, className, onClick }) => {
    if (!src) return null;
    return (
      <motion.img
        src={src}
        alt=""
        className={className + ' cursor-pointer'}
        whileHover={{
          rotate: [0, 5, -5, 5, -5, 0],
          transition: { duration: 0.5 },
        }}
        onClick={onClick}
      />
    );
  };

  const sectionData = {
    coreValues: {
      title: 'Core Values',
      image: '/StrentheningBackbone/Core.webp',
      content: (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {[
            {
              title: 'TRUST',
              bgColor: 'bg-[#f9a556]',
              text: 'We actively foster a culture of Mutual trust in our interactions with our stakeholders and encourage an open dialogue which ensures mutual respect.',
            },
            {
              title: 'INTEGRITY',
              bgColor: 'bg-[#f26f70]',
              text: 'We place utmost importance to engaging ethically and transparently with all our stakeholders, taking accountability of our actions to maintain the highest standards of professionalism and complying with international policies and procedures.',
            },
            {
              title: 'EXCELLENCE',
              bgColor: 'bg-[#0080b7]',
              text: 'Our primary focus is delivering value of the highest standard to our stakeholders. we are constantly Motivated on improving our costs and our quality of production in each of our business through a culture of best practice benchmarking.',
            },
            {
              title: 'ENTREPRENEURSHIP',
              bgColor: 'bg-[#a37b5b]',
              text: 'At Vedanta, our people are our most important assets. We actively encourage their development and support them in pursuing their goals.',
            },
            {
              title: 'CARE',
              bgColor: 'bg-[#b582ba]',
              text: 'As we continue to grow, we are committed to the triple bottom line of People, Planet and Prosperity, to create a sustainable future in a zero-harm environment for our communities.',
            },
            {
              title: 'INNOVATION',
              bgColor: 'bg-[#27bdbf]',
              text: 'We embrace a conductive environment for encouraging innovation that leads to a Zero harm environment and exemplifying optimal utilization of natural resources, improved efficiencies and recoveries of by-products.',
            },
            {
              title: 'RESPECT',
              bgColor: 'bg-[#3b7980]',
              text: 'We lay consistent emphasis on human rights, respect the principle of free, prior, informed consent, while our engagements with stakeholders give local communities the opportunity to voice their opinions and concerns.',
            },
          ].map(({ title, bgColor, text }, idx) => (
            <motion.div
              key={idx}
              className="p-4 rounded-md border border-gray-300 hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <h1
                className={`${bgColor} text-white text-lg font-bold px-3 py-2 inline-block mb-3 hover:bg-opacity-100 bg-opacity-80 transition duration-300 cursor-pointer rounded`}
              >
                {title}:
              </h1>
              <p className="text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      )
    },
    vision: {
      title: 'Vision',
      image: '/StrentheningBackbone/Vision.webp',
      content: (
        <p className='text-lg leading-relaxed'>
          To be a world class Integrated Aluminium and Power producer, generating sustainable value for all stakeholders.
        </p>
      )
    },
    mission: {
      title: 'Mission',
      image: '/StrentheningBackbone/Mission.webp',
      content: (
        <ul className="space-y-4 list-none">
          {[
            'To be amongst Top Decile in Global Cost Curve',
            'Operational Excellence',
            'Ensure Resource Security with Efficient Supply Chain Management',
            'Effective Collaboration with Stakeholders',
            'Unleash Employee Potential',
            'Build and Strengthen Brand Equity',
          ].map((item, index) => (
            <li
              key={index}
              className="relative pl-6 text-base sm:text-lg"
            >
              <span className="absolute left-0 top-2 w-3 h-3 bg-green-500 rounded-full"></span>
              {item}
            </li>
          ))}
        </ul>
      )
    }
  };

  return (
    <div className='marginal'>
      {/* Heading and intro */}
      <div className=''>
        <div className='mb-4'>
          <div>
            <h1 className='text-4xl sm:text-3xl lg:text-5xl mb-2 md:mb-6'>
              Strengthening India's industrial backbone
            </h1>
            <h2 className='text-lg sm:text-xl text-[#a37b5b] mb-2 md:mb-6'>
              Founded in 1965 with the foundation stone laid by Mr. Jawaharlal Nehru, BALCO has played a vital role in shaping the Indian aluminium industry. Originally a public sector undertaking (PSU), BALCO's journey took a significant turn in 2001, when the Government of India disinvested 51% of its shares to Sterlite Industries (India) Limited, now Vedanta Limited.
            </h2>
          </div>

          <div className='flex flex-col lg:flex-row'>
            <div className='border-b lg:border-b-0 lg:border-r text-md border-black-500 pb-6 lg:pb-0 pr-0 lg:pr-16'>
              <p>
                BALCO is part of Vedanta's Aluminium Business, a division of Vedanta Limited, which is India's largest producer of aluminium, manufacturing more than half of India's aluminium. BALCO is a leader in value-added aluminium products that find critical applications in core industries. Major operations are based in the town of Korba, Chhattisgarh, where a 1740 MW power generation facility supports both BALCO's operations and contributes to Chhattisgarh state's energy needs. The company is playing a crucial role in introducing aluminium as a potential alternative to other metals like steel in construction and copper in the power transmission industry. Its finishing lines are capable of producing high-quality ingots, wire rods, busbars, and rolled products, which are integral to several key sectors.
              </p>
            </div>
            <div className='flex flex-col justify-end pl-0 lg:pl-10 pt-6 lg:pt-0'>
              <h1 className='font-extrabold text-xl sm:text-2xl text-[#0064a8] pb-2'>580 KTPA</h1>
              <h2 className='text-base sm:text-lg'>Production capacity</h2>
              <div className='h-0.5 bg-[#f9a556] w-[40%] sm:w-[20%]'></div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Triumphs */}
      <div className=''>
        <div>
          <h1 className='font-extrabold text-xl sm:text-2xl text-[#005b94] mb-6'>Our Triumphs</h1>
        </div>

        <img src="StrentheningBackbone/640df81c-2323-454b-a6b3-0a3a4d5c372a.png" alt="" />
      </div>

      {/* Core Values, Vision, Mission Section */}
      <section className='bg-[#f7f3f4] py-12'>
        <div className='marginal'>

          {/* Top Navigation - Horizontal */}
          <div className='flex flex-row justify-center gap-8 mb-8'>
            {Object.entries(sectionData).map(([key, section]) => (
              <div key={key} className='flex flex-col items-center cursor-pointer' onClick={() => setSelectedSection(key)}>
                <img
                  src={section.image}
                  alt={section.title}
                  className={`backbone1 w-24 h-24 transition-all duration-300 ${selectedSection === key
                      ? 'transform scale-110'
                      : 'hover:scale-105'
                    }`}
                />
                <h2 className='text-xl font-medium mt-2 text-center'>{section.title}</h2>
              </div>
            ))}
          </div>

          {/* Content Box - Increased height for Core Values */}
          <div className='w-full'>
            <div className={`bg-white rounded-lg shadow-lg p-6 flex flex-col ${
              selectedSection === 'coreValues' ? 'h-auto' : 'h-[600px]'
            }`}>
              <h1 className='text-3xl font-bold mb-6 text-center text-[#005b94] flex-shrink-0'>
                {sectionData[selectedSection].title}
              </h1>

              <div className='flex-1 overflow-hidden'>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className='h-full overflow-y-auto pr-2 custom-scrollbar'
                    style={{
                      scrollbarWidth: 'thin',
                      scrollbarColor: '#d1d5db #f3f4f6'
                    }}
                  >
                    <div className='space-y-4'>
                      {sectionData[selectedSection].content}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Backbone;