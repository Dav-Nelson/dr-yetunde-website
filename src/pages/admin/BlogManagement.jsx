import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { uploadToCloudinary } from '../../utils/cloudinaryUpload';

export default function BlogManagement () {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Fetch existing posts
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'blogPosts'));
                const postsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
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
        setLoading(true);
        setError('');

        try {
            let imageUrl = '';
            if (imageFile) {
                const uploadResult = await uploadToCloudinary(imageFile);
                imageUrl = uploadResult.url;
            }

        await addDoc(collection(db, 'blogPosts'), {
            title,
            excerpt,
            content,
            date,
            featuredImageUrl: imageUrl,
            createdAt: new Date().toISOString()
        });

        // Refresh list
        const querySnapshot = await getDocs(collection(db, 'blogPosts'));
        const postData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setPosts(postData);

        //Clear form
        setTitle('');
        setExcerpt('');
        setContent('');
        setDate('');
        setImageFile(null);

        alert('Post created successfully!');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (postId) => {
        if (!window.confirm('Delete this post?')) return;
        try {
            await deleteDoc(doc(db, 'blogPosts', postId));
            setPosts(posts.filter(p => p.id !== postId));
            alert('Post deleted');
        } catch (err) {
            alert('Delete failed');
        }
    };

    return (
        <div>
            <h2 className="text-3xl font-bold mb-6">Manage Blog Posts</h2>

            {/* Create Form */}
            <form onSubmit={handleCreatePost} className="bg-white p-6 rounded-lg shadow mb-8 space-y-4">
                <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="w-full p-3 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Excerpt (short summary)</label>
                    <textarea
                        value={excerpt}
                        onChange={e => setExcerpt(e.target.value)}
                        className="w-full p-3 border rounded h-20"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        className="w-full p-3 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Featured Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={e => setImageFile(e.target.files[0])}
                        className="mb-2"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 disabled:bg-gray-400"
                >
                    {loading ? 'Creating...' : 'Create Post'}
                </button>

                {error && <p className="text-red-600 mt-2">{error}</p>}
            </form>

            {/* Post List */}
            <h3 className="text-2xl font-semibold mb-4">Existing Posts</h3>
            {posts.length === 0 ? (
                <p>No posts yet</p>
            ) : (
                <div className="space-y-4">
                    {posts.map(post => (
                        <div key={post.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-start">
                            <div>
                                <h4 className="font-bold">{post.title}</h4>
                                <p className="text-sm text-gray-600">{post.date}</p>
                                {post.featuredImageUrl && (
                                    <img src={post.featuredImageUrl} alt={post.title} className="w-32 h-32 object-cover mt-2 rounded" />
                                )}
                            </div>
                            <button
                                onClick={() => handleDelete(post.id)}
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
                )}
        </div>
    );
}

