import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import { uploadToCloudinary } from '../../utils/cloudinaryUpload';

export default function SpeakingManagement() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch events (sorted by date descending)
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
        setError('Failed to load events');
      }
    };
    fetchEvents();
  }, []);

  const handleCreateEvent = async (e) => {
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

      await addDoc(collection(db, 'speakingEngagements'), {
        title,
        date,
        location,
        topic,
        description,
        imageUrl,
        createdAt: new Date().toISOString(),
      });

      // Refresh list
      const q = query(collection(db, 'speakingEngagements'), orderBy('date', 'desc'));
      const querySnapshot = await getDocs(q);
      const eventsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(eventsData);

      // Clear form
      setTitle('');
      setDate('');
      setLocation('');
      setTopic('');
      setDescription('');
      setImageFile(null);

      setSuccess('Speaking engagement added successfully!');
    } catch (err) {
      setError(err.message || 'Failed to create event');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (eventId) => {
    if (!window.confirm('Are you sure you want to delete this speaking engagement?')) return;

    try {
      await deleteDoc(doc(db, 'speakingEngagements', eventId));
      setEvents(events.filter((e) => e.id !== eventId));
      setSuccess('Event deleted successfully');
    } catch (err) {
      setError('Failed to delete event');
    }
  };

  return (
    <div className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen pt-24 md:pt-32 lg:pt-36">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 mb-10 md:mb-12 text-center md:text-left">
          Manage Speaking Engagements
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

        {/* Create Event Form */}
        <form onSubmit={handleCreateEvent} className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-md border border-gray-100 mb-12">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Title
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

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                  Topic
                </label>
                <input
                  id="topic"
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all resize-y"
                  required
                />
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Photo
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
              disabled={uploading || !title || !date || !location || !topic || !description}
              className={`w-full md:w-auto px-10 py-4 rounded-xl font-semibold text-white transition-all duration-200 shadow-md ${
                uploading || !title || !date || !location || !topic || !description
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
                  Adding Event...
                </span>
              ) : (
                'Add New Event'
              )}
            </button>
          </div>
        </form>

        {/* Existing Events */}
        <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-8">
          Existing Events
        </h3>

        {events.length === 0 ? (
          <p className="text-gray-600 text-center py-12 italic">
            No events yet. Add your first one above.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {event.imageUrl && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-semibold text-green-900 mb-3 line-clamp-2">
                    {event.title}
                  </h4>

                  <div className="text-sm text-gray-500 mb-4">
                    {event.date && (
                      <time dateTime={event.date}>
                        {new Date(event.date).toLocaleDateString('en-GB', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    )}
                    {event.location && ` • ${event.location}`}
                  </div>

                  <p className="text-lg font-medium text-gray-700 mb-3">
                    Topic: {event.topic}
                  </p>

                  <p className="text-gray-800 leading-relaxed mb-6 flex-grow line-clamp-4">
                    {event.description}
                  </p>

                  <div className="mt-auto flex justify-end">
                    <button
                      onClick={() => handleDelete(event.id)}
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