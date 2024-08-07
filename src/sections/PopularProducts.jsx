import { products } from '../constants'
import ProductCard from '../components/ProductCard'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { useNavigate } from 'react-router-dom'
const PopularProducts = () => {
  const navigate = useNavigate();
  function handleButtonClick() {
   navigate('/All-Products');
  }
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-bold font-palanquin'>
          Our <span className='text-primary'>Popular</span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience luxurious quality and style with our premium hair selections. Discover a world of comfort, elegance, and unmatched value.
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-16 sm:gap-6'>
        {products.map(product => <ProductCard key={product.id} {...product} />)}
      </div>
      <div className='flex justify-center mt-14'>
        <Button lable={"See More"} onClick={handleButtonClick} iconURL={arrowRight} />
      </div>
    </section>
  )
}

export default PopularProducts
