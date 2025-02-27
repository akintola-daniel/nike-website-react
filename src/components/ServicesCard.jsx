import React from 'react'


const ServicesCard = ({imgURL,label,subtext}) => {

  return (
    <div className='border rounded-xl  shadow-inner md:max-w-[300px]'>

     <div className=' flex flex-col justify-center items-center text-center py-7 px-4 lg:px-2'>

      <div className='bg-coral-red w-fit rounded-full '>
      <img src={imgURL} alt="" className=' p-1 ' />
      </div>

      <h4 className='font-bold text-lg mt-2'>{label}</h4>

      <p className='text-slate-gray mt-2'>{subtext}</p>

      </div>
      
    </div>
  )
}

export default ServicesCard
