import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { auth } from '../../firebase';

export default function AdminLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-lg text-gray-600 font-medium">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-green-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
              Admin Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            <span className="text-xs sm:text-sm md:text-base text-green-100 hidden md:block">
              {user.email}
            </span>
            <button
              onClick={() => auth.signOut()}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 sm:px-5 rounded-lg text-sm sm:text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-green-900 shadow-sm"
              aria-label="Log out from admin dashboard"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-white">
        <Outlet />
      </main>
    </div>
  );
}
