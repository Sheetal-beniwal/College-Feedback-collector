export const submitFeedback = async (data) => {
  try {
    const formData = new FormData();

    for (const key in data) {
      if (data[key] !== null && data[key] !== undefined) {
        formData.append(key, data[key]);
      }
    }

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
    const res = await fetch(`${apiBaseUrl}/api/feedback`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to submit feedback");
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Feedback Submission Error:", error);
    throw error;
  }
};
