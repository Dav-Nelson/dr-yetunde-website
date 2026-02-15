import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // ← add for aliases

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Optional: base path (uncomment if deploying to subfolder)
  // base: '/dr-yetunde-abioye/', // example for subpath

  resolve: {
    alias: {
      // Makes imports cleaner (e.g. import { uploadToCloudinary } from '@utils/cloudinaryUpload')
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@firebase': path.resolve(__dirname, 'src/firebase'),
      // Add more as needed
    },
  },

  // Optional: server options (e.g. open browser on start, custom port)
  server: {
    open: true, // auto-open browser on npm run dev
    port: 5173,
    // proxy: { '/api': 'http://localhost:3000' } // if you add backend later
  },

  // Optional: build optimizations (uncomment for production tweaks)
  build: {
    // sourcemap: true, // helpful for debugging production issues
    rollupOptions: {
      output: {
        // manualChunks: { vendor: ['react', 'react-dom'] } // better caching
      },
    },
  },
});