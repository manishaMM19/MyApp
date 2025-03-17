import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from 'react-native';
import CharacterCard from '../components/CharacterCard';
import {fetchThronesCharacters} from '../services/ThronesAPI';
import styles from '../styles/CharacterListStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Voice from '@react-native-voice/voice'; // Import the voice package
import {PermissionsAndroid} from 'react-native';

// Function to request microphone permission on Android
const requestAudioPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: 'Audio Permission',
        message: 'We need access to your microphone for voice search',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the microphone');
    } else {
      console.log('Microphone permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const CharacterListScreen = ({navigation}) => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [isRecording, setIsRecording] = useState(false); // Track recording status

  useEffect(() => {
    fetchData();
    // Setup voice events
    Voice.onSpeechResults = onSpeechResultsHandler; // Listen for speech recognition results
    Voice.onSpeechStart = onSpeechStartHandler; // Handle when speech starts
    Voice.onSpeechEnd = onSpeechEndHandler; // Handle when speech ends

    // Request audio permission when the component mounts
    requestAudioPermission();

    return () => {
      Voice.destroy().then(Voice.removeAllListeners); // Clean up listeners on unmount
    };
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetchThronesCharacters();
      setCharacters(data);
      setFilteredCharacters(data);
    } catch (error) {
      Alert.alert('Error', 'Failed to load characters.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = query => {
    setSearchQuery(query);
    const filtered = characters.filter(char =>
      char.fullName.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredCharacters(filtered);
  };

  // Handle speech-to-text results
  const onSpeechResultsHandler = event => {
    const voiceQuery = event.value[0]; // Get the recognized text
    handleSearch(voiceQuery); // Use the recognized text to filter the characters
  };

  const onSpeechStartHandler = () => {
    console.log('Speech recognition started.');
    setIsRecording(true); // Update recording status
  };

  const onSpeechEndHandler = () => {
    setIsRecording(false); // Update recording status
  };

  // Start voice recording
  const startVoiceRecognition = () => {
    console.log('Starting voice recognition...');
    Voice.start('en-US'); // Start speech recognition with the English locale
  };

  // Stop voice recording
  const stopVoiceRecognition = () => {
    console.log('Stopping voice recognition...');
    Voice.stop(); // Stop voice recognition
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Game of Thrones Characters</Text>

        {/* Clickable Profile Icon */}
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-circle-outline" size={30} color="#FFD700" />
        </TouchableOpacity>
      </View>

      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search character..."
        placeholderTextColor="#aaa"
        onChangeText={handleSearch}
        value={searchQuery}
      />

    

      {/* Voice Search Button */}
      <TouchableOpacity
        onPress={() => {
          console.log('Voice button pressed'); // Check if button is clicked
          isRecording ? stopVoiceRecognition() : startVoiceRecognition();
        }}
        style={styles.voiceButton}>
        {/* <Ionicons
          name={isRecording ? 'mic-off' : 'mic'}
          size={30}
          color="#FFD700"
        /> */}
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#FFD700" />
      ) : (
        <FlatList
          data={filteredCharacters}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CharacterCard character={item} />}
        />
      )}
    </View>
  );
};

export default CharacterListScreen;
