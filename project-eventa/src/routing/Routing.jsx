import React from 'react'
import Home from '../views/Home'
import EventAdmin from '../views/EventAdmin'
import EventCreation from '../views/EventCreation'
import EventFinder from '../views/EventFinder'
import EventInfo from '../views/EventInfo'
import Error from '../views/Error'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/event-admin" element={<EventAdmin/>} />
        <Route path="/event-creation" element={<EventCreation/>} />
        <Route path="/event-finder" element={<EventFinder/>} />
        <Route path="/event-info" element={<EventInfo/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default Routing