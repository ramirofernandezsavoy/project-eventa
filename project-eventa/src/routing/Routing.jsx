import React from 'react'
import Home from '../views/Home'
import EventAdmin from '../views/EventAdmin'
import EventCreation from '../views/EventCreation'
import EventInfo from '../views/EventInfo'
import Error from '../views/Error'
import Contact from '../views/Contact'
import Login from '../views/Login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/event-admin/:id" element={<EventAdmin/>}/>
        <Route path="/event-creation" element={<EventCreation/>} />        
        <Route path="/event-info/:id" element={<EventInfo/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default Routing