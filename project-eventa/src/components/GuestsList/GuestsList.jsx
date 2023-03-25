import React from 'react'
import Guest from '../Guest/Guest'

const GuestsList = () => {
  return (
    <section className='py-5'>
        <h1 className='font-rob font-extrabold text-3xl p-5'>People who's already coming...</h1>
        <div className='flex'>
        <Guest/>
        <Guest/>
        <Guest/>
        <Guest/>
        <Guest/>
        <Guest/>
        </div>
    </section>
  )
}

export default GuestsList