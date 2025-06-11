import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Backbone = () => {
  const [open, setOpen] = useState(null);

  const openSection = (section) => {
    setOpen(open === section ? null : section);
  };

  const data = [
    {
      img: '/StrentheningBackbone/Integrated.png',
      title: 'Integrated Aluminium industry',
      subtitle: 'in India.',
    },
    {
      title: '+300 kA',
      subtitle: 'to venture into',
      after: 'Prebake pots..',
    },
    {
      img: '/StrentheningBackbone/Captive.png',
      title: 'Captive Power Plant.',
      subtitle: 'to establish a',
    },
    {
      img: '/StrentheningBackbone/To-roll.png',
      title: 'to roll material',
      subtitle: 'for the aerospace sector in the country.',
    },
    {
      img: '/StrentheningBackbone/Alloy.png',
      title: 'alloy rods for conductors',
      subtitle: 'to produce',
      after: 'used in the power transmission industry..',
    },
    {
      img: '/StrentheningBackbone/Largest.png',
      title: 'the largest billet',
      subtitle: 'to produce',
      after: 'with a diameter of 800 mm and length of 6 meters.',
    },
    {
      img: '/StrentheningBackbone/Widest.png',
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

  return (
    <div className='marginal'>
      {/* Heading and intro */}
      <div className=''>
        <div className='mb-4'>
          <div>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl mb-2 md:mb-6'>
              Strengthening India’s industrial backbone
            </h1>
            <h2 className='text-lg sm:text-2xl text-[#a37b5b] mb-2 md:mb-6'>
              Founded in 1965 with the foundation stone laid by Mr. Jawaharlal Nehru, BALCO has played a vital role in shaping the Indian aluminium industry. Originally a public sector undertaking (PSU), BALCO’s journey took a significant turn in 2001, when the Government of India disinvested 51% of its shares to Sterlite Industries (India) Limited, now Vedanta Limited.
            </h2>
          </div>

          <div className='flex flex-col lg:flex-row'>
            <div className='border-b lg:border-b-0 lg:border-r text-lg border-black-500 pb-6 lg:pb-0 pr-0 lg:pr-16'>
              <p>
                BALCO is part of Vedanta’s Aluminium Business, a division of Vedanta Limited, which is India’s largest producer of aluminium, manufacturing more than half of India’s aluminium. BALCO is a leader in value-added aluminium products that find critical applications in core industries. Major operations are based in the town of Korba, Chhattisgarh, where a 1740 MW power generation facility supports both BALCO’s operations and contributes to Chhattisgarh state’s energy needs. The company is playing a crucial role in introducing aluminium as a potential alternative to other metals like steel in construction and copper in the power transmission industry. Its finishing lines are capable of producing high-quality ingots, wire rods, busbars, and rolled products, which are integral to several key sectors.
              </p>
            </div>
            <div className='flex flex-col justify-end pl-0 lg:pl-10 pt-6 lg:pt-0'>
              <h1 className='font-extrabold text-3xl sm:text-4xl text-[#0064a8] pb-2'>580 KTPA</h1>
              <h2 className='text-base sm:text-lg'>Production capacity</h2>
              <div className='h-0.5 bg-[#f9a556] w-[40%] sm:w-[20%]'></div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Triumphs */}
      <div className=''>
        <div>
          <h1 className='font-extrabold text-xl sm:text-2xl pl- text-[#005b94] '>Our Triumphs</h1>
        </div>

        <div className="text-container w-full flex flex-col justify-en items-start mb-">
          <h1 className="textstartgey " data-fill-text="FIRST">FIRST</h1>
        </div>

        <div className='flex flex-wrap'>
          {data.map((item, index) => (
            <div
              key={index}
              className='pl-5 pr-5 w-full sm:w-1/2 lg:w-1/4 pb-10 flex flex-col justify-end'
            >
              <HoverShakeImage
                src={item.img}
                className={`backbone${(index % 3) + 1}`}
                onClick={() => alert(`Clicked on: ${item.title}`)}
              />
              {item.subtitle && (
                <h2 className='text-xl sm:text-2xl lg:text-3xl font-medium'>{item.subtitle}</h2>
              )}
              <h1 className='text-xl sm:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-[#0080b6] to-[#70bc48] text-transparent bg-clip-text leading-tight w-fit'>
                {item.title}
              </h1>
              {item.after && (
                <h2 className='text-xl sm:text-2xl lg:text-3xl font-medium'>{item.after}</h2>
              )}
            </div>
          ))}
        </div>
      </div>

      <section className='bg-[#f7f3f4]'>
        <div className='marginal'>
          <div className='flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8' style={{ minHeight: '400px' }}>

            {/* Core Values */}
            <div className='flex-1 flex flex-col' style={{ minHeight: '400px' }}>
              <div
                className='cursor-pointer select-none'
                onClick={() => openSection('coreValues')}
              >
                <img
                  src="/StrentheningBackbone/Core.png"
                  alt="Core Values"
                  className='backbone1 mb-4'
                />
                <h1 className='text-3xl font-medium mb-4'>Core Values</h1>
              </div>

              <AnimatePresence>
                {open === 'coreValues' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className='overflow-y-auto'
                    style={{ maxHeight: '320px' }}
                  >
                    <div className='grid grid-cols-1 gap-4'>
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
                            className={`${bgColor} text-white text-xl font-bold px-2 py-1 inline-block mb-2 hover:bg-opacity-100 bg-opacity-70 transition duration-300 cursor-pointer`}
                          >
                            {title}:
                          </h1>
                          <p>{text}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Vision */}
            <div className='flex-1 flex flex-col' style={{ minHeight: '400px' }}>
              <div
                className='cursor-pointer select-none'
                onClick={() => openSection('vision')}
              >
                <img
                  src="/StrentheningBackbone/Vision.png"
                  alt="Vision"
                  className='backbone1 mb-4'
                />
                <h1 className='text-3xl font-medium mb-4'>Vision</h1>
              </div>
              <AnimatePresence>
                {open === 'vision' && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className='text-base overflow-y-auto'
                    style={{ maxHeight: '320px' }}
                  >
                    To be a world class Integrated Aluminium and Power producer, generating sustainable value for all stakeholders.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Mission */}
            <div className='flex-1 flex flex-col' style={{ minHeight: '400px' }}>
              <div
                className='cursor-pointer select-none'
                onClick={() => openSection('mission')}
              >
                <img
                  src="/StrentheningBackbone/Mission.png"
                  alt="Mission"
                  className='backbone1 mb-4'
                />
                <h1 className='text-3xl font-medium mb-4'>Mission</h1>
              </div>
              <AnimatePresence>
                {open === 'mission' && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-3 list-none pl-6 overflow-y-auto"
                    style={{ maxHeight: '320px' }}
                  >
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
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Backbone;
