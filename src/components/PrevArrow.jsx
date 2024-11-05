import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";

const PrevArrow = (props) => {
const { className, style, onClick } = props;
  return (
        <div
        className={` inline-block p-4 text-[40px] text-red-700 absolute right-5 top-1/2 -translate-y-1/2 z-10 ${className}`}
        // style={{ ...style, display: "block", background: "red" }} 
        onClick={onClick}
      ><FaArrowAltCircleRight /></div>
  )
}

export default PrevArrow