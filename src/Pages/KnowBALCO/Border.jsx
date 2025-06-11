import React from 'react'
import { motion } from "framer-motion";
import PointerMarkers from '../../Components/MapPointers';

const Border = () => {

    return (
        <div>
            <div className="h-[100vh] bg-[url('BorderDemand/Page-11-Image-1.png')] bg-cover bg-center">
                <div className='marginal'>
                    <div className='pb-20'>
                        <div>
                            <h1 className='text-2xl sm:text-2xl lg:text-4xl font-medium pb-6 sm:pb-2'>
                                Meeting demand across borders
                            </h1>
                            <div className='w-[75vw]'>
                                <h2 className='text-lg sm:text-xl text-[#a37b5b] pb-6 sm:pb-10'>
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