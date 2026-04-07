import { useState } from "react";
import { FaStar } from "react-icons/fa";
import FeedbackNavbar from "./FeedbackNavbar";
import { submitFeedback } from "../utils/submitFeedback";
import { motion } from "framer-motion";

export default function Events() {
  const [ratings, setRatings] = useState({
    experience: 0,
    refreshments: 0,
    organization: 0,
  });
  const [eventName, setEventName] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleRating = (key, value) => {
    setRatings({ ...ratings, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!eventName) {
      alert("Please enter the event name.");
      return;
    }

    try {
      await submitFeedback({
        eventName,
        ...ratings,
        feedbackText,
        image: imageFile,
        category: "Events",
      });

      alert("Feedback submitted successfully!");
      setEventName("");
      setFeedbackText("");
      setImageFile(null);
      setRatings({ experience: 0, refreshments: 0, organization: 0 });
    } catch(err) { console.error(err);
      alert("Failed to submit feedback. Check console.");
    }
  };

  return (
    <>
      <FeedbackNavbar />
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 relative overflow-hidden">
        
        {/* Dynamic Abstract Background */}
        <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-pink-200 mix-blend-multiply filter blur-[120px] opacity-60 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-rose-200 mix-blend-multiply filter blur-[120px] opacity-60 animate-pulse delay-700"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl relative z-10"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-[2.5rem] overflow-hidden border border-white"
          >
            <div className="w-full md:w-[60%] p-8 sm:p-12 lg:p-16">
              <div className="mb-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight mb-4">
                  Events <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-500">Feedback</span>
                </h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  From stage lights to spotlights – tell us how the event felt for you!
                </p>
              </div>

              <div className="space-y-8">
                {/* Event Name */}
                <div className="flex flex-col gap-3">
                  <label className="text-lg font-bold text-slate-700">Event Name</label>
                  <input
                    type="text"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    placeholder="Enter event name (e.g. Annual Fest)"
                    className="border border-slate-200 rounded-2xl px-6 py-4 w-full focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all bg-white/50 backdrop-blur-sm shadow-inner text-slate-700"
                    required
                  />
                </div>

                {/* Ratings */}
                <div className="space-y-5 bg-white/60 p-6 sm:p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                  <RatingRow
                    label="Overall Experience"
                    value={ratings.experience}
                    onChange={(val) => handleRating("experience", val)}
                  />
                  <div className="h-px w-full bg-slate-100"></div>
                  <RatingRow
                    label="Refreshment Quality"
                    value={ratings.refreshments}
                    onChange={(val) => handleRating("refreshments", val)}
                  />
                  <div className="h-px w-full bg-slate-100"></div>
                  <RatingRow
                    label="Event Organization"
                    value={ratings.organization}
                    onChange={(val) => handleRating("organization", val)}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-lg font-bold text-slate-700">Detailed Thoughts</label>
                  <textarea
                    placeholder="Share your detailed experience..."
                    rows={4}
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    className="w-full border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all bg-white/50 backdrop-blur-sm shadow-inner resize-none text-slate-700"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4">
                  <label className="cursor-pointer border-2 border-dashed border-pink-300 px-8 py-4 rounded-2xl bg-pink-50/50 hover:bg-pink-50 text-pink-600 font-semibold transition-all w-full sm:w-auto text-center hover:shadow-md">
                    {imageFile ? "✅ Picture Selected" : "📸 Attach a Photo"}
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => setImageFile(e.target.files[0])}
                    />
                  </label>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-500 text-white font-bold text-lg shadow-lg hover:shadow-pink-500/30 transition-all"
                  >
                    Submit Celebration
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="hidden md:flex flex-1 bg-gradient-to-br from-pink-50 to-rose-50 items-center justify-center p-12 order-first md:order-last border-l border-white/50">
              <div className="relative isolate group w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 bg-pink-400 rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-700 -z-10"></div>
                <img
                  src="/feedback_photo.webp"
                  alt="Events Illustration"
                  className="relative w-full max-w-sm object-contain rounded-[2rem] shadow-[0_20px_50px_rgba(236,_72,_153,_0.15)] border-4 border-white/60 bg-white/40 backdrop-blur-md group-hover:-translate-y-2 transition-transform duration-500"
                />
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
}

function RatingRow({ label, value, onChange }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
      <p className="text-slate-700 font-semibold text-lg">{label}</p>
      <div className="flex gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shadow-inner">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            onClick={() => onChange(star)}
            className={`cursor-pointer text-2xl transition-all duration-300 ${
              star <= value 
                ? "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)] scale-110" 
                : "text-slate-300 hover:text-amber-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
