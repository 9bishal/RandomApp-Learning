import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const[count, setCount] = useState(0);
  const increaseCount=()=>{
    setCount(count+1);
  }
  const decreaseCount=()=>{
    setCount(count-1);
  }
  

  return (
  <View style={styles.container}>
    <Text style={styles.countText}>{count}</Text>
    
    <View style={styles.buttonContainer}>
      <Button title="-" onPress={decreaseCount} />
      <Button title="+" onPress={increaseCount} />
    </View>
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
});