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
      // Optional: show toast instead of alert
      alert(`Image uploaded successfully!\nURL: ${result.url}`);
    } catch (err) {
      setError(err.message || 'Upload failed. Please try again.');
    } finally {
      setUploading(false);
      setFile(null); // clear file input after upload
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-green-800">
        Welcome to the Admin Dashboard
      </h2>

      {/* Quick Stats / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-green-800">Blog Posts</h3>
          <p className="text-gray-600 mb-4">Manage your articles and insights</p>
          <Link
            to="/admin/blog"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition-colors"
          >
            Go to Blog Management
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-green-800">Speaking Engagements</h3>
          <p className="text-gray-600 mb-4">Add and update talks & events</p>
          <Link
            to="/admin/speaking"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition-colors"
          >
            Go to Speaking Management
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-green-800">Quick Upload</h3>
          <p className="text-gray-600 mb-4">Test or upload images here</p>
          {/* Keep test upload below */}
        </div>
      </div>

      {/* Test / Quick Upload Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4 text-green-800">Quick Image Upload</h3>
        
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Select image (optional for testing)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setFile(e.target.files?.[0] || null);
              setUploadedUrl(''); // clear previous
              setError('');
            }}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
            disabled={uploading}
          />

          <button
            onClick={handleUpload}
            disabled={!file || uploading}
            className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2"
          >
            {uploading ? 'Uploading...' : 'Upload Image'}
          </button>

          {uploadedUrl && (
            <div className="mt-4">
              <p className="text-sm font-medium text-green-700">Upload successful!</p>
              <img
                src={uploadedUrl}
                alt="Uploaded preview"
                className="max-w-xs mt-2 rounded shadow"
              />
              <p className="mt-2 text-sm text-gray-600 break-all">
                URL: <span className="font-mono">{uploadedUrl}</span>
              </p>
            </div>
          )}

          {error && (
            <p className="text-red-600 mt-3 font-medium">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}