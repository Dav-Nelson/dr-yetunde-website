import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // ← add this import

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/speaking", label: "Speaking" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { user } = useAuth(); // ← get logged-in user
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold">
              Dr. Yetunde Abioye
            </NavLink>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-200 font-semibold border-b-2 border-green-200 pb-1"
                    : "hover:text-green-200 transition-colors"
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Admin link – only visible when logged in */}
            {user && (
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-200 font-semibold border-b-2 border-green-200 pb-1"
                    : "hover:text-green-200 transition-colors"
                }
              >
                Admin Dashboard
              </NavLink>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-700 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-900">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "block px-3 py-2 rounded-md text-base font-medium bg-green-700 text-white"
                    : "block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-green-700 hover:text-white"
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            {/* Mobile Admin link */}
            {user && (
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  isActive
                    ? "block px-3 py-2 rounded-md text-base font-medium bg-green-700 text-white"
                    : "block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-green-700 hover:text-white"
                }
                onClick={() => setIsOpen(false)}
              >
                Admin Dashboard
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}