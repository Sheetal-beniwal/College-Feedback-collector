import React from 'react';

function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-8">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl font-light leading-relaxed mb-8 text-gray-700">
          Have a question, suggestion, or just want to chat? We'd love to hear from you.
        </p>
      </div>

      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-xl border border-gray-200">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              placeholder="Your name "
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              placeholder="your mail"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-gray-900 text-white font-bold rounded-md hover:bg-gray-700 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;