import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";


const ReadMore = ({to, theme="[#282936]" }) => {
  return (
    <Link to={to} className={`mt-10 custom-learn-more-btn border border-${theme} text-${theme} rounded-3xl`}>
      <span className="button-text">Read More</span>
      <div className="circle"></div>
      <div className={`arrow text-${theme}`}><MdArrowOutward /></div>
    </Link>
  )
}

export default ReadMore