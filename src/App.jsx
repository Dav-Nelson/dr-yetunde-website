import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AdminLayout from './components/layout/AdminLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Speaking from './pages/Speaking';
import Contact from './pages/Contact';
import LoginTest from './pages/LoginTest'; // temporary

// Admin
import AdminDashboard from './pages/admin/Dashboard';
import BlogManagement from './pages/admin/BlogManagement';
import SpeakingManagement from './pages/admin/SpeakingManagement';

// Optional: simple 404 component
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-green-800">404</h1>
        <p className="text-xl mt-4">Page not found</p>
        <a href="/" className="mt-6 inline-block bg-green-700 text-white px-6 py-3 rounded">
          Go Home
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Navbar with subtle entrance */}
        <motion.nav
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <Navbar />
        </motion.nav>

        {/* Main content with smooth page transitions */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              {/* Public routes with fade + slide entrance */}
              <Route
                path="/"
                element={
                  <motion.div
                    key="home"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                    <Home />
                  </motion.div>
                }
              />
              <Route
                path="/about"
                element={
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                    <About />
                  </motion.div>
                }
              />
              <Route
                path="/blog"
                element={
                  <motion.div
                    key="blog"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                    <Blog />
                  </motion.div>
                }
              />
              <Route
                path="/speaking"
                element={
                  <motion.div
                    key="speaking"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                    <Speaking />
                  </motion.div>
                }
              />
              <Route
                path="/contact"
                element={
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                    <Contact />
                  </motion.div>
                }
              />
              <Route path="/login-test" element={<LoginTest />} />

              {/* Protected admin routes with faster entrance */}
              <Route element={<AdminLayout />}>
                <Route
                  path="/admin"
                  element={
                    <motion.div
                      key="admin-dashboard"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                      <AdminDashboard />
                    </motion.div>
                  }
                />
                <Route
                  path="/admin/blog"
                  element={
                    <motion.div
                      key="admin-blog"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                      <BlogManagement />
                    </motion.div>
                  }
                />
                <Route
                  path="/admin/speaking"
                  element={
                    <motion.div
                      key="admin-speaking"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                      <SpeakingManagement />
                    </motion.div>
                  }
                />
              </Route>

              {/* 404 with gentle entrance */}
              <Route
                path="*"
                element={
                  <motion.div
                    key="not-found"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <NotFound />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Footer with delayed fade-in */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Footer />
        </motion.footer>
      </div>
    </Router>
  );
}

export default App;