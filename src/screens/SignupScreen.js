import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice'; // Import setUser action
import styles from '../styles/SignUpStyles';
import { auth, database } from '../config/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch(); // Use useDispatch to dispatch actions

  const handleSignUp = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }

    try {
      // Create a new user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = userCredential.user;

      // Store user data in Firebase Realtime Database
      await set(ref(database, `users/${newUser.uid}`), {
        name: name,
        email: newUser.email,
      });

      // Dispatch the user data to Redux
      dispatch(setUser({
        uid: newUser.uid,
        name: name,
        email: newUser.email,
      }));

      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('Login'); // Redirect to login screen
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

