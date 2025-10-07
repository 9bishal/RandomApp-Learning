import { useState } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  Alert 
} from 'react-native';
export default function App3() {
    const [text, setText] = useState('');
    const handleTextChange = (inputText: string) => {
        setText(inputText);
    };
    const clearText = () => {
        setText('');
    };
    const showText = () => {
        if (text.trim() === '') {
            Alert.alert('Input is empty', 'Please enter some text');
        } else {
            Alert.alert('You entered', text);
        }
    };
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Text Input Demo</Text>
      
      <TextInput
        style={styles.textInput}
        placeholder="Type something here..."
        value={text}
        onChangeText={handleTextChange}
      />
      
      <Text style={styles.preview}>
        You typed: {text || '(nothing yet)'}
      </Text>

      <View style={styles.buttonContainer}>
        <Button title="Clear Text" onPress={clearText} color="red" />
        <Button title="Show Text" onPress={showText} color="blue" />
      </View>

      <Text style={styles.charCount}>
        Characters: {text.length}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  textInput: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  preview: {
    fontSize: 18,
    marginBottom: 20,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  charCount: {
    fontSize: 16,
    color: 'blue',
  },
});