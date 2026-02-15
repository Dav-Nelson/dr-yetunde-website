import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import dyImage from '../assets/dy.jpg';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between each child
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background animation (optional gradient shift) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-transparent"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto text-center z-10 relative"
      >
        {/* Hero Text – staggered */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-900 mb-6 tracking-tight"
        >
          Dr. Yetunde Abioye
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl md:text-2xl lg:text-3xl text-green-800 font-semibold mb-4"
        >
          Veterinary Doctor | One Health Leader | Public Health Advocate
        </motion.p>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10"
        >
          Senior Veterinary Officer at NCDC • Mandela Washington Fellow 2025 • National Lassa Fever Incident Manager
        </motion.p>

        {/* Photo & Quote – fade + scale */}
        <motion.div
          variants={item}
          className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white"
          >
            <img
              src={dyImage}
              alt="Dr. Yetunde Abioye - Professional Headshot"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            variants={item}
            className="max-w-xl text-center md:text-left"
          >
            <blockquote className="text-xl md:text-2xl italic text-gray-700 mb-6 border-l-4 border-green-600 pl-6">
              "Leading the charge in One Health, infectious disease control, and global collaboration."
            </blockquote>
            <p className="text-gray-600 font-medium">
              Committed to Antimicrobial Resistance, Zoonotic Diseases, and Community Health Impact.
            </p>
          </motion.div>
        </motion.div>

        {/* Call-to-Actions – staggered buttons with spring */}
        <motion.div
          variants={container}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-10"
        >
          <motion.div variants={item}>
            <Link
              to="/contact"
              className="btn-primary text-lg px-10 py-4 inline-block"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Contact & Bookings
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <Link
              to="/speaking"
              className="bg-white text-green-800 border-2 border-green-800 hover:bg-green-50 px-10 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-block"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              View Speaking Engagements
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <Link
              to="/blog"
              className="bg-white text-green-800 border-2 border-green-800 hover:bg-green-50 px-10 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-block"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Read Insights & Blog
            </Link>
          </motion.div>
        </motion.div>

        {/* Quick Highlights – staggered cards */}
        <motion.div
          variants={container}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <motion.div variants={item} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-green-800 mb-2">Mandela Washington Fellow 2025</h3>
            <p className="text-gray-600">Leadership in public health & global collaboration</p>
          </motion.div>

          <motion.div variants={item} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-green-800 mb-2">Lassa Fever Incident Manager</h3>
            <p className="text-gray-600">Coordinating national outbreak response at NCDC</p>
          </motion.div>

          <motion.div variants={item} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-green-800 mb-2">One Health Advocate</h3>
            <p className="text-gray-600">Bridging human, animal & environmental health</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}