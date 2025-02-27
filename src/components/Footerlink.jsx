import React from 'react'

const Footerlink = ({title,links}) => {
  return (
    <div>
      <h4 className='text-[22px]'>{title}</h4>

      <ul className='sm:mt-2'>
       {links.map((link)=>(
        <li className='text-gray-400 leading-8 sm:leading-7 hover:text-coral-red '><a href={link.link}>{link.name}</a></li>
       ))}
      </ul>
    </div>
  )
}

export default Footerlink
