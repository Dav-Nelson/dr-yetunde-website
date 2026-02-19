import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom'; // for future "Read more" links

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts. Please check your connection and try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="inline-block animate-pulse text-xl font-medium text-green-700">
          Loading blog posts...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center">
        <p className="text-xl text-red-600 font-medium mb-6">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition-colors shadow-md"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 mb-12 md:mb-16 text-center tracking-tight">
          Blog & Insights
        </h1>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-700 font-medium italic">
              No posts yet. Check back soon for new insights!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {post.featuredImageUrl && (
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.featuredImageUrl}
                      alt={`Featured image for blog post: ${post.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <time dateTime={post.date} className="font-medium">
                      {new Date(post.date).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4 group-hover:text-green-800 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-700 mb-6 line-clamp-3 flex-grow">
                    {post.excerpt || post.content.substring(0, 200) + '...'}
                  </p>

                  {/* Full content hidden for now – future single-post link */}
                  <Link
                    to={`/blog/${post.id}`} // placeholder for future single-post page
                    className="mt-auto inline-flex items-center text-green-700 hover:text-green-900 font-medium transition-colors"
                  >
                    Read full post →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}