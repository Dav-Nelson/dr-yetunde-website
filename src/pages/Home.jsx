import dyImage from '../assets/dy.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-green-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center z-10">
        {/* Hero Text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-green-900 mb-6 tracking-tight leading-tight">
          Dr. Yetunde Abioye
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-green-800 font-medium mb-4">
          Veterinary Doctor | One Health Advocate | Public Health Leader
        </p>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-12">
          Senior Veterinary Officer at NCDC • Mandela Washington Fellow 2025 • National Lassa Fever Incident Manager
        </p>

        {/* Photo & Tagline Card */}
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 max-w-3xl mx-auto transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex flex-col items-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-white shadow-2xl mb-6">
              <img
                src={dyImage}
                alt="Dr. Yetunde Abioye - Professional portrait"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <blockquote className="text-lg sm:text-xl italic text-gray-700 mb-6 max-w-2xl">
              "Leading the charge in One Health, infectious disease control, and global collaboration."
            </blockquote>

            <p className="text-base text-gray-600 font-medium">
              Committed to bridging human, animal, and environmental health for a safer world.
            </p>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 md:gap-8 justify-center mt-12 md:mt-16">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-green-700 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-800 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Contact & Bookings
          </Link>

          <Link
            to="/speaking"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-green-800 text-lg font-semibold rounded-lg border-2 border-green-800 hover:bg-green-50 hover:shadow-md transition-all duration-300"
          >
            View Speaking Engagements
          </Link>

          <Link
            to="/blog"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-green-800 text-lg font-semibold rounded-lg border-2 border-green-800 hover:bg-green-50 hover:shadow-md transition-all duration-300"
          >
            Read Insights & Blog
          </Link>
        </div>
      </div>
    </div>
  );
}