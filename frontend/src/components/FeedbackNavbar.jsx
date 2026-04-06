import React from 'react'
import { Link as RouterLink } from "react-router-dom";

function FeedbackNavbar() {
  return (
    <div>
    
      {/* Navbar */}
      <nav className=" w-full bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight"> 
          <RouterLink to="/" className="hover:text-emerald-600 transition-colors">CampusPulse</RouterLink>
        </h1>
        <ul className="flex space-x-8 text-gray-700 font-bold">
          <li className="hover:text-emerald-500 cursor-pointer transition-colors"> <RouterLink to="/feedback/academics">Academics </RouterLink></li>
          <li className="hover:text-emerald-500 cursor-pointer transition-colors"> <RouterLink to="/feedback/facilities"> Facilities </RouterLink></li>
          <li className="hover:text-emerald-500 cursor-pointer transition-colors"> <RouterLink to="/feedback/events"> Events</RouterLink> </li>
          <li className="text-emerald-600 hover:text-emerald-700 cursor-pointer transition-colors"> <RouterLink to="/dashboard">Dashboard</RouterLink> </li>
        </ul>
      </nav>
     
    </div>
  )
}

export default FeedbackNavbar
