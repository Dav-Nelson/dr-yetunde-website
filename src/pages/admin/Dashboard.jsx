import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-10 text-center md:text-left">
          Admin Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Link
            to="/admin/blog"
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
          >
            <h3 className="text-xl font-semibold text-green-800 mb-3 group-hover:text-green-700">
              Manage Blog Posts
            </h3>
            <p className="text-gray-600">
              Create, edit, and delete blog articles
            </p>
          </Link>

          <Link
            to="/admin/speaking"
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
          >
            <h3 className="text-xl font-semibold text-green-800 mb-3 group-hover:text-green-700">
              Manage Speaking Engagements
            </h3>
            <p className="text-gray-600">
              Add, edit, and update upcoming talks & events
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
