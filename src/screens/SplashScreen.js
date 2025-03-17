import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from '../styles/SplashStyles';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>My App</Text>
        </View>
    );
};

export default SplashScreen;
