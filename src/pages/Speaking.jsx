import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

export default function Speaking() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const q = query(collection(db, 'speakingEngagements'), orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);
        const eventsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setEvents(eventsData);
      } catch (err) {
        setError("Failed to load speaking engagements.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <div className="py-16 text-center">Loading...</div>;
  if (error) return <div className="py-16 text-center text-red-600">{error}</div>;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-10 text-center">
          Speaking Engagements
        </h1>

        {events.length === 0 ? (
          <p className="text-center text-gray-600 text-xl">No engagements yet. Check back soon!</p>
        ) : (
          <div className="space-y-10">
            {events.map(event => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {event.imageUrl && (
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full md:w-64 h-64 object-cover rounded-lg"
                    />
                  )}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-green-800 mb-3">{event.title}</h2>
                    <p className="text-gray-600 mb-2">
                      <strong>Date:</strong>{" "}
                      <time dateTime={event.date}>
                        {new Date(event.date).toLocaleDateString('en-GB', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time> • <strong>Location:</strong> {event.location}
                    </p>
                    <p className="text-gray-700 mb-4"><strong>Topic:</strong> {event.topic}</p>
                    <p className="text-gray-800">{event.description}</p>
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