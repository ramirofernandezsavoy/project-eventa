import React from 'react'

const Newsletter = () => {
    
  return (
    <div className='bg-gray-800 h-20 flex justify-evenly font-rob font-bold items-center w-full'>
        <h3 className=' text-center text-4xl text-white'>Check out our newsletter!</h3>
        <div className='flex w-1/3'>
            <input className='font-robSerif text-md w-full px-3' type="email" placeholder='example@yourmail.com'/>        
            <button className=" bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded text-center text-md">Subscribe!</button>
        </div>        
    </div>
  )
}

export default Newsletter