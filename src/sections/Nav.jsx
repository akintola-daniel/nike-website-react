import React, {useState} from 'react'
import { IoIosMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import {headerLogo} from "../assets/images";
import { navLinks } from '../constants';
import NavLinks from '../components/NavLinks';

const Nav = () => {

//Sliding Nav
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => { 
    console.log("Menu toggled"); // Debug log
    setMenuOpen(!menuOpen); 
  };


//Nav Color [Transparent to Coloured]
  const [color, setColor] = useState(false)

  const changeColor = () => {
    if (window, scrollY >= 10) {
    setColor(true)
    } else {
    setColor(false) }
  }

  window.addEventListener ('scroll', changeColor)
   
  

  return (
    
<nav className={`
  ${color ? 'bg-gray-50 border-b border-b-gray-200' : 'bg-transparent'} 
  fixed w-full h-[70px] mx-auto px-6 sm:px-9 z-20 flex justify-between items-center
`}>


      <a href="/"><img src={headerLogo} alt="Nike Logo" className='w-[120px] sm:w-[]'/></a>

      <div onClick={toggleMenu} className='cursor-pointer mid:hidden'>{menuOpen ? <FaTimes  size={25} /> : <IoIosMenu size={25} />}</div>

      <div className={menuOpen ? 
        'fixed h-full w-[50%] max-w-[250px] p-4 top-0 left-0 border-r border-r-gray-300 ease-in-out duration-200 bg-gray-50 mid:hidden' 
        : 
        'fixed h-full w-[50%] max-w-[250px] p-4 top-0 left-[-100%] ease-in duration-200 mid:hidden'}>

        <a href="/"><img src={headerLogo} alt="Nike Logo" className='pt-2 ml-2 w-[120px]'/></a>

        <div className='flex flex-col mt-12 gap-6 uppercase text-center'>
          {navLinks.map((link) => (
            <NavLinks 
              key={link.label}
              {...link}
              toggleMenu={toggleMenu} // Pass the toggleMenu function here
            />
          ))}
          <button className='uppercase'>
            <span className='cursor-pointer hover:text-coral-red'>Sign up</span> 
            / 
            <span className='cursor-pointer hover:text-coral-red'>Log in</span>
          </button>
        </div>
      </div>

      <div className='hidden mid:flex mid:gap-9 lg:gap-12'>
        {navLinks.map((link) => (
          <NavLinks 
            key={link.label}
            {...link}
          />
        ))}
      </div>
      <div className='hidden mid:flex  mid:gap-2 mid:items-center mid:justify-center'>
        <button className='hover:text-coral-red hover:font-semibold'>Sign up</button>
        <p>/</p>
        <button className='hover:text-coral-red hover:font-semibold'>Log in</button>
      </div>
    </nav>
   
  )
}

export default Nav;