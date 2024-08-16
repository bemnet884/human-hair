import React from 'react';
import {Tilt} from 'react-tilt'; // Import Tilt from react-tilt
import { motion } from 'framer-motion';

const HairCard = ({ imgURL, bigHairImg, changeBigHairImgae }) => {
  function handleClick() {
    if (bigHairImg !== imgURL.bigHair) {
      changeBigHairImgae(imgURL.bigHair);
    }
  }

  return (
    <Tilt className={`w-full ${bigHairImg === imgURL.bigHair ? 'border-violet-700' : 'border-transparent'}`} options={{ max: 25 }}>
      <motion.div
        className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 flex-1`}
        onClick={handleClick}
        style={{ height: '100%' }}
        whileHover={{ scale: 1.05 }} // Scale up on hover
        whileTap={{ scale: 0.95 }}   // Scale down on click
        transition={{ type: 'spring', stiffness: 300 }} // Smooth transition
      >
        <div className='flex justify-center items-center bg-center border bg-violet-300 bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
          <img
            src={imgURL.thumbnail}
            alt="Hair Collection"
            width={120}
            height={100}
            className='object-contain w-full h-full p-4'
          />
        </div>
      </motion.div>
    </Tilt>
  );
};

export default HairCard;
