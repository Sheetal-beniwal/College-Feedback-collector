import { useState } from "react";
import { FaStar } from "react-icons/fa";
import FeedbackNavbar from "./FeedbackNavbar";
import { submitFeedback } from "../utils/submitFeedback";

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
    } catch (err) {
      alert("Failed to submit feedback. Check console.");
    }
  };

  return (
    <>
      <FeedbackNavbar />

      <div className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-pink-200 flex flex-col items-center p-4 py-12">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-white shadow-xl rounded-3xl overflow-hidden w-full max-w-5xl p-8 border border-pink-100"
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
              Feedback for Events
            </h2>
            <p className="text-gray-600 mt-2 italic">
              From stage lights to spotlights – tell us how the event felt for you!
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-center gap-12 w-full">
            {/* Feedback Form */}
            <div className="w-full md:w-[60%] space-y-8">
              {/* Event Name */}
              <div className="flex flex-col gap-2">
                <label className="text-lg font-bold text-pink-700">Event Name</label>
                <input
                  type="text"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  placeholder="Enter event name (e.g. Annual Fest)"
                  className="border-2 border-pink-100 rounded-xl px-4 py-3 w-full focus:ring-4 focus:ring-pink-200 focus:border-pink-400 outline-none transition-all"
                  required
                />
              </div>

              {/* Rating Categories */}
              <div className="space-y-6 bg-pink-50/50 p-6 rounded-2xl border border-pink-100">
                <RatingRow
                  label="Overall Experience"
                  value={ratings.experience}
                  onChange={(val) => handleRating("experience", val)}
                />
                <RatingRow
                  label="Refreshment Quality"
                  value={ratings.refreshments}
                  onChange={(val) => handleRating("refreshments", val)}
                />
                <RatingRow
                  label="Event Organization"
                  value={ratings.organization}
                  onChange={(val) => handleRating("organization", val)}
                />
              </div>

              {/* Feedback Box */}
              <div className="flex flex-col gap-2">
                <label className="text-lg font-bold text-pink-700">Your Thoughts</label>
                <textarea
                  placeholder="Share your detailed experience..."
                  rows={4}
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  className="w-full border-2 border-pink-100 rounded-xl px-4 py-3 focus:ring-4 focus:ring-pink-200 focus:border-pink-400 outline-none transition-all"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4">
                <label className="cursor-pointer border-2 border-dashed border-pink-300 px-6 py-3 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-700 font-semibold transition-all w-full sm:w-auto text-center">
                  {imageFile ? "✅ Picture Selected" : "📷 Upload Picture"}
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => setImageFile(e.target.files[0])}
                  />
                </label>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-pink-600 to-rose-500 text-white font-bold text-lg shadow-lg hover:shadow-pink-200 hover:-translate-y-1 transition-all"
                >
                  Submit Celebration
                </button>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="hidden md:flex flex-1 justify-center relative group w-full">
              <div className="absolute inset-0 bg-pink-400 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-all"></div>
              <img
                src="/feedback_photo.webp"
                alt="Event Illustration"
                className="relative w-full max-w-sm rounded-3xl shadow-2xl transition-transform duration-500 group-hover:rotate-1 group-hover:scale-105"
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
                ? "text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.4)] scale-110" 
                : "text-gray-300 hover:text-pink-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
