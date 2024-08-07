import Button from './Button'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({ imgURL, name, price, description, id }) => {
  const naviagte = useNavigate();

 function handleButtonClick(){
   naviagte(`/product/${id}`);
  }
  return (
    // shadow-md rounded-lg p-6 border-t-8 border-primary w-full md:w-1/3
    <div className='flex flex-1 flex-col shadow-md rounded-lg p-6 border-t-8 border-primary   w-full mb-5 max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-full h-full cursor-pointer' />
      <h1 className='text-2xl font-montserrat mx-1  font-semibold mt-2 leading-normal'>{name}</h1>
      <h2 className='text-2xl font-semibold mt-2 mx-1 font-palanquinleading-normal'>{description}</h2>
      <p className='text-xl mx-1 eading-normal font-montserrat font-semibold text-slate-gray  my-3'>{price}</p>
      <Button lable='Buy Now' onClick={handleButtonClick}/>
    </div>
  )
}

export default ProductCard
