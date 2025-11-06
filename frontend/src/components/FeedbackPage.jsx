import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FeedbackNavbar from "./FeedbackNavbar";

function FeedbackPage() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Academics",
      desc: "Give feedback about courses, curriculum, and academic support.",
      link: "/feedback/academics",
      gradient: "from-blue-100 via-blue-200 to-blue-300",
    },
    {
      title: "Facilities",
      desc: "Share your thoughts about labs, classrooms, or infrastructure.",
      link: "/feedback/facilities",
      gradient: "from-green-100 via-green-200 to-green-300",
    },
    {
      title: "Events",
      desc: "Share your experience about fests, seminars, and student activities.",
      link: "/feedback/events",
      gradient: "from-pink-100 via-pink-200 to-pink-300",
    },
  ];

  return (
    <>
      <FeedbackNavbar />

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-16 py-4 gap-10 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 min-h-screen">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h2 className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
            Be it academics, infrastructure, facilities, or college events – we’re all ears!  
            What’s on your mind to share valuable feedback about today?
          </h2>

          {/* Feedback Cards */}
          <div className="space-y-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                onClick={() => navigate(card.link)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`cursor-pointer p-6 rounded-2xl bg-gradient-to-br ${card.gradient} shadow-md hover:shadow-xl transition-all border border-gray-200`}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4">{card.desc}</p>
                <p className="text-gray-900 font-semibold">Give Feedback →</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center md:justify-end w-full md:w-1/2"
        >
          <img
            src="/feedback_page.jpg"
            alt="Students Illustration"
            className="w-72 md:w-full rounded-2xl shadow-[0_0_25px_rgba(156,163,175,0.4)] hover:shadow-[0_0_35px_rgba(156,163,175,0.6)] transition-all duration-500"
          />
        </motion.div>
      </section>
    </>
  );
}

export default FeedbackPage;
