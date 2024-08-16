import Button from './Button';
import { Tilt } from 'react-tilt'; 
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ imgURL, name, price, description, id }) => {
  const navigate = useNavigate();  // Corrected typo

  function handleButtonClick() {
    navigate(`/product/${id}`);
  }

  return (
    <Tilt className="w-full xs:w-[250px]">
      <motion.div
        // Assuming you want to use some animation properties; update as needed
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='flex flex-1 flex-col shadow-md rounded-lg p-6 border-t-8 border-primary w-full mb-5 max-sm:w-full'>
          <img src={imgURL} alt={name} className='w-full h-full cursor-pointer' />
          <h1 className='text-2xl font-montserrat mx-1 font-semibold mt-2 leading-normal'>{name}</h1>
          <h2 className='text-2xl font-semibold mt-2 mx-1 font-palanquin leading-normal'>{description}</h2>  {/* Corrected className */}
          <p className='text-xl mx-1 leading-normal font-montserrat font-semibold text-slate-gray my-3'>{price}</p>
          <Button label='Buy Now' onClick={handleButtonClick}/>  {/* Corrected prop */}
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProductCard;
