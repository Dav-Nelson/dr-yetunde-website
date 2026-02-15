import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // if you want internal links

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
      className="bg-gray-900 text-gray-300 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left - Bio short */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-xl font-bold text-white">Dr. Yetunde Abioye</h3>
            <p className="text-gray-400 leading-relaxed">
              Veterinary Doctor | Mandela Washington Fellow 2025<br />
              Senior Veterinary Officer, NCDC | One Health Advocate
            </p>
          </motion.div>

          {/* Middle - Quick Links */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/about" className="hover:text-green-400 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-green-400 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/speaking" className="hover:text-green-400 transition-colors duration-200">
                  Speaking Engagements
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-400 transition-colors duration-200">
                  Contact & Bookings
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Right - Social & Contact */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-xl font-bold text-white">Connect</h3>

            <div className="flex flex-wrap gap-6">
              <motion.a
                whileHover={{ scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                href="https://www.linkedin.com/in/dr-yetunde-abioye-711903173/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-2xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.118-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>

              {/* Twitter/X - placeholder */}
              <motion.a
                whileHover={{ scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X Profile (coming soon)"
                className="text-gray-500 hover:text-green-400 transition-colors duration-200 text-2xl cursor-not-allowed"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>

              {/* Instagram - placeholder */}
              <motion.a
                whileHover={{ scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile (coming soon)"
                className="text-gray-500 hover:text-green-400 transition-colors duration-200 text-2xl cursor-not-allowed"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
            </div>

            <p className="text-sm mt-6">
              Email: <a href="mailto:babyabioyebitcada@gmail.com" className="hover:text-green-400 transition-colors">
                babyabioyebitcada@gmail.com
              </a><br />
              WhatsApp: <a href="https://wa.me/2348030969306" className="hover:text-green-400 transition-colors">
                +234 803 096 9306
              </a>
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            variants={item}
            className="mt-12 pt-8 border-t border-gray-700 text-center text-sm col-span-full"
          >
            © {new Date().getFullYear()} Dr. Yetunde Abioye. All rights reserved.
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}