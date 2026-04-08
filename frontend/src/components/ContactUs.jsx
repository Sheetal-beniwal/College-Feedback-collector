import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: 'Sending...' });

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "https://college-feedback-collector-1.onrender.com";
      const res = await fetch(`${apiBaseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let result = {};
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        result = await res.json();
      } else {
        throw new Error(`Server returned no JSON. Status: ${res.status}. This usually means Render is still deploying or sleeping.`);
      }

      if (!res.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      setStatus({ state: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus({ state: 'error', message: error.message || 'Something went wrong. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600">Have questions or want to partner with us? We'd love to hear from you.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">📧</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Email Address</h3>
            <p className="text-gray-500">sheetalbeniwal60@gmail.com</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Phone Support</h3>
            <p className="text-gray-500">+91 9992365033</p>
            <p className="text-gray-500">Mon - Fri, 9am - 6pm</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Visit Office</h3>
            <p className="text-gray-500">Main Campus, IT Block</p>
            <p className="text-gray-500">New Delhi, India</p>
          </div>
        </div>

        <div className="mt-16 bg-white p-10 rounded-3xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-8">Send us a direct message</h3>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name" 
              required
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-emerald-400 outline-none" 
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address" 
              required
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-emerald-400 outline-none" 
            />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help?" 
              required
              className="md:col-span-2 w-full bg-gray-50 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-emerald-400 outline-none h-32"
            ></textarea>
            
            <div className="md:col-span-2 flex flex-col md:flex-row items-center gap-4">
              <button 
                type="submit" 
                disabled={status.state === 'loading'}
                className="w-full md:w-auto bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200 disabled:opacity-70"
              >
                {status.state === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status.message && (
                <div className={`px-4 py-3 rounded-xl flex-1 ${status.state === 'success' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                  {status.message}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

