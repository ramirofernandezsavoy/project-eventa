import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'
import EventGuestPanel from '../components/EventGuestPanel/EventGuestPanel'
import GuestsList from '../components/GuestsList/GuestsList'

const EventInfo = () => {
  return (
    <>
    <Navbar/>
    <EventGuestPanel/>    
    <GuestsList/>
    <Newsletter/>
    <Footer/>    
    </>
  )
}

export default EventInfo