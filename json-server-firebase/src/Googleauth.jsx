import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth';

// ✅ Firebase config (replace with your own)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function GoogleAuth() {
  const [user, setUser] = useState(null);

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (err) {
      console.error('Google sign-in error:', err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      console.error('Sign out error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-green-600">Firebase Google Login</h1>

        {user ? (
          <>
            <img src={user.photoURL} alt="Profile" className="w-24 h-24 mx-auto rounded-full mb-4 shadow" />
            <h2 className="text-xl font-semibold">{user.displayName}</h2>
            <p className="text-gray-600">{user.email}</p>
            <button
              onClick={logout}
              className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={loginWithGoogle}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow"
          >
            Sign in with Google
          </button>
        )}
      </div>
    </div>
  );
}
