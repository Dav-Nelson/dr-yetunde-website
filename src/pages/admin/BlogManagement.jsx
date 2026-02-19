import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import { uploadToCloudinary } from '../../utils/cloudinaryUpload';

export default function BlogManagement() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch posts (sorted by date descending)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, 'blogPosts'), orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);
        const postsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postsData);
      } catch (err) {
        setError('Failed to load posts');
      }
    };
    fetchPosts();
  }, []);

  const handleCreatePost = async (e) => {
    e.preventDefault();
    setUploading(true);
    setError('');
    setSuccess('');

    try {
      let imageUrl = '';
      if (imageFile) {
        const result = await uploadToCloudinary(imageFile);
        imageUrl = result.url;
      }

      await addDoc(collection(db, 'blogPosts'), {
        title,
        excerpt,
        content,
        date,
        featuredImageUrl: imageUrl,
        createdAt: new Date().toISOString(),
      });

      // Refresh list
      const q = query(collection(db, 'blogPosts'), orderBy('date', 'desc'));
      const querySnapshot = await getDocs(q);
      const postsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsData);

      // Clear form
      setTitle('');
      setExcerpt('');
      setContent('');
      setDate('');
      setImageFile(null);

      setSuccess('Blog post created successfully!');
    } catch (err) {
      setError(err.message || 'Failed to create post');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (postId) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    try {
      await deleteDoc(doc(db, 'blogPosts', postId));
      setPosts(posts.filter((p) => p.id !== postId));
      setSuccess('Post deleted successfully');
    } catch (err) {
      setError('Failed to delete post');
    }
  };

  return (
    <div className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen pt-24 md:pt-32 lg:pt-36">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 mb-10 md:mb-12 text-center md:text-left">
          Manage Blog Posts
        </h2>

        {/* Success / Error Messages */}
        {success && (
          <div className="mb-8 p-4 bg-green-100 border border-green-300 text-green-800 rounded-xl shadow-sm">
            {success}
          </div>
        )}
        {error && (
          <div className="mb-8 p-4 bg-red-100 border border-red-300 text-red-800 rounded-xl shadow-sm">
            {error}
          </div>
        )}

        {/* Create Post Form */}
        <form onSubmit={handleCreatePost} className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-md border border-gray-100 mb-12">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt (short summary)
                </label>
                <textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Content
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={10}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all resize-y"
                  required
                />
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                  Featured Image
                </label>
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                  disabled={uploading}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 disabled:opacity-50 transition-colors cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              disabled={uploading || !title || !excerpt || !content || !date}
              className={`w-full md:w-auto px-10 py-4 rounded-xl font-semibold text-white transition-all duration-200 shadow-md ${
                uploading || !title || !excerpt || !content || !date
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
                  Creating Post...
                </span>
              ) : (
                'Create New Post'
              )}
            </button>
          </div>
        </form>

        {/* Existing Posts */}
        <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-8">
          Existing Posts
        </h3>

        {posts.length === 0 ? (
          <p className="text-gray-600 text-center py-12 italic">
            No posts yet. Create your first one above.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {post.featuredImageUrl && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.featuredImageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-semibold text-green-900 mb-3 line-clamp-2">
                    {post.title}
                  </h4>

                  <div className="text-sm text-gray-500 mb-4">
                    {post.date && (
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-GB', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    )}
                  </div>

                  <p className="text-gray-700 mb-6 line-clamp-3 flex-grow">
                    {post.excerpt || post.content?.substring(0, 150) + '...'}
                  </p>

                  <div className="mt-auto flex justify-end">
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}