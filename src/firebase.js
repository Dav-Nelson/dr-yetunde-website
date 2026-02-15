import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// I'll uncomment if I want to use firebase Storage again
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Debug: log config in development only (remove sensitive keys)
if (import.meta.env.DEV) {
  console.log("[Firebase Config] Loaded:", {
    projectId: firebaseConfig.projectId,
    authDomain: firebaseConfig.authDomain,
    // Do NOT log apiKey or appId in production!
  });
}

// Validate required keys (prevent cryptic errors)
const requiredKeys = ["apiKey", "authDomain", "projectId", "appId"];
const missing = requiredKeys.filter(key => !firebaseConfig[key]);

if (missing.length > 0) {
  throw new Error(
    `Firebase config missing required keys: ${missing.join(", ")}. ` +
    "Check your .env file and VITE_ prefixes."
  );
}

let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.error("Firebase initialization failed:", error);
  throw error; // Let the app crash with clear error
}

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);

// I'll uncomment if I add Storage back
// export const storage = getStorage(app);