import { NavLink } from 'react-router-dom';

const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    { to: "/speaking", label: "Speaking" },
    { to: "/contact", label: "Contact" },
];

export default function Navbar() {
    return (
        <nav className="bg-green-800 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo / Name */}
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="text-2xl font-bold">
                            Dr. Yetunde Abioye
                        </NavLink>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-8">
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
                    </div>

                    {/* Mobile menu button(we'll add hamburger later) */}
                    <div className="md:hidden">
                        <button className="text-white focus:outline-none">
                            {/* Hamburger icon - placeholder for now */}
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"  />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}