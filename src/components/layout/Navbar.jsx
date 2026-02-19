import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/speaking", label: "Speaking" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Normalize path (remove trailing slash)
  const currentPath = location.pathname.replace(/\/$/, '');

  // No name/logo at all on Home and About
  const isHeroPage = currentPath === '' || currentPath === '/about';

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-green-900 shadow-lg transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">
          {/* Left side: empty on Home/About, full name on other pages */}
          <div className="flex-shrink-0">
            {!isHeroPage && (
              <NavLink 
                to="/" 
                className="text-xl md:text-2xl font-bold tracking-tight text-white hover:text-green-200 transition-colors duration-300 drop-shadow-md"
              >
                Dr. Yetunde Abioye
              </NavLink>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-200 font-semibold border-b-2 border-green-200 pb-1 transition-all duration-300"
                    : "text-white hover:text-green-200 hover:border-b-2 hover:border-green-200 pb-1 transition-all duration-300"
                }
              >
                {item.label}
              </NavLink>
            ))}

            {user && (
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-200 font-semibold border-b-2 border-green-200 pb-1 transition-all duration-300"
                    : "text-white hover:text-green-200 hover:border-b-2 hover:border-green-200 pb-1 transition-all duration-300"
                }
              >
                Admin
              </NavLink>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300 transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3 bg-green-900 border-t border-green-700">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-3 rounded-lg text-base font-medium bg-green-700 text-white transition-colors"
                  : "block px-4 py-3 rounded-lg text-base font-medium text-gray-200 hover:bg-green-800 hover:text-white transition-colors"
              }
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          {user && (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-3 rounded-lg text-base font-medium bg-green-700 text-white transition-colors"
                  : "block px-4 py-3 rounded-lg text-base font-medium text-gray-200 hover:bg-green-800 hover:text-white transition-colors"
              }
              onClick={() => setIsOpen(false)}
            >
              Admin Dashboard
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}