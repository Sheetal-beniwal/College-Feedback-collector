export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white py-24 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Empowering Student <span className="text-emerald-600">Voices</span> 
            for a Better Campus
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            CampusPulse is more than a feedback tool. It's a platform built for students, by students, 
            to bridge the gap between expectations and reality in college life.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <p className="text-4xl font-bold text-emerald-600">5,000+</p>
              <p className="text-gray-500 font-medium mt-1">Students Reached</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-sky-600">100%</p>
              <p className="text-gray-500 font-medium mt-1">Transparency</p>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -inset-4 bg-emerald-100/50 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
          <img 
            src="/feedback_page.jpg" 
            alt="About Us" 
            className="w-full rounded-2xl shadow-2xl border-2 border-emerald-50 transform hover:scale-105 transition-all duration-700" 
          />
        </div>
      </div>
    </div>
  );
}
