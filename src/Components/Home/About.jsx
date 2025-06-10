import React from 'react'
import StrokeFillHeading from '../StrokeFillHeading'
import ReadingHeading from '../ReadingHeading'
import ReadingText from '../Readingtext'
import Values from './Values'

const About = () => {
    return (
        <div className='marginal'>
            <ReadingHeading text="Empowering Progress" className="text-[#3c9b8a] mt-10" />
            <ReadingText text="while Shaping the Future" className="text-black font-[500] mt-6 text-3xl" />
            <div>
                <ReadingText text="As India marches confidently towards becoming a global superpower by 2050, infrastructure development is poised to play a significant role. We, at BALCO, understand the key role that aluminium plays in powering
the nation’s industrial evolution. Capitalising on this opportunity, we are focused on delivering value through innovative manufacturing technologies and solutions." className="text-[#2263a7] font-[500] mt-6 text-2xl w-[60%]" />
            </div>
        </div>
    )
}

export default About