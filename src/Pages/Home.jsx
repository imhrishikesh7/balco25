import React from 'react'
import About from '../Components/Home/About'
import Cover from '../Components/Home/Cover,'
import Values from '../Components/Home/Values'
import ReadingHeading from '../Components/ReadingHeading'
import Milestones from '../Components/Home/Milestones'

const Home = () => {
  return (
    <div className=''>
      <Cover />
      <About />
      <div className='my-10  bg-gradient-to-r from-[#2d82b2] to-[#70bf44]'>
        <div className='marginal'>
        <ReadingHeading text="Vision, Mision & Core Values" className="text-white text-center mt-10" />
        <Values />
        </div>
      </div>
        <Milestones />
    </div>
  )
}

export default Home