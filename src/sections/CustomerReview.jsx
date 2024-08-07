import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReview = () => {
  return (
    <section className='max-container'>
      <h3  className='font-palanquin text-center text-4xl font-bold'>What Our <span className='text-primary'>Customers</span> Say ?</h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>
        Hear authentic stories from our happy customers about their outstanding experiences with us.</p>
      
      <div>
        {reviews.map(review =>
          <ReviewCard
            key={review}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}/>)}
      </div>
    </section>
  )
}

export default CustomerReview
