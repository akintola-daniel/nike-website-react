import React from 'react'
import PopularProductsCards from '../components/PopularProductsCards'
import { products } from '../constants'
import { FaStar } from "react-icons/fa";



const PopularProducts = () => {
  return (
    <div className='w-full py-10 lg:mb-4 px-7' id='popularProducts'>

      <div className='max-w-[600px] mx-auto lg:mx-0 lg:ml-[15px] text-center lg:text-left'>

      <h3 className='text-[30px] sm:text-[35px] md:text-[40px] font-bold mb-2'>Our <span className='text-coral-red'> Popular </span> Products</h3>

      <p className='text-gray-600'>Experience top-notch quality and style with our sought-after 
      selections. <br className='hidden sm:block'/> Discover a world of comfort, design, and value.</p>

      </div>

      <div className='mt-7 lg:mt-9 w-full '>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 max-w-[1240px] mx-auto gap-3 '>

      {products.map((product) => (
          <PopularProductsCards
            key = {product.name}
            product = {product}
          />               
      ))}

      </div>
      </div>


    </div>
  )
}

export default PopularProducts
