import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { offer } from '../assets/images';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';

const SpecialOffer = () => {
  const navigate = useNavigate();

  // Example product ID for the special offer
  const specialOfferProductId = 1; // Replace with the actual ID

  const handleBuyNow = () => {
    // Navigate to the product detail page
    navigate(`/specialOffer/${specialOfferProductId}`);
  };

  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt="Offer" width={773} height={687} className='object-contain w-full'/>
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-primary'>Special</span> Offer
        </h2>
        <p className='mt-4 info-text'>
          Discover unbeatable deals on our premium hair collections. From luxurious bundles to incredible discounts, we provide exceptional value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
          Explore a world of possibilities designed to meet your unique needs and exceed your highest expectations. Your experience with us is truly exceptional.
        </p>

        <div className='mt-11 flex flex-wrap gap-4'>
          <Button
            lable='Shop Now'
            iconURL={arrowRight}
            onClick={handleBuyNow} // Attach click handler
          />
          {/* <Button
            lable='Learn More'
            backgroundColor='bg-white'
            borderColor='border-primary'
            textColor='text-slate-gray'
          /> */}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
