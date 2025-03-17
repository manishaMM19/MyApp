import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";
import { auth } from "../config/firebaseConfig";
import styles from "../styles/ProfileStyles"; // Import styles

const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        await fetchUserData(currentUser.uid);
      } else {
        navigation.navigate("Login");
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchUserData = async (uid) => {
    try {
      const db = getDatabase();
      const userRef = ref(db, `users/${uid}`);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        setUserData(snapshot.val());
      } else {
        Alert.alert("Error", "User data not found in database.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      Alert.alert("Error", "Failed to retrieve user data.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate("Login");
    } catch (error) {
      console.log("Logout Error:", error);
      Alert.alert("Error", "Failed to log out. Try again.");
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#FFD700" />;
  }

  return (
    <View style={styles.container}>
      {/* Header: Profile title (left) and Logout button (right) */}
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* User Info */}
      <View style={styles.userInfo}>
        <Text style={styles.text}>Name: {userData?.name || "No name available"}</Text>
        <Text style={styles.text}>Email: {userData?.email || "No email available"}</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
