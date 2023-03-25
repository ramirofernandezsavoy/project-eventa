import React from 'react'

const Newsletter = () => {
    
  return (
    <div className='bg-gray-800 h-10 flex justify-evenly font-rob font-bold items-center w-full'>
        <h3 className=' text-center text-2xl text-white'>Check out our newsletter!</h3>
        <div className='flex w-1/3'>
            <input className='font-robSerif text-xs w-full' type="email" placeholder='example@yourmail.com'/>        
            <button className=" bg-primary hover:bg-primary-hover text-white font-bold px-4 rounded text-center text-sm">Subscribe!</button>
        </div>        
    </div>
  )
}

export default Newsletter