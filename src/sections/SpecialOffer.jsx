import React from 'react'
import { offer } from '../assets/images'
import { FaArrowAltCircleRight } from "react-icons/fa";


const SpecialOffer = () => {
  return (
    <div className=' px-7 text-center md:flex md:items-center  max-w-[1100px] mx-auto mt-9 mid:mt-12' id='specialOffer'>

      <div className='md:order-2 md:mb-20'>

      <h2 className='font-bold mb-3 text-[32px] lg:text-[40px] md:text-[35px]'><span className='text-coral-red'>Special</span> Offer</h2>

      <p className='text-slate-gray mt-2'> Embark on a shopping journey that redefines your experience with
      unbeatable deals. From premier selections to incredible savings, we
      offer unparalleled value that sets us apart. </p>

      <div className='mt-5 hidden md:flex justify-center gap-4'>

      <button className='border bg-coral-red rounded-full  hover:scale-105 duration-75  mt-4'>
        <div className='flex items-center gap-2 py-1 px-2.5 text-gray-100'>
          <p>CLAIM NOW!</p>
          <FaArrowAltCircleRight />
        </div>
      </button>

      <button className='border border-slate-gray bg-gray-100 rounded-full  hover:scale-105 duration-75  mt-4 '>
        <div className='flex items-center gap-2 py-1 px-5 text-slate-gray'>
          <p>LEARN MORE</p>
          
        </div>

        </button>

      </div>

        

      

      </div>


      <img src={offer} alt="/" className='mt-8 md:mt-0 w-[350px] md:w-[450px] mx-auto md:order-1' />



      <div className='mt-5 flex justify-around md:hidden '>

      <button className='border bg-coral-red rounded-full  hover:scale-105 duration-75  mt-4'>
        <div className='flex items-center gap-2 py-1 px-2.5 text-gray-100'>
          <p>CLAIM NOW!</p>
          <FaArrowAltCircleRight />
        </div>
      </button>

      <button className='border border-slate-gray bg-gray-100 rounded-full  hover:scale-105 duration-75  mt-4 '>
        <div className='flex items-center gap-2 py-1 px-5 text-slate-gray'>
          <p>LEARN MORE</p>
          
        </div>
      </button>

      </div>


    </div>
  )
}

export default SpecialOffer
