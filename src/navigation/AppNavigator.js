import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import CharacterListScreen from '../screens/CharacterListScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AuthHandler from '../screens/AuthHandler';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="AuthHandler" component={AuthHandler} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="CharacterListScreen" component={CharacterListScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
