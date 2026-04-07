import { useState } from "react";
import { FaStar } from "react-icons/fa";
import FeedbackNavbar from "./FeedbackNavbar";
import { submitFeedback } from "../utils/submitFeedback"; // 👈 import helper

export default function Academics() {
  const [ratings, setRatings] = useState({
    syllabus: 0,
    teaching: 0,
    doubts: 0,
  });
  const [feedbackText, setFeedbackText] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleRating = (category, value) => {
    setRatings({ ...ratings, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ratings.syllabus === 0 || ratings.teaching === 0 || ratings.doubts === 0) {
      alert("Please provide all ratings.");
      return;
    }

    try {
      await submitFeedback({
        ...ratings,
        feedbackText,
        image: imageFile,
        category: "Academics",
      });

      alert("Feedback submitted successfully!");
      setFeedbackText("");
      setImageFile(null);
      setRatings({ syllabus: 0, teaching: 0, doubts: 0 });
    } catch(err) { console.error(err);
      alert("Failed to submit feedback.");
    }
  };

  return (
    <>
      <FeedbackNavbar />
      <div className="min-h-screen bg-gradient-to-br from-sky-100 via-teal-50 to-white flex flex-col items-center justify-center px-6 py-12">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-6xl border border-sky-100"
        >
          <div className="w-full md:w-2/3 p-8 md:p-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
              Academics Feedback
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              Rate your academic experience — syllabus, teaching methods, and
              doubt-solving approach.
            </p>

            <div className="space-y-8">
              <div className="space-y-6 bg-sky-50/50 p-6 rounded-2xl border border-sky-100">
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

              <div className="flex flex-col gap-2">
                <label className="text-lg font-bold text-sky-800">Detailed Feedback</label>
                <textarea
                  placeholder="Share your thoughts on the curriculum or teaching..."
                  rows={4}
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  className="w-full border-2 border-sky-50 rounded-xl px-5 py-3 focus:ring-4 focus:ring-sky-100 focus:border-sky-400 outline-none transition-all bg-sky-50/30"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4">
                <label className="cursor-pointer border-2 border-dashed border-sky-300 px-6 py-3 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 font-semibold transition-all w-full sm:w-auto text-center">
                  {imageFile ? "✅ Picture Selected" : "📷 Upload Picture"}
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => setImageFile(e.target.files[0])}
                  />
                </label>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-sky-600 to-teal-500 text-white font-bold text-lg shadow-lg hover:shadow-sky-200 hover:-translate-y-1 transition-all"
                >
                  Submit Academics Review
                </button>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-1 bg-sky-50 items-center justify-center p-12 order-first md:order-last">
            <div className="relative group">
              <div className="absolute inset-0 bg-sky-400 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-all"></div>
              <img
                src="/feedback_page.jpg"
                alt="Academics Illustration"
                className="relative w-full max-w-sm rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

function RatingRow({ label, value, onChange }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="text-gray-700 font-semibold">{label}</p>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            onClick={() => onChange(star)}
            className={`cursor-pointer text-3xl transition-all duration-150 ${
              star <= value 
                ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)] scale-110" 
                : "text-gray-300 hover:text-yellow-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
