import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";


const Subscribe = () => {
  return (
    <div className='py-10 px-7 sm:py-16' >
      <div className='flex flex-col items-center text-center sm:flex-row justify-center sm:justify-evenly max-w-[1029px] mx-auto '>

        <h2 className='font-bold text-[1.5em]  md:text-[1.8em] lg:text-[2em]'>Sign Up for <br /><span className='text-coral-red'>Updates</span> and Newsletter</h2>

        <div>

        <form className='mt-2 sm:mt-0'>
        <input type="email" placeholder='Subscribe@nike.com' className=' border-slate-gray text-center rounded-full p-1 hover:border-coral-red border-2 md:px-3 lg:px-5' />
        </form>

        <button className='border bg-coral-red rounded-full hover:scale-105 duration-75 mt-4 sm:mt-1'>
          <div className='flex items-center justify-center gap-2 py-1 px-4 md:px-6 lg:px-9 text-gray-100'>
            <p>Sign Up</p>
            <FaArrowAltCircleRight />
          </div>
        </button>

        </div>


      </div>
    </div>
  )
}

export default Subscribe
