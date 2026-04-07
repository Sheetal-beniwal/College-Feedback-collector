import { useState } from "react";
import { FaStar } from "react-icons/fa";
import FeedbackNavbar from "../FeedbackNavbar";
import { submitFeedback } from "../../utils/submitFeedback";

export default function Labs() {
  const [ratings, setRatings] = useState({
    seating: 0,
    equipment: 0,
    cleanliness: 0,
  });
  const [labNo, setLabNo] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleRating = (category, value) => {
    setRatings({ ...ratings, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!labNo) {
      alert("Please enter the Lab number/name.");
      return;
    }
  
    try {
      await submitFeedback({
        labNo,
        ...ratings,
        feedbackText,
        image: imageFile,
        category: "Labs",
      });
  
      alert("Feedback submitted successfully!");
      setLabNo("");
      setFeedbackText("");
      setImageFile(null);
      setRatings({ seating: 0, equipment: 0, cleanliness: 0 });
    } catch(err) { console.error(err);
      alert("Failed to submit feedback.");
    }
  };
  

  return (
    <>
      <FeedbackNavbar />

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 px-6 py-12">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-6xl border border-emerald-100"
        >
          {/* Feedback Form */}
          <div className="w-full md:w-2/3 p-8 md:p-12">
            <h2 className="text-4xl font-extrabold text-emerald-900 mb-2">
              Labs Feedback
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              Is the lab equipment up to mark? Help us maintain a high-quality practical learning environment.
            </p>

            <div className="space-y-8">
              {/* Title + Input */}
              <div className="flex flex-col gap-2">
                <label className="text-lg font-bold text-emerald-800">Lab Name / Number</label>
                <input
                  type="text"
                  value={labNo}
                  onChange={(e) => setLabNo(e.target.value)}
                  placeholder="e.g. Computer Lab 3"
                  className="border-2 border-emerald-50 rounded-xl px-5 py-3 w-full md:w-64 focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 outline-none transition-all bg-emerald-50/30"
                  required
                />
              </div>

              {/* Rating Categories */}
              <div className="space-y-6 bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                <RatingRow
                  label="Seating & Workspace Comfort"
                  value={ratings.seating}
                  onChange={(val) => handleRating("seating", val)}
                />
                <RatingRow
                  label="Equipment & Internet Quality"
                  value={ratings.equipment}
                  onChange={(val) => handleRating("equipment", val)}
                />
                <RatingRow
                  label="Cleanliness & Maintenance"
                  value={ratings.cleanliness}
                  onChange={(val) => handleRating("cleanliness", val)}
                />
              </div>

              {/* Feedback Box */}
              <div className="flex flex-col gap-2">
                <label className="text-lg font-bold text-emerald-800">Your Observations</label>
                <textarea
                  placeholder="Tell us about the software, hardware, or overall lab state..."
                  rows={4}
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  className="w-full border-2 border-emerald-50 rounded-xl px-5 py-3 focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 outline-none transition-all bg-emerald-50/30"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4">
                <label className="cursor-pointer border-2 border-dashed border-emerald-300 px-6 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold transition-all w-full sm:w-auto text-center">
                  {imageFile ? "✅ Picture Selected" : "📷 Upload Picture"}
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => setImageFile(e.target.files[0])}
                  />
                </label>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-lg shadow-lg hover:shadow-emerald-200 hover:-translate-y-1 transition-all"
                >
                  Submit Labs Report
                </button>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden md:flex flex-1 bg-emerald-50 items-center justify-center p-12 order-first md:order-last">
            <div className="relative group">
              <div className="absolute inset-0 bg-emerald-400 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-all"></div>
              <img
                src="/academics.png"
                alt="Lab Illustration"
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
                ? "text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)] scale-110" 
                : "text-gray-300 hover:text-emerald-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
