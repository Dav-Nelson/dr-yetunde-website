import { motion } from 'framer-motion';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { auth } from '../../firebase';

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const header = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

export default function AdminLayout() {
  const { user, loading, error } = useAuth();

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex items-center justify-center bg-gray-50"
      >
        <p className="text-xl font-medium text-gray-700">Loading admin dashboard...</p>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex items-center justify-center bg-gray-50 p-4"
      >
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Authentication Error</h1>
          <p className="text-gray-700">{error}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.reload()}
            className="mt-6 bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition-colors"
          >
            Retry
          </motion.button>
        </div>
      </motion.div>
    );
  }

  if (!user) {
    return <Navigate to="/login-test" replace />;
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen bg-gray-100"
    >
      {/* Admin header */}
      <motion.header
        variants={header}
        className="bg-green-800 text-white shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">
            Admin Dashboard - Dr. Yetunde Abioye
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm md:text-base hidden sm:inline">
              {user.email}
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              onClick={() => auth.signOut()}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2"
              aria-label="Log out"
            >
              Logout
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Main content – fades in after header */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-7xl mx-auto p-6 md:p-8"
      >
        <Outlet /> {/* Child admin pages render here */}
      </motion.main>
    </motion.div>
  );
}