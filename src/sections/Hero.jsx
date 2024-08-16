import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { hairBundles, statistics } from '../constants';
import { arrowRight } from '../assets/icons';
import { hairBundle1 } from '../assets/images';
import HairCard from '../components/HairCard';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [bigHairImg, setBigHairImg] = useState(hairBundle1);
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate('/All-Products');
  }

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-48'>
        <motion.div
          className='relative z-20'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className='text-xl font-montserrat text-primary'>
            Our Summer Collections
          </p>
        </motion.div>

        <motion.div
          className='relative z-20 mt-10'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
            <span className='xl:bg-white xl:whitespace-nowrap pr-10'>
              The New Arrival
            </span>
            <br />
            <span className='text-primary inline-block mt-3'>Luxe</span> Hair
          </h1>
        </motion.div>

        <motion.div
          className='relative z-20'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
            Discover the latest arrivals at Fandisha's Bundles. Experience premium quality hair collections that offer an unmatched natural look and variety for all styles.
          </p>
        </motion.div>

        <Button
          lable={"Shop Now"}
          onClick={handleButtonClick}
          iconURL={arrowRight}
        />

        <motion.div
          className='relative z-20 flex justify-start items-start flex-wrap w-full mt-20 gap-16'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {statistics && statistics.length
            ? statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <p className='text-4xl font-palanquin font-bold'>{stat.label}</p>
                <p className='leading-5 font-montserrat text-slate-gray'>{stat.value}</p>
              </motion.div>
            ))
            : null}
        </motion.div>
      </div>

      <div className='relative flex-1 flex justify-center bg-violet-400 items-center max-xl:py-40 bg-hero bg-cover bg-center'>
        <motion.img
          src={bigHairImg}
          alt="Human Hair Collection"
          width={450}
          height={400}
          className='object-contain relative z-10'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {hairBundles.map((image, index) =>
            <HairCard 
              key={index}
              imgURL={image}
              changeBigHairImgae={(hair) => setBigHairImg(hair)}
              bigHairImg={bigHairImg}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;