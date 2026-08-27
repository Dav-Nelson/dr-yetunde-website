import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, 'blogPosts', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError('Post not found.');
        }
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Failed to load this post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="inline-block animate-pulse text-xl font-medium text-green-700">
          Loading post...
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="py-20 text-center">
        <p className="text-xl text-red-600 font-medium mb-6">{error}</p>
        <Link
          to="/blog"
          className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition-colors shadow-md"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center text-green-700 hover:text-green-900 font-medium mb-8 transition-colors"
        >
          ← Back to Blog
        </Link>

        {post.featuredImageUrl && (
          <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
            <img
              src={post.featuredImageUrl}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <time dateTime={post.date} className="text-sm font-medium text-gray-500">
          {new Date(post.date).toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 mt-3 mb-8 tracking-tight">
          {post.title}
        </h1>

        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed whitespace-pre-line">
          {post.content}
        </div>
      </div>
    </div>
  );
}
