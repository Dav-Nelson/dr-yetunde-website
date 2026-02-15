import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './context/AuthContext.jsx';
import { ErrorBoundary } from 'react-error-boundary';

// Simple root-level error boundary
function ErrorFallback({ error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Something went wrong</h1>
        <p className="text-gray-700 mb-6">
          We’re sorry — an unexpected error occurred.
        </p>
        <p className="text-sm text-gray-500 mb-4">
          {error?.message || 'Unknown error'}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);