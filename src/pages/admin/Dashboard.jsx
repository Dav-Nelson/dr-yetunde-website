import { useState } from 'react';
import { Link } from 'react-router-dom';
import { uploadToCloudinary } from '../../utils/cloudinaryUpload';

export default function AdminDashboard() {
  const [file, setFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setError('');
    setUploadedUrl('');

    try {
      const result = await uploadToCloudinary(file);
      setUploadedUrl(result.url);
      alert('Image uploaded successfully! URL copied to clipboard.');
      navigator.clipboard.writeText(result.url); // auto-copy URL
    } catch (err) {
      setError(err.message || 'Upload failed. Please try again.');
    } finally {
      setUploading(false);
      setFile(null); // clear file input
    }
  };

  return (
    <div className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-10 text-center md:text-left">
          Admin Dashboard
        </h2>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
              Add and update upcoming talks & events
            </p>
          </Link>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Quick Stats
            </h3>
            <p className="text-gray-600 italic">
              Coming soon: post count, upcoming events...
            </p>
          </div>
        </div>

        {/* Test Image Upload Card */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h3 className="text-2xl font-semibold text-green-800 mb-6">
            Test Image Upload
          </h3>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setFile(e.target.files?.[0] || null);
                  setUploadedUrl('');
                  setError('');
                }}
                disabled={uploading}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 disabled:opacity-50 transition-colors"
              />
            </div>

            <button
              onClick={handleUpload}
              disabled={!file || uploading}
              className={`w-full md:w-auto px-8 py-3 rounded-lg font-medium text-white transition-all duration-200 shadow-md ${
                uploading || !file
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-700 hover:bg-green-800 hover:shadow-lg'
              }`}
            >
              {uploading ? (
                <span className="inline-flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Uploading...
                </span>
              ) : (
                'Upload to Cloudinary'
              )}
            </button>

            {uploadedUrl && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 font-medium mb-2">Upload successful!</p>
                <img
                  src={uploadedUrl}
                  alt="Uploaded preview"
                  className="max-w-xs rounded-lg shadow-md mb-4"
                />
                <p className="text-sm text-gray-600 break-all">
                  URL: <span className="font-mono">{uploadedUrl}</span>
                </p>
              </div>
            )}

            {error && (
              <p className="mt-4 text-red-600 font-medium bg-red-50 p-3 rounded-lg border border-red-200">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}