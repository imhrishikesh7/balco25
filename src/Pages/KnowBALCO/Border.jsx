import React from 'react'
import { motion } from "framer-motion";
import PointerMarkers from '../../Components/MapPointers';

const Border = () => {

    return (
        <div className='bg-[#f6f4f4]'>
            <div className="h-[100v] marginal  bg-[url('BorderDemand/Page-11-Image-1.webp')] bg-no-repeat bg-contain bg-center">
                <div className=''>
                    <div className='pb'>
                        <div>
                            <h1 className='text-2xl sm:text-2xl lg:text-4xl font-medium pb-6 sm:pb-2'>
                                Meeting demand across borders
                            </h1>
                            <div className='w-[70%]'>
                                <h2 className='text-lg sm:text-xl text-[#a37b5b] p'>
                                    Backed by innovation and powered by cutting-edge manufacturing and
                                    mining facilities in India, we are expanding our footprint and meet the
                                    rising demand for aluminium across borders. With a relentless drive and
                                    innovative spirit, we are poised to lead the industry.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-8 right-6 z-20">
                    
                </div>
                </div>
                <PointerMarkers />
            </div>
        </div>
    )
}

export default Border