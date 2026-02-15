import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const cardItem = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
    serviceType: 'Consultation',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          service_type: formData.serviceType,
          to_email: 'babyabioyebitcada@gmail.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! Dr. Yetunde will get back to you soon.',
      });
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
        serviceType: 'Consultation',
      });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus({
        type: 'error',
        message:
          'Failed to send message. Please try again or contact via WhatsApp/email directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h1
          variants={item}
          className="text-4xl md:text-5xl font-bold text-green-800 mb-6 text-center"
        >
          Get in Touch
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto"
        >
          Whether you're interested in collaborations, speaking engagements, consultations, or just want to connect — I'd love to hear from you.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Left: Contact Info & Social */}
          <motion.div
            variants={cardItem}
            whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-green-800 mb-6">Connect With Me</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a
                  href="mailto:babyabioyebitcada@gmail.com"
                  className="text-green-700 hover:text-green-900 transition-colors"
                >
                  babyabioyebitcada@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/2348030969306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-green-900 transition-colors"
                >
                  +234 803 096 9306
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                <div className="flex flex-wrap gap-4 mt-2">
                  <a
                    href="https://www.linkedin.com/in/dr-yetunde-abioye-711903173/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:text-green-900 transition-colors font-medium"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 cursor-not-allowed"
                  >
                    Twitter/X (coming soon)
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 cursor-not-allowed"
                  >
                    Instagram (coming soon)
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form – staggered fields */}
          <motion.div variants={cardItem} className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={item}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                />
              </motion.div>

              <motion.div variants={item}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                />
              </motion.div>

              <motion.div variants={item}>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                  Inquiry Type
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                >
                  <option value="Consultation">Consultation / Veterinary Advice</option>
                  <option value="Speaking">Speaking Engagement Request</option>
                  <option value="Collaboration">Collaboration / Partnership</option>
                  <option value="General">General Inquiry</option>
                </select>
              </motion.div>

              <motion.div variants={item}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                />
              </motion.div>

              <motion.div variants={item}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                />
              </motion.div>

              <motion.div variants={item}>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-6 text-white font-medium rounded-md transition-colors ${
                    loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-700 hover:bg-green-800'
                  }`}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </motion.div>

              {status.message && (
                <motion.p
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className={`mt-4 text-center font-medium ${
                    status.type === 'success' ? 'text-green-700' : 'text-red-600'
                  }`}
                >
                  {status.message}
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}