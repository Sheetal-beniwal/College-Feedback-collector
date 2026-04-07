import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

function FeedbackNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 sm:px-6 lg:px-8 ${scrolled ? "py-4" : "py-6"}`}>
      <nav
        className={`mx-auto max-w-6xl flex justify-between items-center transition-all duration-500 rounded-full
        ${scrolled 
          ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-6 py-4 border border-white/60" 
          : "bg-white/50 backdrop-blur-md px-6 py-4 border border-white/40 shadow-sm"}`}
      >
        {/* Logo */}
        <RouterLink to="/" className="text-2xl font-black tracking-tighter text-slate-800 flex items-center gap-2 hover:scale-105 transition-transform duration-300">
           <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30 flex items-center justify-center text-white font-bold text-xl">
              C
           </div>
           Campus<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Pulse</span>
        </RouterLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-bold text-slate-600">
          <li className="hover:text-blue-600 cursor-pointer transition-colors">
            <RouterLink to="/feedback/academics">Academics</RouterLink>
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">
            <RouterLink to="/feedback/facilities">Facilities</RouterLink>
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">
            <RouterLink to="/feedback/events">Events</RouterLink>
          </li>
          <li className="text-blue-600 hover:text-blue-800 cursor-pointer transition-colors">
            <RouterLink to="/dashboard">Dashboard</RouterLink>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="flex items-center">
          <RouterLink to="/">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-full shadow-lg transition-all"
            >
              Exit Forms
            </motion.button>
          </RouterLink>
        </div>
      </nav>
    </div>
  )
}

export default FeedbackNavbar
