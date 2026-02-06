import { useState } from 'react';
import { uploadToCloudinary } from '../../utils/cloudinaryUpload';

export default function AdminDashboard() {
    const [file, setFile] = useState(null);
    const [uploadedUrl, setUploadedUrl] = useState('');
    const [error, setError] = useState('');

    const handleUpload = async () => {
        if (!file) return;
        try {
            const result = await uploadToCloudinary(file);
            setUploadedUrl(result.url);
            alert('Image uploaded! URL: ' + result.url);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2 className="text-3xl text-green-800 font-bold mb-6">Admin Dashboard</h2>

            {/* Test upload */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h3 className="text-xl mb-4">Test Image Upload</h3>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="mb-4"
                />
                <button
                    onClick={handleUpload}
                    disabled={!file}
                    className="bg-green-700 text-white px-6 py-3 rounded disabled:bg-gray-400"
                >
                    Upload to Cloudinary
                </button>
                {uploadedUrl && (
                    <div className="mt-4">
                        <p>Uploaded:</p>
                        <img src={uploadedUrl} alt="uploaded" className="max-w-xs mt-2" />
                    </div>
                )}
                {error && <p className="text-red-600 mt-3">{error}</p>}
            </div>

            {/* Rest of dashboard */}
        </div>
    );
}