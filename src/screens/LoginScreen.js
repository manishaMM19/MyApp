import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {setUser} from '../redux/userSlice'; // Import the action to update user state in Redux
import styles from '../styles/LoginStyles';
import {auth} from '../config/firebaseConfig';
import {signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        // If a user is already logged in, store user data in Redux
        dispatch(
          setUser({
            uid: user.uid,
            name: user.displayName,
            email: user.email,
          }),
        );
        navigation.replace('CharacterListScreen'); // Redirect to home screen if already logged in
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigation]);

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      // Dispatch user data to Redux after successful login
      dispatch(
        setUser({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
        }),
      );

      alert('Signed in successfully!');
      navigation.replace('CharacterListScreen'); // Redirect to Home Screen after sign in
    } catch (error) {
      console.log('--------------------------------')
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.forgotText}>Forgot Password?</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>
        Don't have an account?{' '}
        <Text onPress={() => navigation.navigate('Signup')} style={styles.link}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
