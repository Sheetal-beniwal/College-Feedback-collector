export default function ContactUs() {
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
          <div className="grid md:grid-cols-2 gap-8">
            <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-emerald-400 outline-none" />
            <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-emerald-400 outline-none" />
            <textarea placeholder="How can we help?" className="md:col-span-2 w-full bg-gray-50 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-emerald-400 outline-none h-32"></textarea>
            <button className="bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

