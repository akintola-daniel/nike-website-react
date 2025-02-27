import React, {useState} from 'react'
import { IoIosMenu } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import {headerLogo} from "../assets/images";
import { navLinks } from '../constants';
import NavLinks from '../components/NavLinks';


const Nav = () => {
  
  const[menuOpen, setMenuOpen]= useState(false);
  const toggleMenu= () => {setMenuOpen(!menuOpen)};


  return (
    <nav className='fixed w-full pt-6 pb-5  mx-auto px-6 sm:px-9 border-b border-b-gray-200 bg-gray-50 z-20 flex justify-between items-center '>
      
      
        <a href="/"><img src={headerLogo} alt="Nike Logo" className=' w-[120px] sm:w-[]'/></a>
      

      <div onClick={toggleMenu} className='cursor-pointer md:hidden'>{menuOpen ? <MdCancel size={25} />  : <IoIosMenu size={25} />}</div>

        <div className= {menuOpen ? 'fixed  h-full w-[50%] max-w-[250px] p-4 top-0 left-0 border-r border-r-gray-300 ease-in-out duration-200 bg-gray-50  md:hidden' : 'fixed h-full w-[50%] max-w-[250px] p-4 top-0 left-[-100%] ease-in duration-200 md:hidden'}>

        
        <a href="/"><img src={headerLogo} alt="Nike Logo" className='pt-2 ml-2 w-[120px]'/></a>

        <div className='flex flex-col mt-12 gap-6  uppercase text-center'>

          {navLinks.map((link)=>(
            <NavLinks 
            key={link.label}
            {...link}
            />
          ))}
       
          <button className='uppercase'>

            <span className=' cursor-pointer hover:text-coral-red'>Sign up</span> 
            / 
            <span className=' cursor-pointer hover:text-coral-red'>Log in</span>
            
          </button>   

        </div>
      </div>

      


        <div className='hidden md:flex md:gap-7 lg:gap-12'>
          {navLinks.map((link)=>(
            <NavLinks 
            key={link.label}
            {...link}
            />
          ))}
       
        </div>

        <div className='hidden md:flex md:gap-1 lg:gap-2 md:items-center md:justify-center'>
          <button className='hover:text-coral-red hover:font-semibold'>Sign up</button>
          <p>/</p>
          <button className='hover:text-coral-red hover:font-semibold' >Log in</button>
        </div>
   
    </nav>
  )
}

export default Nav
