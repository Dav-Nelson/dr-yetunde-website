import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between each event card
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Speaking() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const q = query(collection(db, 'speakingEngagements'), orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);
        const eventsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEvents(eventsData);
      } catch (err) {
        console.error('Error fetching speaking engagements:', err);
        setError('Failed to load speaking engagements. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="py-16 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-gray-600 animate-pulse"
        >
          Loading engagements...
        </motion.p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-red-600 text-xl font-medium"
        >
          {error}
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.location.reload()}
          className="mt-6 bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition-colors"
        >
          Retry
        </motion.button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-green-800 mb-10 text-center"
        >
          Speaking Engagements
        </motion.h1>

        {events.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center text-gray-600 text-xl italic"
          >
            No engagements scheduled yet. Check back soon!
          </motion.p>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-12"
          >
            {events.map((event) => (
              <motion.article
                key={event.id}
                variants={item}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                role="article"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  {event.imageUrl && (
                    <div className="md:w-64 lg:w-80 flex-shrink-0 overflow-hidden">
                      <motion.img
                        src={event.imageUrl}
                        alt={`Photo from speaking event: ${event.title}`}
                        className="w-full h-64 md:h-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}

                  <div className="flex-1 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
                      {event.title}
                    </h2>

                    <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4 gap-4">
                      <time dateTime={event.date}>
                        {new Date(event.date).toLocaleDateString('en-GB', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span>•</span>
                      <span className="font-medium">{event.location}</span>
                    </div>

                    <p className="text-lg font-medium text-gray-700 mb-3">
                      Topic: {event.topic}
                    </p>

                    <p className="text-gray-800 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}