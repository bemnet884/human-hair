import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL,rating,feedback,customerName}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img src={imgURL} alt="customer" className='rounded-full object-cover w-[120px] h-[120px]'/>
      <p className='mt-6 text-center info-text max-w-sm'>{feedback}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'><img src={star} alt="Rating Star" className='object-contain m-0'/>
        <p className='font-montserrat text-xl text-slate-gray'>({ rating})</p>
      </div>
      <h3 className='mt-1 font-palanquin text-center text-3xl font-bold'>{ customerName}</h3>

    </div>
  )
}

export default ReviewCard
