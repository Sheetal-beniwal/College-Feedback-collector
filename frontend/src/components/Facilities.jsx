import React from "react";
import { Link as RouterLink } from "react-router-dom";
import FeedbackNavbar from "./FeedbackNavbar";
import { motion } from "framer-motion";

function Facilities() {
  const facilityTypes = [
    { path: "/feedback/facilities/classroom", label: "Classrooms", icon: "🏫" },
    { path: "/feedback/facilities/library", label: "Library", icon: "📚" },
    { path: "/feedback/facilities/labs", label: "Labs", icon: "🔬" },
    { path: "/feedback/facilities/canteen", label: "Canteen", icon: "☕" },
    { path: "/feedback/facilities/infra", label: "Campus Infrastructure", icon: "🏢" },
    { path: "/feedback/facilities/hostel", label: "Hostel & Accommodation", icon: "🛏️" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-emerald-200 mix-blend-multiply filter blur-[120px] opacity-60 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-teal-200 mix-blend-multiply filter blur-[120px] opacity-60 animate-pulse delay-700"></div>

      <FeedbackNavbar />

      <div className="flex-grow px-6 lg:px-24 py-16 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight mb-4">
              Rate your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Campus Facilities.</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
              Campus comfort check: cozy, chaotic, or somewhere in between? We’re listening to your experience.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid sm:grid-cols-2 gap-4 max-w-2xl"
          >
            {facilityTypes.map((item, index) => (
              <RouterLink key={index} to={item.path}>
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center gap-3 px-6 py-4 text-left font-semibold rounded-2xl
                             bg-white/80 backdrop-blur-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white
                             hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 hover:border-emerald-100
                             hover:shadow-lg hover:text-emerald-800 text-slate-700 transition-all duration-300 group"
                >
                  <span className="text-2xl drop-shadow-sm group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span>{item.label}</span>
                </motion.button>
              </RouterLink>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 flex justify-center lg:justify-end w-full"
        >
          <div className="relative isolate group">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 -z-10"></div>
            <img
              src="/feedback_photo.webp"
              alt="Facilities illustration"
              className="relative max-w-sm md:max-w-md lg:max-w-lg w-full object-contain rounded-[2rem] shadow-[0_20px_50px_rgba(16,_185,_129,_0.1)] border-4 border-white/60 bg-white/30 backdrop-blur-sm group-hover:-translate-y-2 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Facilities;
