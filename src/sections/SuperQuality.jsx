import React from 'react'
import {shoe8} from '../assets/images'
import ButtonCard from '../components/ButtonCard'


const SuperQuality = () => {
  return (
    <div className=' max-w-[1140px] mx-auto px-4  md:mt-[70px] md:flex '>

      

      <div className='text-center md:text-left mb-6 md:mb-0 md:mt-4 lg:mt-7 md:mr-9 md:ml-3'>

      <h2 className=' font-bold text-[30px] md:text-[32px] mb-3 lg:text-[37px]'>We Provide You <br /> <span className='text-coral-red text-[1.1em]'>Super Quality</span> Shoes</h2>

      <p className='text-gray-800 mb-2 leading-snug '> Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>

      

      <ButtonCard text="View Details" textColor="white" backgroundColour="coral-red" className="hidden md:inline mt-4"/>

      

      </div>

      
        <img src={shoe8} alt="" className='w-[300px] md:w-[350px] lg:w-[400px] mx-auto hover:scale-105 duration-100 md:mr-4' />
      


      <div className='text-center mt-5 md:mt-0'>

      

      <ButtonCard text="View Details" textColor="white" backgroundColour="coral-red" className="md:hidden"/>

        

      </div>


      


    </div>
  )
}

export default SuperQuality
