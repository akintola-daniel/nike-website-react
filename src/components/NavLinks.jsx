import React from 'react'

const NavLinks = ({href, label}) => {
  return (
    <div className='max-sm:border-b max-sm:border-gray-400 max-sm:pb-2 max-sm:px-2 hover:font-semibold cursor-pointer md:text-gray-600 md:hover:text-black '>
      <a href={href}>{label}</a>
    </div>
  )
}

export default NavLinks
