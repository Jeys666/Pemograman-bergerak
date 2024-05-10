import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet, Image } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [isVictor, setIsVictor] = useState(false);

  const checkPalindrome = () => {
    // Remove spaces and convert to lowercase
    const text = inputText.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    // Reverse the text
    const reversedText = text.split('').reverse().join('');

    // Check if original text is the same as the reversed text
    setIsVictor(text === reversedText);

    if (text === reversedText) {
      Alert.alert('Yes, it\'s a piktor!');
    } else {
      Alert.alert('No, it\'s not a raimu elek.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://media.sketchfab.com/models/27383039d2224388a80478a2f14d6a83/thumbnails/2dc8eae489d747a0977c3032b1ae291f/3b51ebc2259f4927b6aa3242560f6a52.jpeg',
        }}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter text"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
      <Button title="Check" onPress={checkPalindrome} />
      {isVictor && <Text style={styles.resultGreen}>Victor!</Text>}
      {!isVictor && isVictor !== false && (
        <Text style={styles.resultRed}>Not Victor!</Text>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  input: {
    borderWidth: 5,
    borderColor: '#ff6f00',
    padding: 15,
    margin: 20,
    width: 250,
    backgroundColor: '#fff',
    fontSize: 20,
  },
  resultGreen: {
    marginTop: 20,
    fontSize: 24,
    color: '#00c853',
    fontWeight: 'bold',
  },
  resultRed: {
    marginTop: 20,
    fontSize: 24,
    color: '#ff1744',
    fontWeight: 'bold',
  },
  image: {
    marginTop: 40,
    width: 400,
    height: 300,
  },
});
