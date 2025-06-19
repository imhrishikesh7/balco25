import React from 'react'
import About from '../Components/Home/About'
import Cover from '../Components/Home/Cover'
import Values from '../Components/Home/Values'
import ReadingHeading from '../Components/ReadingHeading'
import Milestones from '../Components/Home/Milestones'
import Message from '../Components/Home/Message'
import Products from '../Components/Home/Products'
import CapitalsSlider from '../Components/Home/CapitalsSlider'

const Home = () => {
  return (
    <div className=''>
      <Cover />
      <About />
      <div className='my-10  bg-gradient-to-tl from-[#09579f] via-[#09579f] to-[#66cc33]'>
        <div className='marginal'>
          <ReadingHeading text="Vision, Mision & Core Values" className="text-white !text-4xl text-center mt-10" />
          <Values />
        </div>
      </div>
      <Message />
      <Milestones />
      <Products />
      <CapitalsSlider/>
    </div>
  )
}

export default Home