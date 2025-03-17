import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { auth } from "../config/firebaseConfig"; // Import Firebase auth
import { onAuthStateChanged } from "firebase/auth";
import WelcomeScreen from "./CharacterListScreen"; // Screen after login
import LoginScreen from "./LoginScreen"; // Login screen

const AuthHandler = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return user ? <WelcomeScreen /> : <LoginScreen />;
};

export default AuthHandler;
