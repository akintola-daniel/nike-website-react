import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ButtonCard = ({ text, backgroundColour, textColor, className }) => {
  return (
    <button className={` bg-${backgroundColour} rounded-full hover:scale-105 duration-75 ${className}`}>
      <div className={`flex items-center justify-center gap-2 py-1 px-3.5 text-${textColor} uppercase`}>
        <p>{text}</p>
        <FaArrowRight />
      </div>
    </button>
  );
};

export default ButtonCard;
