import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  lable,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  onClick,
  link
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-primary text-white border-violet-800"
        } rounded-full ${fullWidth && "w-full"} relative`}
      whileHover={{ scale: 1.05 }}   // Scale up on hover
      whileTap={{ scale: 0.95 }}     // Scale down on click
      transition={{ type: 'spring', stiffness: 300 }} // Smooth transition
    >
      {lable}
      {iconURL && (
        <img
          src={iconURL}
          alt='arrow Right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
      {link && (
        <a href={link} className='absolute inset-0'></a>
      )}
    </motion.button>
  );
};

export default Button;
