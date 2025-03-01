import React from 'react';
import { Link } from 'react-scroll';

const NavLinks = ({href, label, toggleMenu, offset}) => {
  return (
    <div className='max-mid:border-b max-mid:border-gray-400 max-mid:pb-2 max-mid:px-2 cursor-pointer md:text-gray-600'>
      <Link 
        to={href} 
        onClick={toggleMenu} 
        spy={true} 
        smooth={true} 
        offset={offset}  
        duration={400}  
        activeClass="active"
        className='max-mid:hover:font-semibold md:hover:text-black'
      >
        {label}
      </Link>
    </div>
  )
}

export default NavLinks;
