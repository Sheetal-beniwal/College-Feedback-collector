import React from "react";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLock, FaBolt, FaShieldAlt, FaChartLine } from "react-icons/fa";

export default function FeedbackLanding() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-200 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-16 overflow-hidden">
        {/* Dynamic Background Blobs */}
        <div className="absolute top-10 left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-200/50 mix-blend-multiply filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-cyan-200/50 mix-blend-multiply filter blur-[120px] animate-pulse delay-700"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100/80 text-blue-800 rounded-full text-xs font-extrabold tracking-widest uppercase shadow-sm mb-6 border border-blue-200">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-[pulse_1s_infinite]"></span>
              Live Pulse Active
            </div>
            
            <h1 className="text-5xl lg:text-[4.5rem] font-extrabold text-slate-800 leading-[1.05] tracking-tight mb-6">
              Your Feedback <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Matters More</span><br/>
              Than You Think
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-500 leading-relaxed mb-8 max-w-lg font-medium">
              Every opinion is a step towards building a better college. Share your experience, rate your classes, and help us improve together.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <RouterLink to="/feedback">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold text-lg shadow-[0_10px_20px_rgba(8,_112,_184,_0.2)] hover:shadow-[0_10px_25px_rgba(8,_112,_184,_0.4)] hover:-translate-y-1 active:scale-95 transition-all duration-300">
                  Start Now
                </button>
              </RouterLink>
              <RouterLink to="/dashboard">
                <button className="px-8 py-4 bg-white/60 backdrop-blur-md text-slate-700 rounded-xl font-bold text-lg border border-slate-200 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300">
                  View Campus Data
                </button>
              </RouterLink>
            </div>
            
            <p className="mt-6 text-sm text-slate-400 italic">
              Be the voice of change. Because the future of your campus starts with you.
            </p>
          </motion.div>

          {/* Right Image Display */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full relative flex justify-center lg:justify-end"
          >
            <div className="relative isolate group">
               <div className="absolute -inset-4 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-[2.5rem] blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-700 -z-10"></div>
               <img src="/hero.png" alt="Student Feedback Preview" className="relative w-full max-w-md lg:max-w-lg rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border-4 border-white/60 bg-white object-cover aspect-[4/5] object-center" />
               
               {/* Floating Card */}
               <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl border border-slate-100 p-5 rounded-2xl shadow-xl w-64 animate-[bounce_4s_ease-in-out_infinite]">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600">
                     <FaChartLine size={20} />
                   </div>
                   <div className="font-bold text-slate-800 text-sm">Campus Sentiment</div>
                 </div>
                 <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                   <div className="bg-gradient-to-r from-blue-500 to-cyan-400 w-[82%] h-full rounded-full"></div>
                 </div>
                 <div className="mt-2 text-xs text-slate-500 font-medium tracking-wide">82% Positive Student Growth</div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <div>
               <h4 className="text-blue-600 font-extrabold uppercase tracking-widest text-xs mb-3">Integrity First</h4>
               <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">Built on Trust and <br className="hidden md:block" /> Transparency</h2>
             </div>
             <p className="max-w-sm text-slate-500 font-medium pb-2 text-lg">
               We ensure that your voice is heard without compromising your identity or the truth.
             </p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
             {/* Feature 1 */}
             <motion.div whileHover={{ y: -8 }} className="bg-slate-50 border border-slate-100 p-10 rounded-[2rem] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-300">
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 text-2xl mb-6 shadow-sm border border-blue-50">
                 <FaLock />
               </div>
               <h3 className="text-2xl font-bold text-slate-800 mb-3">100% Anonymous</h3>
               <p className="text-slate-500 font-medium leading-relaxed">Your privacy is our priority. Share your honest thoughts without any fear of exposure or bias.</p>
             </motion.div>

             {/* Feature 2 */}
             <motion.div whileHover={{ y: -8 }} className="bg-slate-50 border border-slate-100 p-10 rounded-[2rem] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-300">
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-cyan-600 text-2xl mb-6 shadow-sm border border-cyan-50">
                 <FaBolt />
               </div>
               <h3 className="text-2xl font-bold text-slate-800 mb-3">Real-time Impact</h3>
               <p className="text-slate-500 font-medium leading-relaxed">Watch your feedback translate into immediate discussions and campus policy updates.</p>
             </motion.div>

             {/* Feature 3 */}
             <motion.div whileHover={{ y: -8 }} className="bg-slate-50 border border-slate-100 p-10 rounded-[2rem] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-300">
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 text-2xl mb-6 shadow-sm border border-indigo-50">
                 <FaShieldAlt />
               </div>
               <h3 className="text-2xl font-bold text-slate-800 mb-3">Verified Feedback</h3>
               <p className="text-slate-500 font-medium leading-relaxed">Our platform uses secure institutional verification to ensure every voice belongs to a student.</p>
             </motion.div>
           </div>
        </div>
      </section>

      {/* Stats Bento Box Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Big Card */}
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white border border-slate-100 rounded-[2.5rem] p-10 lg:p-14 shadow-[0_10px_40px_rgb(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden h-full min-h-[350px]">
            <div className="absolute -bottom-16 -right-16 text-blue-50 opacity-40 text-[15rem] leading-none select-none z-0 rotate-12">
               ⚗️
            </div>
            <div className="relative z-10 flex flex-col justify-center h-full">
              <h2 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-600 mb-4 tracking-tighter">15k+</h2>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Active Pulse Points</h3>
              <p className="text-slate-500 font-medium text-lg max-w-sm leading-relaxed">Connecting students with administration across 50+ partner institutions nationwide.</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            {/* Top Right Card */}
            <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] p-10 shadow-xl flex items-center justify-between overflow-hidden relative">
               <div className="z-10 relative">
                 <h2 className="text-[4rem] font-extrabold text-white mb-2 tracking-tight leading-none">94%</h2>
                 <p className="text-slate-300 font-medium text-sm md:text-base leading-relaxed max-w-[200px]">Resolution rate on reported campus facility improvements.</p>
               </div>
               <div className="absolute -right-8 -top-8 w-40 h-40 border-[12px] border-cyan-400/80 rotate-45 rounded-2xl opacity-80 shadow-[0_0_40px_rgba(34,211,238,0.4)] z-0 mix-blend-screen"></div>
            </motion.div>
            
            {/* Bottom Right Row */}
            <div className="grid grid-cols-2 gap-8 flex-1">
              <motion.div whileHover={{ y: -5 }} className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm flex flex-col items-center justify-center text-center">
                 <div className="text-5xl mb-4 bg-emerald-50 p-4 rounded-full">🎓</div>
                 <h2 className="text-4xl font-extrabold text-slate-800 mb-1">50+</h2>
                 <p className="text-xs font-bold text-slate-400 tracking-widest uppercase">Colleges</p>
              </motion.div>
              
              <motion.div whileHover={{ y: -5 }} className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm flex flex-col items-center justify-center text-center">
                 <div className="text-5xl mb-4 bg-amber-50 p-4 rounded-full">😊</div>
                 <h2 className="text-4xl font-extrabold text-slate-800 mb-1">8.4<span className="text-2xl text-slate-400">/10</span></h2>
                 <p className="text-xs font-bold text-slate-400 tracking-widest uppercase">Student Sat.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/50 to-cyan-100/50 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
          <div className="inline-block px-4 py-1.5 bg-slate-800 text-white rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-lg">
            Ready to pulse?
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-800 tracking-tight leading-[1.1] mb-12">
            Make your campus a better place to learn and live.
          </h2>
          <div className="flex flex-wrap justify-center gap-5">
             <RouterLink to="/feedback">
                <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl font-bold text-lg shadow-[0_10px_20px_rgba(8,_112,_184,_0.2)] hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300">
                  Start Submitting
                </button>
             </RouterLink>
             <RouterLink to="/contact">
                <button className="px-10 py-5 bg-white text-slate-700 border-2 border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                  Partner with us
                </button>
             </RouterLink>
          </div>
        </div>
      </section>

      {/* Legacy sections included */}
      <div className="bg-slate-50">
        <section id="about" className="py-20 border-t border-slate-200/60">
          <AboutUs />
        </section>
        
        <section id="contact" className="py-20 border-t border-slate-200/60">
          <ContactUs />
        </section>
      </div>

    </div>
  );
}
