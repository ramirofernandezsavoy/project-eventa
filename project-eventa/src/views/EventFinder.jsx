import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'
import CreateEvent from '../components/CreateEvent/CreateEvent'
import SearchEvent from '../components/SearchEvent/SearchEvent'

const EventFinder = () => {
  return (
    <>
    <Navbar/>
    <SearchEvent/>    
    <Newsletter/>
    <CreateEvent/>    
    <Footer/>    
    </>
  )
}

export default EventFinder