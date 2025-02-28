import React from 'react'
import { services } from '../constants'
import ServicesCard from '../components/ServicesCard'


const Services = () => {
  return (
    <div className='py-10 px-7 mx-6 max-w-[1150px] md:mx-auto  my-[30px] md:mt-[50px]' id='services'>
    
      <div className='flex flex-col md:flex-row  items-center gap-8 md:gap-5 lg:gap-11 justify-center'>
        
     {services.map((service) => (
      <ServicesCard 
       {...service}
       key={service.label}
      />
     ))}
     </div>
    </div>
  )
}

export default Services
