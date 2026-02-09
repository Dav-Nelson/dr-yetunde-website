export const uploadToCloudinary = async (file) => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME?.trim();
  const preset = 'blog_unsigned';

  // Optional: debug log (you can remove later)
  console.log('[Cloudinary] Cloud Name:', cloudName || 'MISSING');
  console.log('[Cloudinary] Preset:', preset);

  if (!cloudName) {
    throw new Error('Missing VITE_CLOUDINARY_CLOUD_NAME in .env');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', preset);

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.secure_url) {
      return {
        url: data.secure_url,
        public_id: data.public_id,
        width: data.width,
        height: data.height,
      };
    } else {
      throw new Error(data.error?.message || 'Cloudinary upload failed');
    }
  } catch (err) {
    console.error('Cloudinary upload error:', err);
    throw err;
  }
};