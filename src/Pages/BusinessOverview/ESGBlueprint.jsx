import React from 'react'
import { motion } from 'framer-motion'

const ESGBlueprint = () => {
    return (
        <div className='bg-[#f7f3f4]'>
            <div className='marginal'>
                <div>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-light mb-10'>
                        Our ESG blueprint
                    </h1>

                    {/* Image 1: Left to Right */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                    >
                        <img src="BusinessOverview/ESGBlueprint/Page-36.png" alt="" className="w-full" />
                    </motion.div>

                    {/* Image 2: Right to Left */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                        className='my-20'
                    >
                        <img src="BusinessOverview/ESGBlueprint/Page-36-Img-1.png" alt="" className="w-full" />
                    </motion.div>

                    {/* Image 3: Left to Right */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                    >
                        <img src="BusinessOverview/ESGBlueprint/Page-36-Img-2.png" alt="" className="w-full" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ESGBlueprint
