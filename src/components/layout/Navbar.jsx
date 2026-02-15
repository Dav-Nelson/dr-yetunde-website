import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/speaking", label: "Speaking" },
  { to: "/contact", label: "Contact" },
];

const container = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Navbar() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial="hidden"
      animate="show"
      variants={container}
      className="bg-green-800 text-white shadow-lg"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <motion.div
            variants={item}
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <NavLink to="/" className="text-2xl font-bold">
              Dr. Yetunde Abioye
            </NavLink>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <motion.div key={item.to} variants={item}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-200 font-semibold border-b-2 border-green-200 pb-1"
                      : "hover:text-green-200 transition-colors duration-200"
                  }
                  aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}

            {/* Admin link */}
            {user && (
              <motion.div variants={item}>
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-200 font-semibold border-b-2 border-green-200 pb-1"
                      : "hover:text-green-200 transition-colors duration-200"
                  }
                  aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  Admin Dashboard
                </NavLink>
              </motion.div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle main menu"
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu – animated slide down */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
            id="mobile-menu"
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-900"
            >
              {navItems.map((item) => (
                <motion.div key={item.to} variants={item}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      isActive
                        ? "block px-3 py-2 rounded-md text-base font-medium bg-green-700 text-white"
                        : "block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-green-700 hover:text-white transition-colors duration-200"
                    }
                    onClick={() => setIsOpen(false)}
                    aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}

              {user && (
                <motion.div variants={item}>
                  <NavLink
                    to="/admin"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-3 py-2 rounded-md text-base font-medium bg-green-700 text-white"
                        : "block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-green-700 hover:text-white transition-colors duration-200"
                    }
                    onClick={() => setIsOpen(false)}
                    aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                  >
                    Admin Dashboard
                  </NavLink>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}