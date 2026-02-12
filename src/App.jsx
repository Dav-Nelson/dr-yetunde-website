import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoginTest from './pages/LoginTest';

// Admin
import AdminLayout from './components/layout/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import BlogManagement from './pages/admin/BlogManagement';
import SpeakingManagement from './pages/admin/SpeakingManagement';


// Pages
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Speaking from './pages/Speaking';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/speaking" element={<Speaking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login-test" element={<LoginTest />} />
            <Route element={<AdminLayout />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/blog" element={<BlogManagement />} />
              <Route path="/admin/speaking" element={<SpeakingManagement />} />
              {/* Later:
                <Route path="/admin/blog" element={<AdminDashboard />} />
              */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;