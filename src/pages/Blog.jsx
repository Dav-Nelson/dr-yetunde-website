import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, 'blogPosts'), orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);
        const postsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPosts(postsData);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="py-16 text-center">
        <p className="text-xl text-gray-600">Loading blog posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 text-center">
        <p className="text-red-600 text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-10 text-center">
          Blog & Insights
        </h1>

        {posts.length === 0 ? (
          <p className="text-center text-gray-600 text-xl">
            No posts yet. Check back soon!
          </p>
        ) : (
          <div className="space-y-10">
            {posts.map(post => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {post.featuredImageUrl && (
                  <div className="h-64 overflow-hidden">
                    <img
                      src={post.featuredImageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <time dateTime={post.date}>{post.date}</time>
                  </div>

                  <h2 className="text-2xl font-bold text-green-800 mb-4">
                    {post.title}
                  </h2>

                  <p className="text-gray-700 mb-6 line-clamp-3">
                    {post.excerpt || post.content.substring(0, 200) + '...'}
                  </p>

                  <div className="prose max-w-none text-gray-800">
                    {post.content}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}