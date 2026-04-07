import { useEffect, useState } from "react";
import FeedbackNavbar from "./FeedbackNavbar";

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
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
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
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-teal-50 to-white py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2 text-sky-600">
            Feedback Dashboard
          </h1>
          <p className="text-center text-gray-500 mb-8">All student feedbacks in one place</p>

          {/* Category Filter */}
          <div className="flex justify-center mb-10">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
            >
              {ALL_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* States */}
          {loading && (
            <p className="text-center text-sky-500 animate-pulse">Loading feedbacks...</p>
          )}
          {error && (
            <div className="text-center bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 max-w-lg mx-auto">
              ⚠️ {error}
            </div>
          )}

          {/* Feedback Cards */}
          {!loading && !error && feedbacks.length === 0 && (
            <p className="text-center text-gray-500">No feedbacks found for this category.</p>
          )}

          {!loading && !error && feedbacks.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {feedbacks.map((fb) => (
                <div
                  key={fb._id}
                  className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  {fb.image && (
                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"}/uploads/${fb.image}`}
                      alt="feedback"
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                  )}
                  <span className="inline-block text-xs font-semibold bg-sky-100 text-sky-700 px-2 py-1 rounded-full mb-2">
                    {fb.category}
                  </span>
                  <p className="text-gray-700 mb-3 text-sm">{fb.feedbackText || <em className="text-gray-400">No text provided</em>}</p>
                  {getRatingDisplay(fb).length > 0 && (
                    <div className="text-sm text-gray-500 space-y-1 mb-2">
                      {getRatingDisplay(fb).map(({ key, val }) => (
                        <p key={key}>⭐ <span className="capitalize">{key}</span>: <strong>{val}/5</strong></p>
                      ))}
                    </div>
                  )}
                  <p className="text-xs text-gray-400 mt-3 border-t border-gray-100 pt-2">
                    {new Date(fb.createdAt).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
