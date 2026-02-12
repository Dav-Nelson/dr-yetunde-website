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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch events
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
        setError('Failed to load events');
      }
    };
    fetchEvents();
  }, []);

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let imageUrl = '';
      if (imageFile) {
        const uploadResult = await uploadToCloudinary(imageFile);
        imageUrl = uploadResult.url;
      }

      await addDoc(collection(db, 'speakingEngagements'), {
        title,
        date,
        location,
        topic,
        description,
        imageUrl,
        createdAt: new Date().toISOString()
      });

      // Refresh list
      const q = query(collection(db, 'speakingEngagements'), orderBy('date', 'desc'));
      const querySnapshot = await getDocs(q);
      const eventsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setEvents(eventsData);

      // Clear form
      setTitle('');
      setDate('');
      setLocation('');
      setTopic('');
      setDescription('');
      setImageFile(null);

      alert('Event added successfully!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (eventId) => {
    if (!window.confirm('Delete this event?')) return;
    try {
      await deleteDoc(doc(db, 'speakingEngagements', eventId));
      setEvents(events.filter(e => e.id !== eventId));
      alert('Event deleted');
    } catch (err) {
      alert('Delete failed');
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Manage Speaking Engagements</h2>

      {/* Create Form */}
      <form onSubmit={handleCreateEvent} className="bg-white p-6 rounded-lg shadow mb-8 space-y-4">
        <div>
          <label className="block mb-1 font-medium">Event Title</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full p-3 border rounded"
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
          <label className="block mb-1 font-medium">Location</label>
          <input
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="w-full p-3 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Topic</label>
          <input
            type="text"
            value={topic}
            onChange={e => setTopic(e.target.value)}
            className="w-full p-3 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full p-3 border rounded h-32"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Event Photo</label>
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
          {loading ? 'Adding...' : 'Add Event'}
        </button>

        {error && <p className="text-red-600 mt-2">{error}</p>}
      </form>

      {/* Event List */}
      <h3 className="text-2xl font-semibold mb-4">Existing Events</h3>
      {events.length === 0 ? (
        <p>No events yet</p>
      ) : (
        <div className="space-y-4">
          {events.map(event => (
            <div key={event.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-start">
              <div>
                <h4 className="font-bold">{event.title}</h4>
                <p className="text-sm text-gray-600">{event.date} • {event.location}</p>
                <p className="text-gray-700 mt-1">{event.topic}</p>
                {event.imageUrl && (
                  <img src={event.imageUrl} alt={event.title} className="w-32 h-32 object-cover mt-2 rounded" />
                )}
              </div>
              <button
                onClick={() => handleDelete(event.id)}
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