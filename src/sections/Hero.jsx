import React, { useState } from 'react'
import { bigShoe1 } from "../assets/images";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { shoes } from '../constants/index';
import ShoeCard from '../components/ShoeCard';
import { FaArrowRight } from "react-icons/fa";
import ButtonCard from '../components/ButtonCard';


const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <div className='w-full grid lg:grid-cols-2  '>

      <div className='text-center px-4 pb-16 lg:pb-7 pt-[100px] max-sm:pb-28'>
        <p className='text-coral-red text-left pb-9 pl-4'>Our Summer Collections by Daniel A.</p>

        <h1 className='text-[45px] font-bold pb-7 md:text-[50px]'>
        <div>The New Arrival</div>
        <div><span className='text-coral-red'>Nike</span> Shoes</div>
        </h1>

        <p className='text-gray-600 text-lg pb-[50px]'>Discover stylish Nike arrivals, quality comfort, and innovation for
        your active life.</p>

        <ButtonCard text="Shop Now" backgroundColour="coral-red" textColor="white" className="mb-16"> </ButtonCard>

        
        <div className='max-w-[750px] mx-auto'>
        <ul className='flex justify-between px-7 '>
          
          <li>
            <h4 className='font-bold text-lg'>1k+</h4>
            <p>Brands</p>
          </li>

          <li>
            <h4 className='font-bold text-lg'>500+</h4>
            <p>Shops</p>
          </li>

          <li>
            <h4 className='font-bold text-lg'>250k+</h4>
            <p>Customers</p>
          </li>
          
        </ul>
        </div>
      </div>


      <div className='relative flex flex-col gap-9 sm:gap-1 justify-start  bg-hero  items-center px-4 pb-16 lg:rounded-b-xl'>
        

        <img
          src={bigShoeImg}
          alt='shoe colletion'
          className='lg:absolute lg:top-[80px] w-[300px] lg:w-[400px] sm:w-[350px] mt-6 lg:mt-0'
        />
       

      <div className='flex lg:bottom-2 lg:absolute '>
          {shoes.map((shoe, index) => (
              <ShoeCard
                key={index}
                shoe={shoe}
                changeBigShoeImage={(dspshoe) => setBigShoeImg(dspshoe)}
                bigShoeImg={bigShoeImg}
              />
           
          ))}
        </div>
        </div>
        
    </div>
  )
}

export default Hero
