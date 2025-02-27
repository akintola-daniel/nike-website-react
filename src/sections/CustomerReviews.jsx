import React from 'react'
import { reviews } from '../constants'
import ReviewsCard from '../components/ReviewsCard'


const CustomerReviews = () => {
  return (
    <div className='mt-[90px] md:pt-12 md:pb-16 pt-10 pb-14  bg-pale-blue mt px-7 w-full'>
      <div className='flex flex-col items-center text-center max-w-[1240px]'>

        <h2 className='font-bold text-[30px] sm:text-[33px] md:text-[37px] lg:text-[42px]'><span className='text-coral-red'>Customers</span> Review</h2>

        <p className='text-slate-gray mt-2 text-[1.1em] max-w-[600px]'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>

        <div className='md:flex md:mt-6 lg:gap-4'>
        {reviews.map((review)=>(
          <ReviewsCard 
           key={review.customerName}
           {...review}
          />
        ))}
        </div>


      </div>
    </div>
  )
}

export default CustomerReviews
