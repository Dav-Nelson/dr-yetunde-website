import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { uploadToCloudinary } from '../../utils/cloudinaryUpload';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardItem = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function SpeakingManagement() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [error, setError] = useState('');
  const [editingEvent, setEditingEvent] = useState(null);

  // Form states
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const q = query(collection(db, 'speakingEngagements'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const eventsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEvents(eventsData);
      } catch (err) {
        setError('Failed to load events. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const startEdit = (event) => {
    setEditingEvent(event);
    setTitle(event.title);
    setDate(event.date);
    setLocation(event.location);
    setTopic(event.topic);
    setDescription(event.description);
    setImageFile(null);
    setError('');
  };

  const cancelEdit = () => {
    setEditingEvent(null);
    setTitle('');
    setDate('');
    setLocation('');
    setTopic('');
    setDescription('');
    setImageFile(null);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    setError('');

    try {
      let imageUrl = editingEvent?.imageUrl || '';

      if (imageFile) {
        const uploadResult = await uploadToCloudinary(imageFile);
        imageUrl = uploadResult.url;
      }

      const eventData = {
        title,
        date,
        location,
        topic,
        description,
        imageUrl,
        createdAt: editingEvent ? editingEvent.createdAt : new Date().toISOString(),
      };

      if (editingEvent) {
        await updateDoc(doc(db, 'speakingEngagements', editingEvent.id), eventData);
        alert('Event updated successfully!');
      } else {
        await addDoc(collection(db, 'speakingEngagements'), eventData);
        alert('Event added successfully!');
      }

      const q = query(collection(db, 'speakingEngagements'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const eventsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(eventsData);

      cancelEdit();
    } catch (err) {
      setError(err.message || 'Operation failed. Please try again.');
      console.error(err);
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (eventId) => {
    if (!window.confirm('Are you sure you want to delete this event?')) return;

    try {
      await deleteDoc(doc(db, 'speakingEngagements', eventId));
      setEvents(events.filter((e) => e.id !== eventId));
      alert('Event deleted successfully');
    } catch (err) {
      alert('Delete failed. Please try again.');
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-gray-600 animate-pulse"
        >
          Loading events...
        </motion.p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="space-y-8"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl font-bold text-green-800"
      >
        {editingEvent ? 'Edit Speaking Engagement' : 'Manage Speaking Engagements'}
      </motion.h2>

      {/* Form – staggered fields */}
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow space-y-5"
      >
        <motion.div variants={item}>
          <label htmlFor="title" className="block mb-1 font-medium">
            Event Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-green-300 outline-none"
            required
          />
        </motion.div>

        <motion.div variants={item}>
          <label htmlFor="date" className="block mb-1 font-medium">
            Date
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-green-300 outline-none"
            required
          />
        </motion.div>

        <motion.div variants={item}>
          <label htmlFor="location" className="block mb-1 font-medium">
            Location
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-green-300 outline-none"
            required
          />
        </motion.div>

        <motion.div variants={item}>
          <label htmlFor="topic" className="block mb-1 font-medium">
            Topic
          </label>
          <input
            id="topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-green-300 outline-none"
            required
          />
        </motion.div>

        <motion.div variants={item}>
          <label htmlFor="description" className="block mb-1 font-medium">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border rounded h-32 focus:ring-2 focus:ring-green-300 outline-none"
            required
          />
        </motion.div>

        <motion.div variants={item}>
          <label htmlFor="image" className="block mb-1 font-medium">
            Event Photo {editingEvent && '(leave blank to keep current)'}
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
          />
          {editingEvent?.imageUrl && !imageFile && (
            <div className="mt-2">
              <p className="text-sm text-gray-600">Current photo:</p>
              <img
                src={editingEvent.imageUrl}
                alt={editingEvent.title}
                className="w-32 h-32 object-cover rounded mt-1"
              />
            </div>
          )}
        </motion.div>

        <motion.div variants={item} className="flex space-x-4">
          <button
            type="submit"
            disabled={formLoading}
            className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 disabled:bg-gray-400 transition-colors"
          >
            {formLoading
              ? 'Saving...'
              : editingEvent
              ? 'Update Event'
              : 'Add Event'}
          </button>

          {editingEvent && (
            <button
              type="button"
              onClick={cancelEdit}
              className="bg-gray-500 text-white px-6 py-3 rounded hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          )}
        </motion.div>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-red-600 font-medium"
          >
            {error}
          </motion.p>
        )}
      </motion.form>

      {/* Event List – staggered */}
      <motion.div variants={container} className="space-y-4">
        <motion.h3
          variants={item}
          className="text-2xl font-semibold mb-4"
        >
          Existing Events
        </motion.h3>

        {events.length === 0 ? (
          <motion.p variants={item} className="text-gray-600">
            No events yet. Add one above.
          </motion.p>
        ) : (
          events.map((event) => (
            <motion.div
              key={event.id}
              variants={cardItem}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white p-5 rounded-lg shadow flex flex-col sm:flex-row justify-between items-start gap-4"
            >
              <div className="flex-1">
                <h4 className="font-bold text-lg">{event.title}</h4>
                <p className="text-sm text-gray-600">
                  {event.date} • {event.location}
                </p>
                <p className="text-gray-700 mt-1 font-medium">{event.topic}</p>
                {event.imageUrl && (
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-32 h-32 object-cover mt-3 rounded"
                  />
                )}
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => startEdit(event)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>
    </motion.div>
  );
}