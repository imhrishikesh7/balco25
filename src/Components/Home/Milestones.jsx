import React from 'react';
import Marquee from 'react-fast-marquee';
import ReadingHeading from '../ReadingHeading';

const milestones = [
    { year: '1965', title: 'Foundation', description: ['Pandit Nehru, then Prime Minister of India signing an agreement with the USSR, formally starting Korba Aluminium Project (former name of BALCO)'] },
    { year: '1973', title: 'First Product Launch', description: ['BALCO began operations with alumina productions'] },
    { year: '1974', title: 'Expansion', description: ['BALCO achieved a notable milestone by exporting 8,000 tons of alumina to the Soviet Union (now Russia)'] },
    { year: '1975', title: 'IPO', description: ['Metal production at BALCO commenced in four phases, each adding 25,000 tons and reaching a total of 100,000 tons'] },
    { year: '1976', title: 'IPO', description: ['Properzi rod production unit established followed by billet and slab facility', 'BALCO expanded its overseas operations with export of its first ingots (BharatAL) to Japan'] },
    { year: '2001', title: 'IPO', description: ['51% of BALCO disinvested to Sterlite Limited'] },
    { year: '2005', title: 'IPO', description: ['Smelter plant capacity tripled from 1 LTPA to 3.34 LTPA', 'Commissioning of Carbon Plant'] },
    { year: '2014', title: 'IPO', description: ['First alloy ingot production of 10 Kg'] },
    { year: '2016', title: 'IPO', description: ['Smelter plant capacity expanded', '3.34 LTPA to 5.7 LTPA'] },
    { year: '2022', title: 'IPO', description: ['Foundation stone for expansion from 5.7 LTPA to 1 MnTPA'] },
];

const Milestones = () => {
    return (
        <section className="relative w-full h-screen bg-gradient-to-r from-[#174364] to-[#26718a] overflow-hidden">
            <div className='mt-45 flex justify-center gap-10 items-center'>
                <div className='relative w-40'>
                    <img src="/home/nehru.webp" className='absolute bottom-1/2 transform translate-y-1/2' alt="" />
                </div>
                <ReadingHeading text="BALCO Chronicles" className="text-white text-center t-30 !text-4xl" />
                <div className='relative w-80'>
                    <img src="/home/factory.webp" className='absolute bottom-1/2 transform translate-y-1/2' alt="" />
                </div>
            </div>

            <div className="relative h-[70%] flex items-center overflow-hidden">
                <Marquee 
                    gradient={false} 
                    speed={30} 
                    loop={0}
                    pauseOnHover={true}
                    className="h-full flex items-center"
                >
                    {milestones.map((item, index) => (
                        <div
                            key={index}
                            className="relative border border-gray-300 rounded-3xl md:rounded-[40px]
                                p-8 w-[50vh] max-w-[500px] min-w-[380px] h-[40vh] mx-4
                                text-white bg-transparent shrink-0 flex flex-col justify-start items-start text-left"
                        >
                            {/* Connecting arrow */}
                            <div className="absolute right-0 top-1/2 w-8 transform translate-x-[100%] translate-y-[-50%] z-10">
                                <img src="/home/arrow-right.webp" alt="" />
                            </div>

                            <h3 className="text-5xl font-bold text-left text-[#74bf44] mb-4">{item.year}</h3>
                            {item.description.map((desc, descIndex) => (
                                <div key={descIndex} className="flex items-start gap-3 mb-3">
                                    <img src="/home/pointer.webp" alt="" className="w-4 mt-1 flex-shrink-0" />
                                    <p className="text-lg md:text-[2vh] text-white/70">
                                        {desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Milestones;