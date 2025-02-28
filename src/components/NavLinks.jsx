import React from 'react';
import { Link } from 'react-scroll';

const NavLinks = ({href, label, toggleMenu}) => {
  return (
    <div className='max-lg:border-b max-lg:border-gray-400 max-lg:pb-2 max-lg:px-2 cursor-pointer lg:text-gray-600'>
      <Link 
        to={href} 
        onClick={toggleMenu} 
        spy={true} 
        smooth={true} 
        offset={-70}  
        duration={400}  
        className='hover:font-semibold lg:hover:text-black'
      >
        {label}
      </Link>
    </div>
  )
}

export default NavLinks;
