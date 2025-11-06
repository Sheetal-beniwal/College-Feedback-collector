import { useState } from "react";
import { FaStar } from "react-icons/fa";
import FeedbackNavbar from "./FeedbackNavbar";

export default function Academics() {
  //backend
  const [feedback, setFeedback] = useState("");

  const [ratings, setRatings] = useState({
    syllabus: 0,
    teaching: 0,
    doubts: 0,
  });

  const handleRating = (category, value) => {
    setRatings({ ...ratings, [category]: value });
  };

  //backend
  const handleSubmit = async () => {
    const data = {
      syllabus: ratings.syllabus,
      teaching: ratings.teaching,
      doubts: ratings.doubts,
      feedback: feedback,  // 🟢 sending feedback text too
    };

    try {
      const res = await fetch("http://localhost:3000/academics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const msg = await res.text();
      alert(msg); // shows "saved" from backend

      // 🟢 Reset form after successful submission
      setRatings({ syllabus: 0, teaching: 0, doubts: 0 });
      setFeedback("");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <FeedbackNavbar />
      <div className="min-h-screen bg-gradient-to-br from-sky-100 via-teal-50 to-white flex flex-col items-center justify-center px-6 py-12 transition-all">
        {/* Card */}
        <div className="flex flex-col md:flex-row bg-white/90 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden w-full max-w-6xl transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl">
          {/* Left Side - Form */}
          <div className="w-full md:w-2/3 p-10 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Academics Feedback
            </h2>
            <p className="text-gray-600 mb-10">
              Rate your academic experience — syllabus, teaching methods, and
              doubt-solving approach.
            </p>

            {/* Rating Categories */}
            <div className="space-y-8">
              <RatingRow
                label="Syllabus Completion"
                value={ratings.syllabus}
                onChange={(val) => handleRating("syllabus", val)}
              />
              <RatingRow
                label="Teaching Methods"
                value={ratings.teaching}
                onChange={(val) => handleRating("teaching", val)}
              />
              <RatingRow
                label="Doubt Solving"
                value={ratings.doubts}
                onChange={(val) => handleRating("doubts", val)}
              />
            </div>

            {/* Feedback Box */}
            <textarea
              placeholder="Share your detailed feedback..."
              rows={4}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full mt-8 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            ></textarea>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
              <label className="cursor-pointer border border-gray-300 px-5 py-2 rounded-lg bg-sky-50 hover:bg-sky-100 text-gray-800 font-medium transition">
                Upload Picture
                <input type="file" className="hidden" />
              </label>
              
              <button
                onClick={handleSubmit}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-teal-400 text-white font-semibold shadow hover:shadow-lg hover:opacity-90 active:scale-95 transition-transform duration-200"
              >
                Submit Feedback
              </button>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="hidden md:flex w-full md:w-1/3 bg-gradient-to-br from-sky-200 via-sky-300 to-teal-200 items-center justify-center p-6">
            <img
              src="/feedback_photo.webp"
              alt="Feedback illustration"
              className="w-80 lg:w-96 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// ⭐ Rating Component
function RatingRow({ label, value, onChange }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-3">
      <p className="text-gray-700 font-medium w-full md:w-1/2">{label}</p>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            onClick={() => onChange(star)}
            className={`cursor-pointer text-2xl transition-transform duration-200 hover:scale-110 ${
              star <= value ? "text-yellow-400 drop-shadow-md" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
