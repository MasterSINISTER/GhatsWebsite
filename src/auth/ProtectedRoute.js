import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Route, Navigate, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const ProtectedRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); // Check if a user is currently authenticated
    });

    return unsubscribe; // Clean up event listener on unmount
  }, [auth]);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />; // Redirect to login if not logged in
  }

  return children; // Render the child component if logged in
};

export default ProtectedRoute;
