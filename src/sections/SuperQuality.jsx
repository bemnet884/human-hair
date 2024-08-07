import Button from '../components/Button'
import { hairProduct3 } from '../assets/images'
import { useNavigate } from 'react-router-dom'
const SuperQuality = () => {
  const navigate = useNavigate();
  function handleButtonClick(){
   navigate('/About-Us');
  }
  return (
    <section id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-col flex-1'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-primary'> Premium </span> 
          <span className='text-primary'>Quality</span> Hair
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>Our meticulously crafted hair products offer luxurious comfort and style, designed to enhance your beauty with unmatched quality, elegance, and versatility.</p>
        <p className='mt-6 lg:max-w-lg info-text'> Our commitment to excellence and attention to detail ensure your utmost satisfaction.</p>
        <div className='mt-11'>
          <Button onClick={handleButtonClick} lable="About Us" />
        </div>
      </div>

      <div className='flex flex-1 justify-center items-center'>
        <img src={hairProduct3} alt='product detail' width={570} height={522} className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality
