import React from 'react'
import { star } from '../assets/icons'

const ReviewsCard = ({imgURL, customerName, rating, feedback}) => {

  return (
    <div className='mt-10  flex flex-col items-center justify-center md:px-7'>
      <img src={imgURL} alt="customer image" className='rounded-full w-[150px]' />

      <p className='font-bold mt-0.5 text-[18px]'>{customerName}</p>

      <p className='text-slate-gray mt-1.5 max-w-[400px]'>{feedback}</p>      

       <div className='flex items-center justify-center gap-1 mt-1.5'>
        <img src={star} alt="" />
        <p className='font-semibold'>{rating}</p>

      </div>
    </div>
  )
}

export default ReviewsCard
