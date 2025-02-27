import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks,socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'
import Footerlink from '../components/Footerlink'
import {headerLogo} from "../assets/images";


const Footer = () => {
  return (
    <div className='bg-black text-white py-4 px-4'>

      <div className='  mt-6  w-full mx-auto sm:mt-9 '>

        <div className='md:grid grid-cols-3 lg:max-w-[1050px]'>

        <div className='md:ml-2 flex flex-col items-start lg:ml-4'>
        <img src={headerLogo} alt="Nike logo" className='w-[130px]  mx-0'/>

        <p className='text-gray-300 mt-6 leading-snug max-w-[500px] sm:text-[1.1em] md:mr-4 '>Get shoes ready for the new term at your nearest Nike store. Find
        Your perfect Size In Store. Get Rewards.</p>



        <div className='flex w-full justify-evenly sm:justify-between sm:max-w-[200px]  mt-6 md:px-0 md:justify-start md:gap-6'>

        {socialMedia.map((icon)=>(
          <button className='bg-white rounded-xl hover:scale-[115%] duration-75' key={icon.title}>

            <img src={icon.src} alt={icon.alt} className='p-1.5 md:p-1 ' />

          </button>
        ))}
        </div>
        </div>


        
        <div className='flex flex-row gap-2  w-full justify-between mx-auto mt-7 sm:mt-11  md:col-span-2 max-w-[650px] md:mt-0
        md:pr-1 px-2 md:max-w-[550px] sm:mx-0 '>
          {footerLinks.map((list)=>(
            <Footerlink
            key={list.title}
            {...list}
            />
          ))}
        </div>

      </div>

        <div className='mt-12 md:mt-7 sm:flex items-center w-full justify-center sm:justify-between text-sm'>


          <button className='text-[16px] text-center sm:order-2 w-full sm:w-fit'>Terms & Conditions</button>



          <p className='flex gap-2 items-center justify-center sm:justify-normal mt-1 sm:mt-0'><img src={copyrightSign} alt="/" />Copyright. All rights reserved.</p>


          
        </div>

      </div>
    </div>
  )
}

export default Footer
