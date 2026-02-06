export const uploadToCloudinary = async (file) => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const apiKey = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME_API_KEY;
    const apiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret ) {
        throw new Error('Cloudinary config missing');
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default');

    const url = 'https://api.cloudinary.com/v1_1/${cloudName}/image/upload';

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
        throw new Error(data.error?.message || 'Upload failed');
    }
} catch (err) {
    console.error('Cloudinary upload error:', err);
    throw err;
}
};
