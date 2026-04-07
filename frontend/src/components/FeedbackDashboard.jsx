import { useEffect, useState } from "react";
import FeedbackNavbar from "./FeedbackNavbar";
import { motion, AnimatePresence } from "framer-motion";

const ALL_CATEGORIES = [
  "All",
  "Academics",
  "Events",
  "Classrooms",
  "Library",
  "Labs",
  "Canteen",
  "Infrastructure",
  "Hostel",
];

export default function FeedbackDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFeedbacks = async (selectedCategory) => {
    setLoading(true);
    setError(null);
    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "https://college-feedback-collector-1.onrender.com";
      let url = `${apiBaseUrl}/api/feedback`;
      if (selectedCategory && selectedCategory !== "All") {
        url += `?category=${selectedCategory}`;
      }
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch feedbacks");
      const data = await res.json();
      setFeedbacks(data);
    } catch (err) {
      setError(err.message || "Could not connect to server. Make sure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks(category);
  }, [category]);

  const getRatingDisplay = (fb) => {
    if (!fb.ratings || typeof fb.ratings !== "object") return [];
    return Object.entries(fb.ratings).map(([key, val]) => ({ key, val }));
  };

  return (
    <>
      <FeedbackNavbar />
      <div className="min-h-screen relative bg-slate-50 overflow-hidden py-12 px-6">
        
        {/* Dynamic Abstract Background (Glassmorphism blobs) */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-4 tracking-tight">
              Feedback Dashboard
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-medium">Explore all student insights, filtered your way.</p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="relative inline-block w-64">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="block w-full appearance-none bg-white/60 backdrop-blur-xl border border-white/80 shadow-lg rounded-2xl px-5 py-3 text-slate-700 font-semibold focus:outline-none focus:ring-4 focus:ring-purple-500/30 transition-all cursor-pointer"
              >
                {ALL_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </motion.div>

          {/* States */}
          {loading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center items-center py-20">
              <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
            </motion.div>
          )}
          {error && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center bg-red-50/80 backdrop-blur-sm border border-red-200 text-red-600 rounded-2xl p-6 max-w-lg mx-auto shadow-xl">
              <p className="font-semibold text-lg">⚠️ Oops!</p>
              <p>{error}</p>
            </motion.div>
          )}

          {/* Feedback Cards */}
          {!loading && !error && feedbacks.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16 bg-white/40 backdrop-blur-xl border border-white rounded-3xl shadow-sm">
              <p className="text-2xl text-slate-400 font-medium tracking-wide">No feedback found for {category} 🍃</p>
            </motion.div>
          )}

          {!loading && !error && feedbacks.length > 0 && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              <AnimatePresence>
                {feedbacks.map((fb, index) => (
                  <motion.div
                    key={fb._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl overflow-hidden hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    {fb.image && (
                      <div className="w-full h-48 bg-slate-100 flex items-center justify-center p-2">
                         <img
                          src={`${import.meta.env.VITE_API_BASE_URL || "https://college-feedback-collector-1.onrender.com"}/uploads/${fb.image}`}
                          alt="Feedback attachment"
                          // 'object-contain' prevents stretching/blurring of low-res mobile uploads, whilst filling the background with soft color
                          className="w-full h-full object-contain filter drop-shadow-md rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                    )}
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <span className="inline-block text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-100 to-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full shadow-sm">
                          {fb.category}
                        </span>
                      </div>
                      
                      <p className="text-slate-700 flex-grow font-medium leading-relaxed mb-6">
                        {fb.feedbackText ? `"${fb.feedbackText}"` : <em className="text-slate-400 not-italic">No additional comments</em>}
                      </p>
                      
                      {getRatingDisplay(fb).length > 0 && (
                        <div className="bg-slate-50/80 rounded-2xl p-4 mb-4 space-y-2 border border-slate-100">
                          {getRatingDisplay(fb).map(({ key, val }) => (
                            <div key={key} className="flex justify-between items-center text-sm">
                              <span className="capitalize text-slate-600 font-medium">{key}</span>
                              <div className="flex items-center gap-1.5">
                                <span className="font-bold text-slate-800">{val}</span>
                                <span className="text-amber-400 text-xs shadow-amber-300/50 drop-shadow-sm">★</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <div className="text-xs font-semibold text-slate-400 pt-3 border-t border-slate-100 flex items-center">
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        {new Date(fb.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
