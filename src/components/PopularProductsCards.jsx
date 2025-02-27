import React from 'react'
import { FaStar } from "react-icons/fa";

const PopularProductsCards = ({product}) => {

  return (
    <div className='mb-4'>

    <div className='flex justify-center items-center mb-1 lg:mb-3 '>
     <img src={product.imgURL} alt={product.name} className='w-[232px] hover:scale-105 duration-100' />
    </div>
     
    <div className='flex flex-col items-center '>
    <p className='flex gap-1 items-center '><span className='text-coral-red'><FaStar /></span> <span className='text-slate-gray'>({product.rating})</span></p>
    <p className='font-bold'>{product.name}</p>
    <p className='text-coral-red font-semibold'>{product.price}</p>
    </div>

    </div>
  )
}

export default PopularProductsCards
