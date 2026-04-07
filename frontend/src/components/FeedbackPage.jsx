import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FeedbackNavbar from "./FeedbackNavbar";

function FeedbackPage() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Academics",
      desc: "Give feedback about courses, curriculum, and academic support.",
      link: "/feedback/academics",
      gradient: "from-blue-500 to-cyan-400",
      icon: "📚",
    },
    {
      title: "Facilities",
      desc: "Share your thoughts about labs, classrooms, or infrastructure.",
      link: "/feedback/facilities",
      gradient: "from-emerald-500 to-teal-400",
      icon: "🏢",
    },
    {
      title: "Events",
      desc: "Share your experience about fests, seminars, and student activities.",
      link: "/feedback/events",
      gradient: "from-fuchsia-500 to-pink-500",
      icon: "🎉",
    },
  ];

  return (
    <>
      <FeedbackNavbar />

      <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-24 py-16 gap-16 min-h-screen bg-slate-50 overflow-hidden">
        
        {/* Dynamic Abstract Background Blobs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-pulse delay-700"></div>

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl relative z-10 w-full"
        >
          <div className="mb-10">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight mb-4">
              Your voice shapes our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">campus future.</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed">
              Be it academics, infrastructure, facilities, or college events – we’re all ears! Select a category below to share your valuable thoughts.
            </p>
          </div>

          {/* Feedback Cards */}
          <div className="space-y-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                onClick={() => navigate(card.link)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 + 0.3 }}
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer p-1 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all border border-white/60 backdrop-blur-md relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${card.gradient}`}></div>
                <div className="p-6 md:p-8 flex items-center justify-between">
                  <div className="flex items-start gap-5">
                    <div className="text-4xl drop-shadow-sm">{card.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-slate-500 font-medium">{card.desc}</p>
                    </div>
                  </div>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-400 group-hover:bg-gradient-to-br ${card.gradient} group-hover:text-white transition-all shadow-sm`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center lg:justify-end w-full lg:w-1/2 relative z-10"
        >
          {/* Prevent image stretching that causes blurriness by capping max-width and using object-contain. Using a nice background glow to frame it beautifully. */}
          <div className="relative isolate group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 -z-10"></div>
            <img
              src="/hero.png"
              alt="Students Illustration"
              className="relative max-w-sm md:max-w-md lg:max-w-lg w-full object-contain rounded-[2rem] shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border-4 border-white/50 bg-white/20 backdrop-blur-sm group-hover:-translate-y-2 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default FeedbackPage;
