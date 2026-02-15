export const uploadToCloudinary = async (file) => {
  // Only log in development
  if (import.meta.env.DEV) {
    console.log('[Cloudinary Upload] Starting...');
    console.log('[Cloudinary] Cloud Name:', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'MISSING');
    console.log('[Cloudinary] Preset:', 'blog_unsigned');
  }

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME?.trim();

  if (!cloudName) {
    throw new Error('Missing VITE_CLOUDINARY_CLOUD_NAME in .env file');
  }

  // Client-side validation (optional but recommended)
  if (!file) {
    throw new Error('No file selected');
  }
  if (!file.type.startsWith('image/')) {
    throw new Error('Only image files are allowed');
  }
  if (file.size > 5 * 1024 * 1024) { // 5MB limit
    throw new Error('File size exceeds 5MB limit');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'blog_unsigned');

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  try {
    // Optional: add AbortController + timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.secure_url) {
      return {
        url: data.secure_url,
        public_id: data.public_id,
        width: data.width,
        height: data.height,
        format: data.format,
        bytes: data.bytes,
      };
    }

    // Handle Cloudinary-specific errors more gracefully
    const errMsg = data.error?.message || 'Upload failed';
    if (errMsg.includes('preset')) {
      throw new Error('Invalid upload preset. Check Cloudinary dashboard.');
    }
    if (errMsg.includes('file')) {
      throw new Error('Invalid file type or size. Please try another image.');
    }

    throw new Error(errMsg);
  } catch (err) {
    if (err.name === 'AbortError') {
      throw new Error('Upload timed out. Please try again.');
    }
    console.error('Cloudinary upload error:', err);
    throw err;
  }
};