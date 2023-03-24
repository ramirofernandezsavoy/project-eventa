import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'
import EventAdminPanel from '../components/EventAdminPanel/EventAdminPanel'
import GuestsList from '../components/GuestsList/GuestsList'

const EventAdmin = () => {
  return (
    <>
    <Navbar/>
    <EventAdminPanel/>
    <Newsletter/>
    <GuestsList/>
    <Footer/>    
    </>
  )
}

export default EventAdmin