import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (user) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResetMessage('');
    setSubmitting(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleForgotPassword = async () => {
    setError('');
    setResetMessage('');

    if (!email) {
      setError('Enter your email above first, then click "Forgot password?"');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setResetMessage('Password reset email sent — check your inbox.');
    } catch (err) {
      setError('Could not send reset email. Check the address and try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-16">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
        <h1 className="text-3xl font-bold text-green-900 mb-2 text-center">
          Admin Login
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Sign in to manage site content
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
              required
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-200">
              {error}
            </p>
          )}

          {resetMessage && (
            <p className="text-green-700 text-sm font-medium bg-green-50 p-3 rounded-lg border border-green-200">
              {resetMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting || !email || !password}
            className={`w-full px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 shadow-md ${
              submitting || !email || !password
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-700 hover:bg-green-800 hover:shadow-lg'
            }`}
          >
            {submitting ? 'Signing in...' : 'Sign In'}
          </button>

          <button
            type="button"
            onClick={handleForgotPassword}
            className="w-full text-sm text-green-700 hover:text-green-900 font-medium transition-colors"
          >
            Forgot password?
          </button>
        </form>
      </div>
    </div>
  );
}
