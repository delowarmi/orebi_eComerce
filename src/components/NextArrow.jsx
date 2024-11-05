import React from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";

const NextArrow = (props) => {
const { className, style, onClick } = props;
        return (
              <div
              className={` inline-block p-4 text-[40px] text-arrowColor absolute -translate-y-1/2 left-2 top-1/2 ${className}`}
              // style={{ ...style, display: "block", background: "red" }} 
              onClick={onClick}
            ><FaArrowAltCircleLeft /></div>
        )
      }


export default NextArrow
