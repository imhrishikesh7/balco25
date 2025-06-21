import React from 'react'
import { motion } from "framer-motion";
import PointerMarkers from '../../Components/MapPointers';

const Border = () => {

    return (
        <div className='bg-[#f6f4f4]'>
            <div className="marginal">
                <div className=''>
                    <div className=''>
                        <div>
                            <h1 className='text-2xl sm:text-2xl lg:text-4xl font-medium pb-6 sm:pb-2'>
                                Meeting demand across borders
                            </h1>
                            <div className='w-[70%]'>
                                <h2 className='text-lg sm:text-xl text-[#a37b5b] mt-5'>
                                    Backed by innovation and powered by cutting-edge manufacturing and
                                    mining facilities in India, we are expanding our footprint and meet the
                                    rising demand for aluminium across borders. With a relentless drive and
                                    innovative spirit, we are poised to lead the industry.
                                </h2>
                                <h3 className='text-lg sm:text-xl text-[#0064a8] font-bold mt-5'>Global Presence</h3>
                            </div>
                            <img src="BorderDemand/Map.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Border