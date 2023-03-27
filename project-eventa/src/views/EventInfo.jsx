import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import EventGuestPanel from '../components/EventGuestPanel/EventGuestPanel'
import Newsletter from '../components/Newsletter/Newsletter'


const EventInfo = () => {
  return (
    <>
    <Navbar/>
    <EventGuestPanel/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default EventInfo