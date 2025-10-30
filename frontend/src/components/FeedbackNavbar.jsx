import React from 'react'
import { Link as RouterLink } from "react-router-dom";

function FeedbackNavbar() {
  return (
    <div>
      
      {/* Navbar */}
      <nav className="w-full bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold"> <RouterLink to="/">CampusPulse</RouterLink></h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer"> <RouterLink to="/feedback/academics">Academics </RouterLink></li>
          <li className="hover:text-blue-600 cursor-pointer"> <RouterLink to="/feedback/facilities"> Facilities </RouterLink></li>
          <li className="hover:text-blue-600 cursor-pointer"> <RouterLink to="/feedback/events"> Events</RouterLink> </li>
        
        </ul>
      </nav>
     
    </div>
  )
}

export default FeedbackNavbar
